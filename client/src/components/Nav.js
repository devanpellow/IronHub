import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";

export default function Nav() {
  return (
    <div>
      <Container id="nav-container">
        <Navbar>
          <Navbar.Brand href="/">
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
            <Link to="/profile"><Button variant="link">Profile</Button></Link>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
