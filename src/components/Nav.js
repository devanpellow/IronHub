import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import Container from 'react-bootstrap/Container'

export default function Nav() {
	return (
		<div>
			<Container>
				<Navbar>
				<Navbar.Brand href="#home">
				<img
					src="/images/ironhub-logo.svg"
					width="50"
					height="50"
					className="d-inline-block align-top"
					alt="IronHub"
				/>
			</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end nav-btns">
						<Button variant="link">Login</Button>	
						<Button variant="link">Submit Your Projects</Button>	
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</div>
	);
}
