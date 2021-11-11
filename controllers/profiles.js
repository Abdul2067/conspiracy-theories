import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find({}) 
  .then(profiles => {
    res.render("profiles/index", {
      profiles,
      title: "Fellow Theorist"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req,params.id)
  .them(profile => {
    res.render("profiles/show", {
      profile,
      title: `${profile.name}'s profile'`
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}


export {
  index,
  show
}