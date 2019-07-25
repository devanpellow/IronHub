import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default class ProjectForm extends Component {
	state = {
		title: "",
		projectURL: "",
		description: ""
	};

	handleChange = event => {
		const { name, value } = event.target;
		console.log(value);
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		console.log("handleSubmit");
		event.preventDefault();

		axios
			.post("/profile", {
				title: this.state.title,
				projectURL: this.state.projectURL,
				description: this.state.description,
				module: this.state.module
			})
			.then(() => {
				// this.props.refreshList();
				this.setState({
					title: "",
					projectURL: "",
					description: "",
					module: ""
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group>
					<Form.Label>Module:</Form.Label>
					<Form.Control
						as="select"
						onChange={this.handleChange}
						type=""
						name="module"
						id="module"
						value={this.state.module}
					>
						<option>Choose...</option>
						<option value="1">Module 1</option>
						<option value="2">Module 2</option>
						<option value="3">Module 3</option>
					</Form.Control>
				</Form.Group>
				{/* all groups (label + input) are grouped in a Form.Group */}
				<Form.Group>
					{/* <label></label> */}
					<Form.Label htmlFor="title">Title: </Form.Label>
					{/* <input /> */}
					<Form.Control
						type="text"
						onChange={this.handleChange}
						id="title"
						name="title"
						value={this.state.title}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor="description">Description: </Form.Label>
					<Form.Control
						onChange={this.handleChange}
						type="text"
						name="description"
						id="description"
						value={this.state.description}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor="projectURL">Project URL: </Form.Label>
					<Form.Control
						onChange={this.handleChange}
						type="text"
						name="projectURL"
						id="projectURL"
						value={this.state.projectURL}
					/>
				</Form.Group>

				<Button type="submit">Add Project</Button>
			</Form>
		);
	}
}
