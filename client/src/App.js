import Nav from "./components/Nav";
import Home from "./containers/Home";
import ProjectList from "./components/ProjectList";
import Form from "./components/Project/Form";
import React, { Component } from "react";
import "./App.css";

import AddImage from "./components/AddImage";

class App extends Component {
  render() {
    console.log("start");
    return (
      <div className="App">
        <Nav />
        <Home />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <AddImage />
      </div>
    );
  }
}

export default App;
