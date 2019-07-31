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
		technologies: [],
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
					technologies,
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
					technologies,
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
						this.setState({
							numberOfLikes: response.data.likedUser.length
						})
					);
			}
		);
	};

  render() {
    return (
      <div className="container">
        <div className="projectContainer">
          <div className="projectHead">
            <img
              className="projectPicture"
              src={this.state.imageUrl}
              alt="project screenshot"
            />
          </div>
          <div className="projectDescriptionBlockWrapper">
            <div className="projectDescriptionBlock">
              <div>
                <h3 className="descriptionTitle">Project Title: </h3>
                <h3>{this.state.title}</h3>
              </div>
              <div>
                <h3 className="descriptionTitle">Project Description: </h3>
                <h3>{this.state.description}</h3>
              </div>
              <div>
                <h3 className="descriptionTitle">Technologies:</h3>
                <h3>{this.state.technologies.join(`, `)}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="likeButton">
          <h3>{this.state.numberOfLikes}</h3>
          <LikeButton liked={this.state.liked} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Project;
