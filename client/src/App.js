import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Protected from "./components/Protected";

import Profile from "./containers/Profile";
import Project from "./containers/Project";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Nav from "./components/Nav";

class App extends Component {
	state = {
		user: this.props.user
	};

	setUser = user => {
		this.setState({
			user
		});
	};

	render() {
		return (
			<div className="App">
				<Route component={Nav} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Protected
            exact
            path="/signup"
            redirectPath="/signup"
            setUser={this.setUser}
            user={!this.state.user}
            component={Signup}
          />
					<Protected
            exact
            path="/login"
            redirectPath="/login
            "
            setUser={this.setUser}
            user={!this.state.user}
            component={Login}
          />
          <Protected
            exact
            path="/profile"
            redirectPath="/login"
            user={this.state.user}
            component={Profile}
          />
					<Route
						exact
						path="/profile"
						render={props => (
							<Profile user={this.state.user} {...props} />
						)}
					/>
					<Route path={"/project/:id"} component={Project} />
				</Switch>
			</div>
		);
	}
}

export default App;
