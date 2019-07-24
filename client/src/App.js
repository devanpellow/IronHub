import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./containers/Home";
import ProjectList from "./components/ProjectList";
import Form from "./components/Project/Form";

function App() {
	return (
		<div className="App">
      <Nav />
			<Home />
			<ProjectList />
			<ProjectList />
			<ProjectList />
			<ProjectList />
			<Form />
		</div>
	);
}

export default App;
