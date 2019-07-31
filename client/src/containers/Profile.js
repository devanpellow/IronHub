import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileForm from "../components/Profile/Form";
import ProjectForm from "../components/Project/Form";

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

  deleteProject = () => {};

  render() {
    const { name, location, bio, github, linkedin, skills, projects, _id } =
      this.props.user || this.props.location.user;

    return (
      <div className="container">
        <div className="profileClass">
          <div className="profileDetailsContainer">
            <h3>
              Name:
              {name}
            </h3>
            <h3>
              Campus:
              {location}
            </h3>
            <h3>
              Bio:
              {bio}
            </h3>
            <h3>Github: {github}</h3>
            <h3>linkedin: {linkedin}</h3>
            <h3>Skills: {skills}</h3>
          </div>
          <div className="projectDisplayProfile">
            <h3>
              Projects:{" "}
              {projects.map(project => (
                <Link to={`/project/${project._id}`}>
                  {project.title}
                  <br />
                </Link>
              ))}
              <button
                className="btn btn-primary"
                onClick={e => this.deleteProject(e)}
              >
                Delete
              </button>
            </h3>
          </div>
        </div>
        <div>
          <button onClick={this.displayEditForm}>Edit Profile</button>
          {this.state.displayEditForm ? (
            <ProfileForm user={this.props.user || this.props.location.user} />
          ) : null}
          <button onClick={this.displayProjectForm}>Add Project</button>
          {this.state.displayProjectForm ? <ProjectForm /> : null}
        </div>
      </div>
    );
  }
}
