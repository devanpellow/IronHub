import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

export class ProjectList extends Component {
	render() {
		return (
			<div className = "projectCards">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		);
	}
}

export default ProjectList;
