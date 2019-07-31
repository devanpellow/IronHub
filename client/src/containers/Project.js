import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
		numberOfLikes: 0,
		owner: []
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
					likedUser,
					owner
					
				} = response.data;
				console.log("response.data",response.data);
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
					numberOfLikes,
					owner
					
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
		const {
			title,
			projectUrl,
			module,
			description,
			imageUrl,
			liked,
			technologies,
			numberOfLikes,
			owner
		} = this.state;
    return (
      <div className="container">
        <div className="projectContainer">
					<div className="projectHead">
					<a href={projectUrl}>
            <img
              className="projectPicture"
              src={imageUrl}
              alt="project screenshot"
						/>
					</a>
          </div>
          <div className="projectDescriptionBlockWrapper">
            <div className="projectDescriptionBlock">
              <div>
                <h3 className="descriptionTitle">Project Title: </h3>
                <h3>{title}</h3>
              </div>
              <div>
                <h3 className="descriptionTitle">Project Description: </h3>
								<h3>{module}</h3>
                <h3>{description}</h3>
              </div>
              <div>
                <h3 className="descriptionTitle">Technologies:</h3>
                <h3>{technologies.join(`, `)}</h3>
								{owner.map(owner => (
									<>
									<h3><>Made by: </>
										<Link to={`/profile/${owner._id}`}>
											{owner.name}
											<br />
										</Link>
										</h3>
									</>
								))}
							</div>
            </div>
          </div>
        </div>
        <div className="likeButton">
          <h3>{numberOfLikes}</h3>
          <LikeButton liked={liked} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Project;
