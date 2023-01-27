import React from "react";
import { Form, Button, Col } from "react-bootstrap";

function ContactForm  (props) {
  return (
    <div >
        <h1 className="text-center">Contact Us</h1>
      <Form className="form-control form-control-sm">
      <Form.Group className="mb-2 d-flex flex-column " controlId="mail">

        <Form.Control type="email" placeholder="youremail@mail.com" className="text-center "  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="message" >

        <Form.Control placeholder="Your Message" as="textarea" className="text-left" rows={4} />
      </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
