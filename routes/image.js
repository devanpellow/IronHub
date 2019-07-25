const express = require("express");
const router = express.Router();

// include the model:
const Image = require("../models/image");

router.get("/image", (req, res, next) => {
  Image.find()
    .then(thingsFromDB => {
      res.status(200).json(imageFromDB);
    })
    .catch(err => next(err));
});

router.post("/image/create", (req, res, next) => {
  // console.log('body: ', req.body); ==> here we can see that all
  // the fields have the same names as the ones in the model so we can simply pass
  // req.body to the .create() method

  Image.create(req.body)
    .then(aNewImage => {
      // console.log('Created new thing: ', aNewThing);
      res.status(200).json(aNewImage);
    })
    .catch(err => next(err));
});

module.exports = router;
