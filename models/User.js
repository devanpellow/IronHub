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
		location: {
			type: String,
			enum: ["Berlin", "Lisbon", "Paris", "Madrid"]
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
