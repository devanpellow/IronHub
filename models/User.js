const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    name: String,
    bio: String,
    github: String,
    linkedin: String,
    location: String,
    skills: String,
    projects: []
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
