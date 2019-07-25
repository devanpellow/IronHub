const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
<<<<<<< HEAD
  {
    username: String,
    password: String,
    name: String,
    bio: String,
    github: String,
    linkedin: String,
    location: {
      type: String,
      enum: ["Berlin", "Lisbon", "Paris", "Madrid"]
    },
    skills: String
    // projects: []
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
=======
	{
		username: String,
		password: String,
		name: String,
		bio: String,
		github: String,
		linkedin: String,
		location: {
			type: String,
			enum: ["Berlin", "Lisbon", "Paris", "Madrid"]
		},
		skills: String
		// projects: []
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at"
		}
	}
>>>>>>> 31551bec95aae96d812cfde3567872ef34250bc7
);

const User = mongoose.model("User", userSchema);
module.exports = User;
