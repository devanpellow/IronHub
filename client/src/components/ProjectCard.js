import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class ProjectList extends Component {
	render() {
		return (
			<div>
				<Card style={{ width: "18rem" }}>
					<Card.Body>
           <img src="/../images/ironhub-logo.svg" alt="IronHub" />
						<Card.Text>
							A Web App to do something cool.
						</Card.Text>
						<Card.Link href="#">Visit Site</Card.Link>
						<Card.Link href="#">Project Details</Card.Link>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default ProjectList;