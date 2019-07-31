import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileForm from "../components/Profile/Form";
import ProjectForm from "../components/Project/Form";
//import Project from "../components/Project";
import axios from "axios";

export default class Profile extends Component {
  state = {
    displayEditForm: false,
    displayProjectForm: false
  };

  displayEditForm = () => {
    this.setState({
      displayEditForm: !this.state.displayEditForm,
      displayProjectForm: false
    });
  };
  displayProjectForm = () => {
    this.setState({
      displayEditForm: false,
      displayProjectForm: !this.state.displayProjectForm
    });
  };

  deleteProject = (event, id) => {
    event.preventDefault();

    axios
      .delete(`/project/${id}`, {})
      .then(() => {
        axios.get("/profile").then(res => {
          console.log(res);
          this.props.setUser(res.data);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  editProject = () => {};
  //axios put and then put route to edit or delete project

  render() {
    const { name, location, bio, github, linkedin, skills, projects } =
      this.props.user || this.props.location.user;

    return (
      <div className="profileClass">
        <div>
          <h1>Profile Page:</h1>
          <h1>Name: {name}</h1>
          <h1>Campus: {location}</h1>
          <h1>Bio: {bio}</h1>
          <h1>Github: {github}</h1>
          <h1>linkedin: {linkedin}</h1>
          <h1>Skills: {skills}</h1>
        </div>
        <div className="projectDisplayProfile">
          <h1>
            Projects:{" "}
            {projects.map(project => (
              <div>
                <Link to={`/project/${project._id}`}>
                  {project.title}
                  <br />
                </Link>
                <button
                  className="btn btn-primary"
                  onClick={e => this.editProject()}
                >
                  Edit
                </button>{" "}
                <button
                  className="btn btn-primary"
                  onClick={e => this.deleteProject(e, project._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </h1>
        </div>
        <div>
          <button onClick={this.displayEditForm}>Edit Profile</button>
          {this.state.displayEditForm ? (
            <ProfileForm user={this.props.user || this.props.location.user} />
          ) : null}
          <button onClick={this.displayProjectForm}>Add Project</button>
          {this.state.displayProjectForm ? (
            <ProjectForm setUser={this.props.setUser} user={this.props.user} />
          ) : null}
        </div>
      </div>
    );
  }
}
