//create a basic component for the slots. I want a image and a text that will be displayed in the slots. The image is displayed flex-row and when the screen is small it gets flex-column

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion"

function Slots(props) {
  return (
    <div>

      <Container className="d-flex justify-content-center mb-2">

        <Row className="d-flex flex-column justify-content-around flex-lg-row align-items-center  ">
          <Col>
            <img src={props.image} className="img-fluid " alt="yoga" />
          </Col>
          <Col>
            <h1>{props.tittle}</h1>
            <p style={{ textAlign: "justify" }}>{props.text}</p>
              <a href={props.link} style={{ color: "black" }}>
            <Button variant="outline-dark" className="mt-3">
              {props.button}
            </Button>
              </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
Slots.defaultProps = {
    button: "Read More",
  };
export default Slots;
