import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Know Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signup">
              Sign Up
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Log In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
