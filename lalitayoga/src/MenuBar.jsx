import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import LA from './assets/LA.png';

function MenuBar() {
  return (
    <>
      <Navbar variant="dark" fixed="top" className='vh-5 d-block'>
        <Container className='d-flex justify-content-around' >
            <Nav className="d-flex justify-content-between">
            <Nav.Link href="">Stay</Nav.Link>
            <Nav.Link href="">Experiences</Nav.Link>

          </Nav>
          <Navbar.Brand href="#home" style={{margin:"0.5px"}}>
          <img
              src={LA}
              width="160"
              height="50"
              margin-top="10px"
             
            />
          </Navbar.Brand>
          <Nav  className="d-flex justify-content-between">
            <Nav.Link href="">Yoga/Surf Classes</Nav.Link>
            <Nav.Link href="">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default MenuBar;