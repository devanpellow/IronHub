const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const User = require("../models/User");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/projects", (req, res) => {
  Project.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/profile", (req, res) => {
  const {
    title,
    projectUrl,
    description,
    module,
    imageUrl,
    technologies
  } = req.body;
  console.log(req.body);
  Project.create({
    title,
    projectUrl,
    description,
    module,
    imageUrl,
    technologies
  })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/project/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  Project.findById({ _id: id })
    .then(project => {
      console.log(project);
      res.json(project);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/project/:id", (req, res) => {
  const { user } = req.body;
  const id = req.params.id;
  Project.findById(id).then(project => {
    if (project.likedUser.includes(user)) {
      Project.findByIdAndUpdate(
        id,
        { $pull: { likedUser: user } },
        { new: true }
      ).then(project => {
        res.json(project);
      });
    } else {
      Project.findByIdAndUpdate(
        id,
        { $push: { likedUser: user } },
        { new: true }
      ).then(project => {
        res.json(project);
      });
    }
  });
});

router.delete("/project/:id", (req, res) => {
  const { user } = req.body;
  const id = req.params.id;
  Project.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.json({
      message: "Successfully Deleted"
    });
  });
});

module.exports = router;
