import React, { Component } from "react";
import axios from "axios";
import LikeButton from "../components/LikeButton";

export class Project extends Component {
  state = {
    title: "",
    projectUrl: "",
    module: "",
    description: "",
    imageUrl: "",
    liked: false,
    numberOfLikes: 0
  };

  getProject = () => {
    const projectId = this.props.match.params.id;
    return axios
      .get(`/project/${projectId}`)
      .then(response => {
        const {
          title,
          projectUrl,
          module,
          description,
          imageUrl,
          likedUser
        } = response.data;
        console.log(response.data);
        let liked = likedUser.includes(this.props.user._id);
        let numberOfLikes = likedUser.length;
        this.setState({
          title,
          projectUrl,
          module,
          description,
          imageUrl,
          liked,
          numberOfLikes
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getProject();
  }

  handleClick = () => {
    this.setState(
      {
        liked: !this.state.liked
      },
      () => {
        axios
          .put(`/project/${this.props.match.params.id}`, {
            user: this.props.user._id
          })
          .then(response =>
            this.setState({ numberOfLikes: response.data.likedUser.length })
          );
      }
    );
  };

  render() {
    return (
      <div>
        <div>
          <h1>Project Details Page</h1>
          <h1>Project Title: {this.state.title}</h1>
          <h1>Project Description: {this.state.description}</h1>
            <img src={this.state.imageUrl} alt="project screenshot" />
        </div>
        <p>{this.state.numberOfLikes}</p>
        <LikeButton liked={this.state.liked} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Project;
