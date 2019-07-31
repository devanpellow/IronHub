import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../api/service";
import Container from "react-bootstrap/Container";

const handleSubmit = props => {
	logout().then(() => {
		props.setUser(null);
	});
};

const Nav = props => {
	return (
		<Container id="nav-container">
			<Navbar>
				<Navbar.Brand>
					<Link to="/">
						<img
							src="/images/IRONHUBLOGO.png"
							width="50"
							height="50"
							className="d-inline-block align-top"
							alt="IronHub"
						/>
					</Link>
				</Navbar.Brand>
				{props.user ? (
					<>
						<Navbar.Collapse className="justify-content-end nav-btns">
							<Link to="/profile">
								<Button variant="link">Profile</Button>
							</Link>
							<Link onClick={() => handleSubmit(props)} to="/">
								Logout
							</Link>
						</Navbar.Collapse>
					</>
				) : (
					<>
						<Navbar.Collapse className="justify-content-end nav-btns">
							<Link to="/profile">
								<Button variant="link">Profile</Button>
							</Link>
							<Link to="/login">
								<Button variant="link">Login</Button>
							</Link>
							<Link to="/signup">
								<Button variant="link">Signup</Button>
							</Link>
						</Navbar.Collapse>
					</>
				)}
			</Navbar>
		</Container>
	);
};

export default Nav;
