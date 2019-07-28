import Home from "./containers/Home";
import ProjectList from "./components/ProjectList";
import Form from "./components/Project/Form";
import React, { Component } from "react";
import "./App.css";

import AddImage from "./components/AddImage";

class App extends Component {
  render() {
    console.log("start", this.props);
    return (
      <div className="App">
        <Home />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
      </div>
    );
  }
}

export default App;
