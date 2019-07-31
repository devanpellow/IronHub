import React, { Component } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
// import LikeButton from "../components/LikeButton";

export class Home extends Component {
	state = {
		search: "",
		allProjects: [],
		filteredProjects: []
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ search: event.target.value});
		let filteredProjectsArr = this.state.allProjects.slice(0).filter((project) => {
				if (project.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) {
					return project.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
				}
		});

		this.setState({filteredProjects: filteredProjectsArr})
	};
	
	componentDidMount() {
		axios.get("/projects").then(response => {
			this.setState({ allProjects: response.data });
		});
	}
	
	render() {
		console.log(this.state.search)
		console.log(this.state.filteredProjects)
		return (
			<div className="home">
				<div className="home-logo">
					<img src="/../images/IRONHUBLOGO.png" alt="IronHub" />
				</div>
				<div className="search-input">
					<Form.Control
						method="POST"
						size="md"
						type="text"
						onChange={this.handleSubmit}
						value={this.state.search}
						placeholder="Technology, Student's Name, or Campus Location... "
					/>
				</div>
				<br />
				<div className="projectCardWrapper">
					<ProjectCard allProjects={this.state.allProjects} filtered={this.state.filteredProjects} />
				</div>
			</div>
		);
	}
}

export default Home;
