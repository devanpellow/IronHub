import React, { Component } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import ProjectCard from '../components/ProjectCard'
// import LikeButton from "../components/LikeButton";

export class Home extends Component {
	state = {
		search: "",
		projects: []
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({search:event.target.value});
		console.log(this.state.projects)
	};

	componentDidMount(){
		axios
		.get("/projects")
		.then((response)=>{
			this.setState({projects:response.data})
		})
	}

	render() {

		// let filteredProjects = this.props.projects.filter(
		// 	(project) =>{
		// 		return project.name.indexOf(this.state.search) !== -1
		// 	})

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
				<>
					<ProjectCard projects={this.state.projects}/>
				</>
			</div>
		);
	}
}

export default Home;
