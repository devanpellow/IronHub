import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
// import { signup } from "../services/api";

export default class Login extends Component {
	state = {
		username: "",
		password: "",
		error: ""
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		axios
			.post("/api/auth/login", {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				if (response.data.message) {
					this.setState({ error: response.data.message });
				} else {
					this.props.setUser(response.data);
					this.props.history.push({
						pathname: "/profile",
						user: response.data
					});
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group>
					<Form.Label htmlFor="username">Username:</Form.Label>
					<Form.Control
						type="text"
						name="username"
						id="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="password">Password:</Form.Label>
					<Form.Control
						type="password"
						name="password"
						id="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
				</Form.Group>

				{this.state.error && <p>{this.state.error}</p>}

				<Button type="submit">Login</Button>
			</Form>
		);
	}
}
