const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");
const User = require("../../models/User");

router.post("/", (req, res) => {
	const {
		title,
		projectUrl,
		description,
		module,
		imageUrl,
		technologies,
		owner
	} = req.body;
	Project.create({
		title,
		projectUrl,
		description,
		module,
		imageUrl,
		technologies,
		owner
	})
		.then(project => {
			res.json(project);
		})
		.catch(err => {
			res.json(err);
		});
});

 router.get("/", (req, res) => {
	const id = req.user._id;

	User.findById({ _id: id })
		.populate("projects")
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			res.json(err);
		});
});

router.put("/", (req, res) => {
	const id = req.user._id;
	const { name, bio, github, linkedin, location, skills } = req.body;
	User.findByIdAndUpdate(
		id,
		{
			name: name,
			bio: bio,
			github: github,
			linkedin: linkedin,
			location: location,
			skills: skills
		},
		{ new: true }
	)
		.populate("projects")
		.then(user => {
			console.log(user);
			res.json(user);
		})
		.catch(err => {
			res.json(err);
		});
});

router.put("/addproject", (req, res) => {
	const id = req.user._id;
	const project = req.body.newData;
	User.findByIdAndUpdate(
		id,
		{ $push: { projects: { ...project } } },
		{ new: true }
	)
		.populate("projects")
		.then(updatedUser => {
			res.json(updatedUser);
		})
		.catch(err => {
			console.log("error wile adding project");
		});
});

module.exports = router;
