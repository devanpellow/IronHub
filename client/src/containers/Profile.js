import React, { Component } from "react";
import Nav from "../components/Nav";
import ProfileForm from "../components/Profile/ProfileForm";
import ProjectForm from "../components/Project/Form"

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ProfileForm />
        <ProjectForm />
      </div>
    );
  }
}
