import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import LA from './assets/LA.png';

function MenuBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className='vh-5 d-block'>
      <Container className='d-flex justify-content-around'>
        <Navbar.Brand href="#home">
          <img
            src={LA}
            width="160"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#stay">Stay</Nav.Link>
            <Nav.Link href="#experiences">Experiences</Nav.Link>
            <Nav.Link href="#classes">Yoga/Surf Classes</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;
