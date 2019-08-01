import React, { Component } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

export class Home extends Component {
	state = {
		search: "",
		allProjects: [],
		filteredProjects: []
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ search: event.target.value });
		const search = event.target.value.toLowerCase();

		let filteredProjectsArr = this.state.allProjects.slice(0).filter(project => {
				let lowerCaseTechnologies = [];
				project.technologies.map(el => {
					return lowerCaseTechnologies.push(el.toLowerCase());
				});

				let foundTech = false
				lowerCaseTechnologies.forEach(x => {
					if(x.indexOf(search) !== -1){
						foundTech = true
					}
				})

				let projectCampus = [];
				project.owner.map(el => {
					return projectCampus.push(el.location.toLowerCase());
				});

				let foundCampus = false
				projectCampus.forEach(x => {
					if(x.indexOf(search) !== -1){
						foundTech = true
					}
				})

				let projectTitle = project.title.toLowerCase().indexOf(search) !== -1
				

				if (projectTitle) {
					return project
				} else if (foundTech) {
					return project
				} else if (foundCampus) {
					return project
				}
			});
		this.setState({ filteredProjects: filteredProjectsArr });
	};

	componentDidMount() {
		axios.get("/projects").then(response => {
			this.setState({ allProjects: response.data });
		});
	}

	render() {
		console.log(this.state)
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
					<ProjectCard
						allProjects={this.state.allProjects}
						filtered={this.state.filteredProjects}
					/>
				</div>
			</div>
		);
	}
}

export default Home;
