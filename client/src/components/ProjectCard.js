import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = props => {
	const projects =
		props.filtered.length > 0 ? props.filtered : props.allProjects;

	return (
		<div className="projectCards">
			{projects.map(project => {
				return (
					<Card key={project._id} style={{ width: "18rem" }}>
						<Card.Body>
							<Link to={`/project/${project._id}`}>
								<img
									className="projectImg"
									src={`${project.imageUrl}`}
									alt="project screenshot"
								/>
								<Card.Text>{project.title}</Card.Text>
							</Link>
							<a
								href={project.projectUrl}
								rel="noopener noreferrer"
								target="_blank"
							>
								Visit Site
							</a>
							<Link to={`/project/${project._id}`}>
								Project Details
							</Link>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
};

export default ProjectCard;
