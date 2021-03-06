import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import AddImage from "../AddImage";

export default class ProjectForm extends Component {
  state = {
    title: "",
    projectUrl: "",
    description: "",
    module: "",
    imageUrl: "",
    technologies: [],
    owner: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    
    if (!event.target.name) {
      let technologiesCopy = [...this.state.technologies];
      if (technologiesCopy.includes(value)) {
        this.setState({
          technologies: technologiesCopy.filter(el => el !== value)
        });
      } else {
        this.setState({ technologies: [...technologiesCopy, value] });
      }
    } else
      this.setState({
        [name]: value
      });
  };

  handleSubmit = event => {
    

    event.preventDefault();

    axios
      .post("/profile", {
        title: this.state.title,
        projectUrl: this.state.projectUrl,
        description: this.state.description,
        module: this.state.module,
        imageUrl: this.state.imageUrl,
        technologies: this.state.technologies,
        owner: this.props.user._id
      })
      .then(newProject => {
        // this.props.refreshList();
        const newData = newProject.data;
        console.log("newData", newData);
        axios
          .put("/profile/addproject", { newData })
          .then(res => {
            console.log(res.data);
            this.props.setUser(res.data);

            this.setState({
              title: "",
              projectURL: "",
              description: "",
              module: "",
              imageUrl: "",
              technologies: []
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
            type="text"
            name="module"
            id="module"
            value={this.state.module}
          >
            <option>Choose...</option>
            <option value="Module 1">Module 1</option>
            <option value="Module 2">Module 2</option>
            <option value="Module 3">Module 3</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="title">Title: </Form.Label>
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
          <Form.Label>Technologies Used:</Form.Label>
          <div className="tech-check">
          <Form.Check
            type="checkbox"
            value="HTML"
            label="HTML"
            onChange={this.handleChange}
            />
          <Form.Check
            type="checkbox"
            value="CSS"
            label="CSS"
            onChange={this.handleChange}
            />
          <Form.Check
            type="checkbox"
            value="SCSS"
            label="SCSS"
            onChange={this.handleChange}
          />
          <Form.Check
            type="checkbox"
            value="JavaScript"
            label="JavaScript"
            onChange={this.handleChange}
          />
          <Form.Check
            type="checkbox"
            value="P5.js"
            label="P5.js"
            onChange={this.handleChange}
          />
          <Form.Check
            type="checkbox"
            value="Handlebars"
            label="Handlebars"
            onChange={this.handleChange}
          />
          <Form.Check
            type="checkbox"
            value="Node.js"
            label="Node.js"
            onChange={this.handleChange}
          />
          <Form.Check
            type="checkbox"
            value="Express.js"
            label="Express.js"
            onChange={this.handleChange}
          />
          <Form.Check
            type="checkbox"
            value="MongoDB"
            label="MongoDB"
            onChange={this.handleChange}
            />
            <Form.Check
            type="checkbox"
            value="React"
            label="React"
            onChange={this.handleChange}
            />
            <Form.Check
            type="checkbox"
            value="Redux"
            label="Redux"
            onChange={this.handleChange}
          />
          </div>
          </Form.Group>
          <Form.Group>
          <Form.Label htmlFor="projectUrl">Project URL: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="projectUrl"
            id="projectUrl"
            value={this.state.projectUrl}
          />
        </Form.Group>
        <AddImage onImageChange={this.handleFileUpload} />
        {this.state.imageUrl && (
          <img src={this.state.imageUrl} alt="website screenshot" />
        )}
        <Button type="submit">Submit Project</Button>
      </Form>
    );
  }
}
