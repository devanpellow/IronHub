import React, { Component } from "react";
import Nav from "../components/Nav";
import ProfileForm from "../components/Profile/ProfileForm";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ProfileForm />
      </div>
    );
  }
}
