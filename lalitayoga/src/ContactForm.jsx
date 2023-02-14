import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function ContactForm() {
  return (
    <div className="w-75 d-flex flex-column m-auto mt-5">
      <h1 className="text-center">Send Email</h1>

      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Name">
            <Form.Control type="text" placeholder="Your name" />
          </FloatingLabel>
        </Col>

        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
            <Form.Control type="text" placeholder="Your phone number" />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>{" "}
      </Row>
      <Row className="mt-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Message">
            <Form.Control as="textarea" placeholder="Leave a message here" />
          </FloatingLabel>
        </Col>{" "}
      </Row>
      <Button
        variant="dark"
        type="submit"
        className="mt-2"
        style={{ backgroundColor: "#444945" }}
      >
        Submit
      </Button>
    </div>
  );
}

export default ContactForm;
