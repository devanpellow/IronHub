import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import AddImage from "../AddImage";
// import service from ".../api/service";

export default class ProjectForm extends Component {
  state = {
    title: "",
    projectURL: "",
    description: "",
    module: "",
    imageUrl: ""
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
        module: this.state.module,
        imageUrl: this.state.imageUrl
      })
      .then(newProject => {
        // this.props.refreshList();
        const newData = newProject.data;
        console.log("aloalosoaldo", newData);
        axios
          .put("/profile/addproject", { newData })
          .then(updatedUser => {
            console.log("updateUser", updatedUser);
            this.setState({
              title: "",
              projectURL: "",
              description: "",
              module: "",
              imageUrl: ""
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // this method handles just the file upload
  handleFileUpload = imageUrl => {
    this.setState({ imageUrl: imageUrl });
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
            <option value="1">Frontend</option>
            <option value="2">Backend</option>
            <option value="3">React</option>
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
        <AddImage onImageChange={this.handleFileUpload} />
        {this.state.imageUrl && <img src={this.state.imageUrl} />}
        <Button type="submit">Add Project</Button>
      </Form>
    );
  }
}
