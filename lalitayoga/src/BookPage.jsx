import React from "react";
import AnyQuestions from "./AnyQuestions";
import MainFooter from "./MainFooter";
import MenuBar from "./MenuBar";
import { Form, Button, Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function BookPage() {
  return (
    <div>
      <MenuBar />
      <br></br>
      <br></br>
      <br></br>

      <div className="w-75 d-flex flex-column m-auto mt-5">
        <h1 className="text-center">Booking Form</h1>
        <br></br>

        <h5>
          <b>
          Thanks so much for your Booking request! We will reply to you as soon as we verify the availability for your selected dates
          </b>
        </h5>
        <br></br>

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
            <FloatingLabel controlId="floatingInputGrid" label="From">
              <Form.Control type="date" placeholder="Check-In" />
            </FloatingLabel>
          </Col>

          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="To">
              <Form.Control type="date" placeholder="Check-Out" />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Room Type">
              <Form.Select aria-label="Select your experience">
                <option value="Traditional Retreat">Suite</option>
                <option value="Meditation Course">Double Room</option>
                <option value="Immersion Training">Bed in Shared Room</option>
              </Form.Select>{" "}
            </FloatingLabel>
          </Col>{" "}
        </Row>
        <Row className="mt-2">
          <Col md>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Courses/Retreats"
            >
              <Form.Select aria-label="Select your experience">
                <option value="None">None</option>
                <option value="Traditional Retreat">Traditional Retreat</option>
                <option value="Immersion Training">Immersion Training</option>
                <option value="Meditation Course">Meditation Course</option>
                <option value="Other">Other</option>
              </Form.Select>{" "}
            </FloatingLabel>
          </Col>{" "}
        </Row>
        <Row className="mt-2">
          <Col md>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Number of People"
            >
              <Form.Select aria-label="Select the number of people">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="+4">+4</option>
              </Form.Select>{" "}
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

      <AnyQuestions />
      <MainFooter />
    </div>
  );
}
