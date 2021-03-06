const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/signup", (req, res, next) => {
	console.log(req.body);
	const { username, password } = req.body;

	if (!password || !username) {
		return res.status(400).json({ message: "Both fields are required" });
	} else if (password.length < 8) {
		return res.json({ message: "Password needs to be 8 char. min" });
	}

	User.findOne({ username: username })
		.then(user => {
			if (user) {
				return res.json({ message: "Username is already taken" });
			}

			const salt = bcrypt.genSaltSync();
			const hash = bcrypt.hashSync(password, salt);

			return User.create({
				username,
				password: hash
			}).then(newUser => {
				req.login(newUser, () => res.status(200).json(newUser));
			});
		})
		.catch(err => {
			res.json({ message: "Error at signup" });
		});
});

router.post("/login", (req, res) => {
	passport.authenticate("local", (err, user) => {
		if (err) {
			return res.json({ message: "Error while authenticating" });
		} else if (!user) {
			return res.json({ message: "Invalid credentials" });
		}
		req.login(user, err => {
			if (err) {
				return res.json({ message: "Error while attempting to login" });
			}
			return res.status(200).json(user);
		});
	})(req, res);
});

router.post("/logout", (req, res) => {
	req.logout();
	res.cookie("connect.sid", null);
	res.status(200).json({ message: "User was successfully logged out" });
});

router.get("/loggedin", (req, res) => {
	console.log("user", req.user);
	res.json(req.user);
});

module.exports = router;
