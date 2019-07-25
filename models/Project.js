const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: String,
    description: String,
    // url: String,
    // technologies: String,
    // project: Number,
    // displaypicture: String
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
