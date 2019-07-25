import React, { Component } from "react";
import Nav from "../components/Nav";
import Form from "../components/Project/Form"

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <h2>Enter Module Project:</h2>
          <Form />
          </div>
      </div>
    );
  }
}
