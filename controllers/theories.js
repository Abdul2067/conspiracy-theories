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
      console.log("The evidence", req.body)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/theories")
  })
}

export {
  index,
  create,
  show,
  createEvidence,
}