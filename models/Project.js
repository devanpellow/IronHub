const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: String,
    projectUrl: String,
    module: String,
    description: String
    
  }
  // ,
  // {
  //   timestamps: true
  // }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
