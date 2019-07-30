import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileForm from "../components/Profile/Form";
import ProjectForm from "../components/Project/Form";
// import ProjectForm from "../components/Project/Form";
import LikeButton from "../components/LikeButton";

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

  render() {
    const { name, location, bio, github, linkedin, skills, projects } =
      this.props.user || this.props.location.user;

    return (
      <div>
        <h1>Profile Page:</h1>
        <h1>Name: {name}</h1>
        <h1>Campus: {location}</h1>
        <h1>Bio: {bio}</h1>
        <h1>Github: {github}</h1>
        <h1>linkedin: {linkedin}</h1>
        <h1>Skills: {skills}</h1>
        <h1>
          Projects:{" "}
          {projects.map(project => (
            <Link to={`/project/${project._id}`}>{project.title} </Link>
          ))}
        </h1>
        <button onClick={this.displayEditForm}>Edit Profile</button>
        {this.state.displayEditForm ? (
          <ProfileForm user={this.props.user || this.props.location.user} />
        ) : null}
        <button onClick={this.displayProjectForm}>Add Project</button>
        {this.state.displayProjectForm ? <ProjectForm /> : null}
        <LikeButton />
      </div>
    );
  }
}
