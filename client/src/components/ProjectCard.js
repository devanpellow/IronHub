import React from "react";
import { Card, Link } from "react-bootstrap";
// import { Link } from "react-router-dom'

const ProjectCard = props => {
	return (
		<div>
			{props.projects.length > 0 && <h1>Projects:</h1>}

			{props.projects.map(project => {
				return (
					<Card style={{ width: "18rem" }}>
						<Card.Body>
            <img className="projectImg" src={`${project.imageUrl}`} alt="project screenshot" />
							<Card.Text>{project.title}</Card.Text>
              <a  href={project.projectUrl} rel="noopener noreferrer" target="_blank">Visit Site</a>
              </Card.Body>
              </Card>
              );
			})}
      </div>
	);
};

export default ProjectCard;

// <Link to={`/projects/${project._id}`}>Project Details</Link>