import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"

const ProjectCard = props => {

  const projects = props.filtered.length > 0 ? props.filtered : props.allProjects

	return (
		<div>
			

			{projects.map(project => {
				return (
					<Card key={project._id} style={{ width: "18rem" }}>
						<Card.Body>
							<img
								className="projectImg"
								src={`${project.imageUrl}`}
								alt="project screenshot"
							/>
							<Card.Text>{project.title}</Card.Text>
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

// {props.filtered.map(project => {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Body>
//         <img
//           className="projectImg"
//           src={`${project.imageUrl}`}
//           alt="project screenshot"
//         />
//         <Card.Text>{project.title}</Card.Text>
//         <a
//           href={project.projectUrl}
//           rel="noopener noreferrer"
//           target="_blank"
//         >
//           Visit Site
//         </a>
//         <Link to={`/project/${project._id}`}>
//           Project Details
//         </Link>
//       </Card.Body>
//     </Card>
//   );
// })}