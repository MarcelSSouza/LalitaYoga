import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import LA from './assets/LA.png';

function MenuBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className='vh-5 d-block'>
      <Container >
        <Navbar.Brand href="#home">
          <img
            src={LA}
            width="160"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav" className='d-lg-flex justify-content-lg-end justify-content-lg-end'>
          <Nav >
            <Nav.Link href="#stay">The House</Nav.Link>
            <Nav.Link href="#experiences">Stay</Nav.Link>
            <Nav.Link href="#classes">Price & Booking</Nav.Link>
            <Nav.Link href="#about">Yoga</Nav.Link>
            <Nav.Link href="#about">Our Family</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;
