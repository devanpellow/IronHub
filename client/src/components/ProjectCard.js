import React, { Component } from "react";
import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import axios from "axios";

export class ProjectList extends Component {
  state = {
    projectUrl: ""
  };

  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <img src="/../images/ironhub-logo.svg" alt="IronHub" />
            <Card.Text>{}</Card.Text>
            <Card.Link>Project Details</Card.Link>
            <Card.Link href="#">Visit Site</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProjectList;
