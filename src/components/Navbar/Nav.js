import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Nav.css';

function BasicExample() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="logo">Sporty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto space">
            <Nav.Link as={Link} to="/" className="navlinkpadding">Home</Nav.Link>
            <Nav.Link as={Link} to="/programs" className="navlinkpadding">Programs</Nav.Link>
            <Nav.Link as={Link} to="/about" className="navlinkpadding">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;