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
		console.log('grbgbg',this.state.owner[0])
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
			<div>
				<div>
					<h1>Project Details Page</h1>
					<h1>Project Title: {title}</h1>
					<h1>{module}</h1>
					{owner.map(owner => (
						<>
						<h1><>Made by: </>
							<Link to={`/profile/${owner._id}`}>
								{owner.name}
								<br />
							</Link>
							</h1>
						</>
					))}
					<h1>Project Description: {description}</h1>
					<h1>Technologies:{technologies.join(",")}</h1>
					<a
						href={projectUrl}
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							src={imageUrl}
							alt="project screenshot"
						/>
					</a>
				</div>
				<p>{numberOfLikes}</p>
				<LikeButton
					liked={liked}
					handleClick={this.handleClick}
				/>
			</div>
		);
	}
}

export default Project;
