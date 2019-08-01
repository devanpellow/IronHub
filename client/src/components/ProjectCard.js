import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = props => {
	const projects =
		props.filtered.length > 0 ? props.filtered : props.allProjects;

	return (
		<div className="projectCards">
			{projects.length > 0 && projects.map(project => {
				return (
					<Card key={project._id} style={{ width: "18rem" }}>
						<Link to={`/project/${project._id}`}>
							<Card.Img
								className="projectImg"
								src={`${project.imageUrl}`}
								alt="project screenshot"
							/>
						</Link>
						<Card.Body>
							
								<Card.Text>{project.title}</Card.Text>
							<hr/ >
							<div className="card-btn">
								<div className="link-btn btn btn-outline-primary">
									<a
										href={project.projectUrl}
										rel="noopener noreferrer"
										target="_blank"
									>
										Visit Site
									</a>
								</div>
								<div className="link-btn btn btn-outline-primary">
									<Link to={`/project/${project._id}`}>
										Project Details
									</Link>
								</div>
							</div>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
};

export default ProjectCard;
