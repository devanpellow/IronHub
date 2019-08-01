import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileForm from "../components/Profile/Form";
import ProjectForm from "../components/Project/Form";
import ProjectCard from "../components/ProjectCard";
//import Project from "../components/Project";
import axios from "axios";

export default class Profile extends Component {
  state = {
    displayEditForm: false,
    displayProjectForm: false,
    allProjects: [],
    filteredProjects: []
  };

  componentDidMount() {
    axios.get("/projects").then(response => {
      this.setState({ allProjects: response.data });
    });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.user !== prevProps.user) {
      this.render()
      console.log('yooo')
    }
  }


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
    console.log("ppppppproooojects",projects)
    return (
      <div className="profileClass">
        <div className="profileDetailsContainer">
          <div>
            <h3 className="descriptionTitle">Name:</h3>
            <h3>{name}</h3>
          </div>
          <div>
            <h3 className="descriptionTitle">Campus:</h3>
            <h3>{location}</h3>
          </div>
          <div>
            <h3 className="descriptionTitle">Bio:</h3>
            <h3>{bio}</h3>
          </div>
          <div>
            <h3 className="descriptionTitle">Github:</h3>
            <h3>{github}</h3>
          </div>
          <div>
            <h3 className="descriptionTitle">linkedin:</h3>
            <h3>{linkedin}</h3>
          </div>
          <div>
            <h3 className="descriptionTitle">Skills:</h3>
            <h3>{skills}</h3>
          </div>
        </div>
        <div className="projectDisplayProfile">
          <h1>
            Projects:{" "}
            {projects.map(project => (
              <div>
                <Link to={`/project/${project._id}`}>
                  {project.title}
                  <br />
                </Link>{" "}
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
            <ProfileForm setUser={this.props.setUser} user={this.props.user || this.props.location.user} />
          ) : null}
          <button onClick={this.displayProjectForm}>Add Project</button>
          {this.state.displayProjectForm ? (
            <ProjectForm setUser={this.props.setUser} user={this.props.user} />
          ) : null}
        </div>
        <div className="projectCardWrapper">
          <ProjectCard
            allProjects={this.state.allProjects}
            filtered={this.state.filteredProjects}
          />
        </div>
      </div>
    );
  }
}
