import React, { Component } from "react";
import Nav from "../components/Nav";
import axios from "axios";
// import ProfileForm from "../components/Profile/Form";
// import ProjectForm from "../components/Project/Form";

export default class Profile extends Component {
  state = {
    name: "",
    bio: "",
    github: "",
    linkedin: ""
  };

  getUser = () => {
    console.log("params", this.props.params);
    // ! create global state object somewhere so you can access userid to fetch the actual user profile when authenticated.
    // const userId = this.props.params.id;
    // return axios
    // .get(`/profile`, {
    //   user: {
    //     id: userId
    //   }
    // })
    // .then(response => {
    //   const { name, bio, github, linkedin } = response.data
    //   this.setState({ name, bio, github, linkedin })
    // })
    // .catch(err =>{
    //   console.log(err)
    // })
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div>
        <h1>Profile Page:</h1>
        <h1>{this.props.user.username}</h1>
      </div>
    );
  }
}
