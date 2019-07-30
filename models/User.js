const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    name: { type: String, required: true },
    bio: { type: String, required: true },
    github: String,
    linkedin: String,
    location: {
      type: String,
      enum: ["Berlin", "Lisbon", "Paris", "Madrid"],
      required: true
    },
    skills: String,
    projects: [{ type: Schema.Types.ObjectId, ref: "Project" }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
