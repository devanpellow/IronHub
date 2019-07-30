import React, { Component } from "react";
import axios from "axios";
import LikeButton from "../components/LikeButton";

export class Project extends Component {
  state = {
    title: "",
    projectUrl: "",
    module: "",
    description: ""
  };

  getProject = () => {
    const projectId = this.props.match.params.id;
    return axios
      .get(`/project/${projectId}`)
      .then(response => {
        const { title, projectUrl, module, description } = response.data;
        console.log(response.data);
        this.setState({ title, projectUrl, module, description });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getProject();
  }

  render() {
    return (
      <div>
        <div>
          <h1>Project Details Page</h1>
          <h1>Project Title: {this.state.title}</h1>
          <h1>Project Description: {this.state.description}</h1>
          <p>Project ID: {this.props.match.params.id}</p>
          <p>{<img src="this.state.imageUrl" />}</p>
        </div>
        <LikeButton />
      </div>
    );
  }
}

export default Project;
