import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import LA from './assets/LA.png';

function MenuBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" className='vh-5 d-block'>
        <Container className='d-flex justify-content-center' >

          <Navbar.Brand href="#home" style={{margin:"7px"}}>
          <img
              src={LA}
              width="160"
              height="50"
              margin-top="10px"
              className="d-inline-block"
            />
          </Navbar.Brand>
                   
        </Container>
      </Navbar>

    </>
  );
}

export default MenuBar;