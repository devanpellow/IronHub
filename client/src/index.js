import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Profile from "./containers/Profile";
import Project from "./containers/Project";
import Notfound from "./components/notfound";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Logout from "./containers/Logout";
import Nav from "./components/Nav";

const routing = (
  <Router>
    <Route component={Nav} />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/profile" component={Profile} />
      <Route path={"/project/:id"} component={Project} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
