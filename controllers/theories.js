import { Theory } from "../models/theory.js";

function index(req, res) {
  Theory.find({})
  .populate("owner")
  .then(theories => { 
    res.render("theories/index", {
      theories,
      title: "Conspiracy Theories"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/theories")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Theory.create(req.body)
  .then(theory => {
    res.redirect("/theories")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/theories")
  })
}

function show(req, res) {
  Theory.findById(req.params.id)
  .populate("owner")
  .populate("evidence.owner")
  .then(theory => {
    res.render("theories/show", {
      theory,
      title: ""
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/theories")
  })
}

function createEvidence(req, res) {
  req.body.owner = req.user.profile._id
  console.log(req.user.profile)
  Theory.findById(req.params.id)
  .then(theory => {
    theory.evidence.push(req.body)
    theory.save()
    .then(() => {
      res.redirect(`/theories/${theory._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/theories")
  })
}

function edit(req, res) {
  Theory.findById(req.params.id)
  .then(theory => {
    res.render("theories/edit", {
      title: "Edit Theory",
      theory
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/theories")
  })
}

function update(req, res) {
  Theory.findByIdAndUpdate(req.params.id)
  .then(theory => {
    if (theory.owner.equals(req.user.profile._id)) {
      theory.updateOne(req.body, {new: true})
      .then(theory => {
        res.redirect(`/theories/${theory._id}`)
      })
    } else {
      throw new Error ("Permission Denied 🛑")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/theories")
  })
}

function deleteTheory(req, res) {
  
}

export {
  index,
  create,
  show,
  createEvidence,
  edit,
  update,
  deleteTheory as delete
}