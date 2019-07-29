import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import axios from 'axios'


axios
.get('api/auth/loggedin')
.then(response => {
  ReactDOM.render(
    <Router>
      <App user={response.data} />
    </Router>,
    document.getElementById('root')
  )
})
.catch(err => {
  console.log(err)
})

serviceWorker.unregister();
