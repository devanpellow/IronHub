const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const User = require("../models/User");

/* GET home page */
router.get("/", (req, res, next) => {
	res.render("index");
});

router.post("/profile", (req, res) => {
	const { title, projectURL, description, module } = req.body;
	console.log(req.body);
	Project.create({ title, projectURL, description, module })
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
	Project.findById({ _id:id })
		.then(project => {
			console.log(project)
			res.json(project);
		})
		.catch(err => {
			res.json(err);
		});
});


module.exports = router;
