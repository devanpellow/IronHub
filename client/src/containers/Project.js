import React, { Component } from "react";
import axios from "axios";
import Nav from "../components/Nav";

export class Project extends Component {
	state = {
		title: ""
	};

	getProject = () => {
		const projectId = this.props.match.params.id;
    return axios
			.get(`/project/${projectId}`)
			.then(response => {

				const { title } = response.data;
				this.setState({ title });
			})
			.catch(err => {
				console.log(err);
			});
	};

	componentDidMount() {
		this.getProject();
	}

	render() {
		return (
			<div>
				<div>
					<Nav />
					<h1>Project Details Page</h1>
					<h1>Project Title: {this.state.title}</h1>
					<p>Project ID: {this.props.match.params.id}</p>
				</div>
			</div>
		);
	}
}

export default Project;
