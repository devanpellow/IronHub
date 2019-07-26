const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/signup", (req, res, next) => {
	const { username, password } = req.body;

	if (!password || !username) {
		return res.status(400).json({ message: "Both fields are required" });
	} else if (password.length < 8) {
		return res
			.status(400)
			.json({ message: "Password needs to be 8 char. min" });
	}

	User.findOne({ username: username })
		.then(user => {
			if (user) {
				return res
					.status(409)
					.json({ message: "Username is already taken" });
			}

			const salt = bcrypt.genSaltSync();
			const hash = bcrypt.hashSync(password, salt);

			return User.create({
				username,
				password: hash
			}).then(newUser => {
				req.login(newUser, err => {
					if (err) {
						return res
							.status(500)
							.json({
								message: "Error while attempting to login"
							});
					}

					res.status(200).json(newUser);
				});
			});
		})
		.catch(err => {
			res.status(500).json({ message: "Error at signup" });
		});
});

router.post("/login", (req, res) => {
	passport.authenticate("local", (err, user) => {
		if (err) {
			return res
				.status(500)
				.json({ message: "Error while authenticating" });
		} else if (!user) {
			return res.status(401).json({ message: "Invalid credentials" });
		}
		req.login(user, err => {
			if (err) {
				return res
					.status(500)
					.json({ message: "Error while attempting to login" });
			}
			return res.status(200).json(user);
		});
	})(req, res);
});

router.post("/logout", (req, res) => {
	req.logout();
	res.status(200).json({ message: "User was successfully logged out" });
});

router.get("/loggedin", (req, res) => {
	res.json(req.user);
});

module.exports = router;

// router.get("/login", (req, res, next) => {
//   res.render("auth/login", { "message": req.flash("error") });
// });

// router.post("/login", passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "/auth/login",
//   failureFlash: true,
//   passReqToCallback: true
// }));

// router.get("/signup", (req, res, next) => {
//   res.render("auth/signup");
// });

// router.post("/signup", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   if (username === "" || password === "") {
//     res.render("auth/signup", { message: "Indicate username and password" });
//     return;
//   }

//   User.findOne({ username }, "username", (err, user) => {
//     if (user !== null) {
//       res.render("auth/signup", { message: "The username already exists" });
//       return;
//     }

//     const salt = bcrypt.genSaltSync(bcryptSalt);
//     const hashPass = bcrypt.hashSync(password, salt);

//     const newUser = new User({
//       username,
//       password: hashPass
//     });

//     newUser.save()
//     .then(() => {
//       res.redirect("/");
//     })
//     .catch(err => {
//       res.render("auth/signup", { message: "Something went wrong" });
//     })
//   });
// });

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/");
// });

// module.exports = router;
