import { Theory } from "../models/theory.js";

function index(req, res) {
  Theory.find({})
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

export {
  index,
  create,
}