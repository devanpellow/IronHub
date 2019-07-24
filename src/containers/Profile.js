import React, { Component } from "react";
import Nav from "../components/Nav";
import UserInformation from "../components/Profile/UserInformation";
import Nav from "../components/Profile/ProjectSample";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <UserInformation />
        </div>
        <div>
          <ProjectSample />
        </div>
      </div>
    );
  }
}
