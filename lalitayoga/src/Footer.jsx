//create a basic footer component
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5">
      <Container
        fluid={true}
        className="d-flex flex-column justify-content-around flex-md-row "
      >
        <div>
          <h3>Where we are</h3>
          <p> R. dos Lírios 5, 2640-012, Ribamar- Portugal</p>
        </div>
        <div>
          <h3>Contact us</h3>
          <p>915783064</p>
          <p>AL/581100</p>
        <p><a href="mailto:lalitayogacamp@gmail.com">lalitayogacamp@gmail.com</a></p>
        </div>
        <div>
          <h3>Follow us</h3>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;
