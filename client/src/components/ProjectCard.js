import React, { Component } from "react";
import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import axios from "axios";

export class ProjectList extends Component {
  state = {
    projectURL: ""
  };

  // getProjectURL = () => {
  //   const projectId = this.props.match.params.id;

  //   return axios
  //     .get(`/api/tasks/${projectId}`)
  //     .then(response => {
  //       const { projectURL } = response.data;
  //       this.setState({ projectURL });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // componentDidMount() {
  //   this.getProjectURL();
  // }

  render() {
    //const url = this.state.projectURL;

    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <img src="/../images/ironhub-logo.svg" alt="IronHub" />
            <Card.Text>A Web App to do something cool.</Card.Text>
            <Card.Link href="#">Project Details</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProjectList;
