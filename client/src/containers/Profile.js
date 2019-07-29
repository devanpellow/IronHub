import React, { Component } from "react";
import ProfileForm from "../components/Profile/Form";
// import ProjectForm from "../components/Project/Form";

export default class Profile extends Component {
	state = {
		name: "",
		bio: "",
		github: "",
		linkedin: "",
    location: "",
    skills: '',
		displayEditForm: false
	};

	displayEditForm = () => {
		this.setState({
			displayEditForm: !this.state.displayEditForm
		});
  };
  
  componentDidUpdate = () => {
    console.log('did update')
  }

	render() {
		return (
			<div>
				<h1>Profile Page:</h1>
				<button onClick={this.displayEditForm}>Edit Profile</button>
				{this.state.displayEditForm ? <ProfileForm /> : null}
				<h1>Name: {this.props.user.name}</h1>
				<h1>Campus: {this.props.user.location}</h1>
				<h1>Bio: {this.props.user.bio}</h1>
				<h1>Github: {this.props.user.github}</h1>
				<h1>linkedin: {this.props.user.linkedin}</h1>
				<h1>Skills: {this.props.user.skills}</h1>
			</div>
		);
	}
}
