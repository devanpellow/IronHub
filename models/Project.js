const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    projectUrl: { type: String, required: true },
    module: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: String,
    technologies: [],
    owner: [{ type: Schema.Types.ObjectId, ref: "User" }],
    likedUser: [{ type: Schema.Types.ObjectId, ref: "User" }]
  }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
