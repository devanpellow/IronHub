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

const routing = (
  <Router>
    <div>
      <App />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/home" component={Home} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
