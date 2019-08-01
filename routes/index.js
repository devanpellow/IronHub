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
		.populate("owner")
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
		technologies,
		owner
	} = req.body;
	console.log(req.body);
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

router.get("/profile/:id", (req, res) => {
	const { id } = req.params;
	User.findById({ _id: id })
		.populate("projects")
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			res.json(err);
		});
});

router.get("/project/:id", (req, res) => {
	const { id } = req.params;
	Project.findById({ _id: id })
		.populate("owner")
		.then(project => {
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
	Project.findOneAndRemove({ _id: req.params.id })
		.then(() => {
			res.json({
				message: "Successfully Deleted"
			});
			User.findByIdAndUpdate(
				req.user._id,
				{ $pull: { projects: { $in: id } } },
				{ new: true }
			)
				.then(updatedUser => res.json(updatedUser))
				.catch(err => console.log(err));
		})
		.catch(err => console.log(err));
});

module.exports = router;
