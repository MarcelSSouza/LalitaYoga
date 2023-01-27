//create a basic footer component
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook,FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="mt-5" style={{backgroundColor: "#eef2cf"} }>
      <Container
        fluid={true}
        className="d-flex flex-column justify-content-around flex-md-row "
      >
        <div>
          <h3>Address</h3>
          <p>R. dos Lírios 5, 2640-012</p>
          <p>Ribamar- Portugal</p>
        </div>
        <div>
          <h3>Contact us</h3>
          <p>🇵🇹+351 915 783 064</p>
        <p><a href="mailto:lalitayogacamp@gmail.com">lalitayogacamp@gmail.com</a></p>
          <p>🇵🇹 AL/581100</p>
        </div>
        <div>
          <h3>Follow us</h3>
          <div className="d-flex justify-content-around">
          <FaFacebook  size="6vh" />
          <FaInstagram size="6vh" />
          </div>
 
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
