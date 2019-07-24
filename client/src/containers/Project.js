import React, { Component } from "react";
import Nav from "../components/Nav";
import ProjectDetails from "../components/Profile/ProjectDetails";
import OtherProjects from "../components/Profile/OtherPojects";



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
          <OtherProjects />
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
