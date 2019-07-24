const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectTwoSchema = new Schema(
  {
    title: String,
    description: String,
    url: String,
    technologies: String,
    project: Number,
    displaypicture: String
  },
  {
    timestamps: true
  }
);

const ProjectTwo = mongoose.model("ProjectOne", projectTwoSchema);
module.exports = ProjectTwo;
