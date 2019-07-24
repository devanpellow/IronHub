import React, { Component } from "react";
import Nav from "../components/Nav";
import ProjectDetails from "../components/Profile/ProjectDetails";
import ProjectSample from "../components/Profile/ProjectSample";

export class ProjectDetails extends Component {
  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <ProjectDetails />
        </div>
        <div>
          <ProjectSample />
          <ProjectSample />
          <ProjectSample />
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
