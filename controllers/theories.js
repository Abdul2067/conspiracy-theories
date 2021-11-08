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

export {
  index
}