import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class UserProfile extends Component {
	state = {
		username: "",
		name: "",
		bio: "",
		github: "",
		linkedin: "",
		location: "",
		projects: []
	};

	getStudent = () => {
		const userId = this.props.match.params.id;
		return axios
			.get(`/profile/${userId}`)
			.then(response => {
				const {
					username,
					name,
					bio,
					github,
					linkedin,
					location,
					projects
				} = response.data;

				this.setState({
					username,
					name,
					bio,
					github,
					linkedin,
					location,
					projects
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	componentDidMount() {
		this.getStudent();
	}

	render() {
    const { name, location, bio, github, linkedin, projects } =	this.state
		console.log(this.state.projects);
		return (
			<div>
				<h1>{name}'s Profile:</h1>
				<h1>Name: {name}</h1>
				<h1>Campus: {location}</h1>
				<h1>Bio: {bio}</h1>
				<h1>Github: {github}</h1>
				<h1>linkedin: {linkedin}</h1>
				<h1>Projects:</h1>
				{projects.map(project => (
          <Link to={`/project/${project._id}`}>
              {project.title}
              <br />
          </Link>
        ))}
			</div>
		);
	}
}

export default UserProfile;
