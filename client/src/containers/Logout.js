import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Nav from "../components/Nav";
import axios from "axios";
// import { signup } from "../services/api";

export default class Logout extends Component {
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
      .post("/auth/logout", {
        username: this.state.username,
        password: this.state.password
      })
      .then(user => {
        console.log(user);
        this.props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Nav />
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

          {this.state.error && (
            <Alert variant="warning">{this.state.error}</Alert>
          )}

          <Button type="submit">Login</Button>
        </Form>
      </>
    );
  }
}
