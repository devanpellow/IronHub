import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class Home extends Component {

  state = {
    search: ''
  }

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
}

export default Home;
