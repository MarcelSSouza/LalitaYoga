import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import Event from "./Event";
import AnyQuestions from "./AnyQuestions";
import MainFooter from "./MainFooter";
import MenuBar from "./MenuBar";
import food1 from "./assets/food1.jpg";

function RetreatPage() {
  return (
    <div>
      <MenuBar />
      <br></br>
      <br></br>
      <br></br>
      <Event
        title="Meditation Course"
        content="Sandhi House has 5 beautifully decorated bedrooms, so we can
  accomodate 10 guests max. Each room has either 1 double bed or 2
  single beds by your choice. Our guests never shares room with
  strangers, you either book as single room or share the room with your
  choosen friend or family member.  Our guests never shares room with
  strangers, you either book as single room or share the room with your
  choosen friend or family member."
        src={food1}
      />
      <Container>
        <h3>Program</h3>
        <p  style={{textAlign: "justify" }}>
          Sandhi House has 5 beautifully decorated bedrooms, so we can
          accomodate 10 guests max. Each room has either 1 double bed or 2
          single beds by your choice. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member.
        </p>
        <h3>Schedule</h3>
        <p  style={{textAlign: "justify" }}>
          Sandhi House has 5 beautifully decorated bedrooms, so we can
          accomodate 10 guests max. Each room has either 1 double bed or 2
          single beds by your choice. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member.
        </p>{" "}
        <p  style={{textAlign: "justify" }}>
          Sandhi House has 5 beautifully decorated bedrooms, so we can
          accomodate 10 guests max. Each room has either 1 double bed or 2
          single beds by your choice. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member.
        </p>
        <p  style={{textAlign: "justify" }}>
          Sandhi House has 5 beautifully decorated bedrooms, so we can
          accomodate 10 guests max. Each room has either 1 double bed or 2
          single beds by your choice. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member.
        </p>

        <br></br>
        <br></br>
        <Button
        variant="dark"
        className="mb-5"
        style={{ backgroundColor: "#444945" }}
        >
          <a href="/book" style={{color: "white"}}>

        Book Now
          </a>
      </Button>
      </Container>

      <AnyQuestions />
      <MainFooter />
    </div>
  );
}

export default RetreatPage;
