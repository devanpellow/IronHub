const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");
const User = require("../../models/User");

router.post("/", (req, res) => {
  const { title, projectURL, description } = req.body;
  console.log("reqbodyyyy", req.body);
  Project.create({ title, projectURL, description })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/", (req, res) => {
  const id = req.user._id;
  const { name, bio, github, linkedin, location, skills } = req.body;
  User.findByIdAndUpdate(id, {
    name: name,
    bio: bio,
    github: github,
    linkedin: linkedin,
    location: location,
    skills: skills
  })
    .then(user => {
      res.json({ message: "successfully updated user profile" });
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/addproject", (req, res) => {
  const id = req.user._id;
  console.log("===================", req.body.curProje);
  const project = req.body.newData;
  User.findByIdAndUpdate(
    id,
    { $push: { projects: { ...project } } },
    { new: true }
  )
    .then(updatedUser => {
      res.json({ message: "added project" });
    })
    .catch(err => {
      console.log("error wile adding project");
    });
});



module.exports = router;
