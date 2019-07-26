const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: String,
    projectURL: String,
    rojectURL: String,
    moduleNumber: Number
    // technologies: String,
    // displaypicture: String
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
