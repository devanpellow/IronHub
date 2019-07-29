import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default class ProfileForm extends Component {
	state = {
		name: this.props.user.name,
		bio: this.props.user.bio,
		github: this.props.user.github,
		linkedin: this.props.user.linkedin,
		location: this.props.user.location,
		skills: this.props.user.skills
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		console.log("handleSubmit");
		event.preventDefault();

		axios
			.put("/profile", {
				name: this.state.name,
				bio: this.state.bio,
				github: this.state.github,
				linkedin: this.state.linkedin,
				location: this.state.location,
				skills: this.state.skills
			})
			.then(() => {
				this.setState({});
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group>
					<Form.Label htmlFor="name">Name: </Form.Label>
					<Form.Control
						type="text"
						onChange={this.handleChange}
						id="name"
						name="name"
						value={this.state.name}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="bio">Bio: </Form.Label>
					<Form.Control
						onChange={this.handleChange}
						type="text"
						name="bio"
						id="bio"
						value={this.state.bio}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="github">GitHub: </Form.Label>
					<Form.Control
						onChange={this.handleChange}
						type="text"
						name="github"
						id="github"
						value={this.state.github}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="linkedin">LinkedIn: </Form.Label>
					<Form.Control
						onChange={this.handleChange}
						type="text"
						name="linkedin"
						id="linkedin"
						value={this.state.linkedin}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Campus:</Form.Label>
					<Form.Control
						as="select"
						onChange={this.handleChange}
						type="text"
						name="location"
						id="location"
						value={this.state.location}
					>
						<option>Choose...</option>
						<option value="berlin">Berlin</option>
						<option value="lisbon">Lisbon</option>
						<option value="madrid">Madrid</option>
						<option value="paris">Paris</option>
					</Form.Control>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="skills">Skills: </Form.Label>
					<Form.Control
						onChange={this.handleChange}
						type="text"
						name="skills"
						id="skills"
						value={this.state.skills}
					/>
				</Form.Group>

				<Button type="submit">Save Profile</Button>
			</Form>
		);
	}
}
