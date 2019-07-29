import React, { Component } from "react";
import ProfileForm from "../components/Profile/Form";
import ProjectForm from "../components/Project/Form";
// import ProjectForm from "../components/Project/Form";

export default class Profile extends Component {
	state = {
		displayEditForm: false,
		displayProjectForm: false
	};

	displayEditForm = () => {
		this.setState({
			displayEditForm: !this.state.displayEditForm
		});
	};
	displayProjectForm = () => {
		this.setState({
			displayProjectForm: !this.state.displayProjectForm
		});
	};

	render() {
		const { name, location, bio, github, linkedin, skills, projects } =
			this.props.user || this.props.location.user;

		return (
			<div>
				<h1>Profile Page:</h1>
				<button onClick={this.displayEditForm}>Edit Profile</button>
				{this.state.displayEditForm ? (
					<ProfileForm
						user={this.props.user || this.props.location.user}
					/>
				) : null}
				<button onClick={this.displayProjectForm}>Add Project</button>
				{this.state.displayProjectForm ? <ProjectForm /> : null}
				
				<h1>Name: {name}</h1>
				<h1>Campus: {location}</h1>
				<h1>Bio: {bio}</h1>
				<h1>Github: {github}</h1>
				<h1>linkedin: {linkedin}</h1>
				<h1>Skills: {skills}</h1>
				<h1>Game:{projects && projects[0]}</h1>
			</div>
		);
	}
}
