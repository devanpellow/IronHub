import React, { Component } from "react";
import { Form } from "react-bootstrap";
import LikeButton from "../components/LikeButton";

export class Home extends Component {
  state = {
    search: ""
  };

<<<<<<< HEAD
	render() {
		return (
			<div className="home">
				<div className="home-logo">
          <img src="/../images/IRONHUBLOGO.png" alt="IronHub" />
				</div>
				<div className="search-input">
					<Form.Control
						size="md"
						type="text"
						placeholder="Technology, Student's Name, or Campus Location... "
					/>
				</div>
				<br />
			</div>
		);
	}
=======
  render() {
    return (
      <div className="home">
        <div className="home-logo">
          <img src="/../images/ironhub-logo.svg" alt="IronHub" />
        </div>
        <div className="search-input">
          <Form.Control
            size="md"
            type="text"
            placeholder="Technology, Student's Name, or Campus Location... "
          />
        </div>
        <br />
      </div>
    );
  }
>>>>>>> d5ff35152f430ba7ad8e7436b4cfcd2cb4060527
}

export default Home;
