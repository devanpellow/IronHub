import React, { Component } from "react";
import ProfileForm from "../components/Profile/Form";
// import ProjectForm from "../components/Project/Form";

export default class Profile extends Component {
	state = {
		name: "",
		bio: "",
		github: "",
		linkedin: "",
		displayEditForm: false
	};

	displayEditForm = () => {
		this.setState({
			displayEditForm: !this.state.displayEditForm
		});
	};

	getUser = () => {
		console.log("params", this.props.params);
		// ! create global state object somewhere so you can access userid to fetch the actual user profile when authenticated.
		// const userId = this.props.params.id;
		// return axios
		// .get(`/profile`, {
		//   user: {
		//     id: userId
		//   }
		// })
		// .then(response => {
		//   const { name, bio, github, linkedin } = response.data
		//   this.setState({ name, bio, github, linkedin })
		// })
		// .catch(err =>{
		//   console.log(err)
		// })
	};

	componentDidMount() {
		this.getUser();
	}

	render() {
		return (
			<div>
				<h1>Profile Page:</h1>
				<button onClick={this.displayEditForm}>Edit Profile</button>
				{this.state.displayEditForm ? <ProfileForm /> : null}
				<h1>{this.props.user.username}</h1>
			</div>
		);
	}
}
