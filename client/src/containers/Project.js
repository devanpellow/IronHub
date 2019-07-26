import React, { Component } from "react";
import Nav from "../components/Nav";

export class Project extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          <Nav />
          <h1>Project Details Page</h1>
          <p>Project ID: {this.props.match.params.id}</p>
          </div>
      </div>
    );
  }
}

export default Project;

