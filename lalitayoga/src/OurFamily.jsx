import React from "react";
import AnyQuestions from "./AnyQuestions";
import MainFooter from "./MainFooter";
import MenuBar from "./MenuBar";

import Button from "react-bootstrap/Button";

import ContactForm from "./ContactForm";

import { Container, Row, Col } from "react-bootstrap";
import yoga from "./assets/salayoga.jpg";

function OurFamily(props) {
  return (
    <div>
      <MenuBar />
      <Container className="d-flex justify-content-center  mt-5">
        <Row
          xs={1}
          md={2}
          className="d-flex justify-content-around  align-items-center mt-5 "
        >
          <Col className="d-flex flex-column justify-content-around  ">
            <img src={yoga} className="img-fluid ml-5" alt="yoga" />
            <h1>Adriano</h1>
            <h5>Yoga Professor</h5>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et
              justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus
              a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum.
              Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna
              justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget
              volutpat massa. Quisque ultrices felis a odio rutrum, at viverra
              tortor placerat. Sed consectetur lacus urna. Phasellus fermentum
              non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet
              et, gravida at orci. Etiam nec consectetur mauris.{" "}
            </p>

          </Col>
          <Col className="d-flex flex-column">
            <img src={yoga} className="img-fluid ml-5" alt="yoga" />
            <h1>Mônica</h1>
            <h5>Administrative</h5>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et
              justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus
              a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum.
              Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna
              justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget
              volutpat massa. Quisque ultrices felis a odio rutrum, at viverra
              tortor placerat. Sed consectetur lacus urna. Phasellus fermentum
              non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet
              et, gravida at orci. Etiam nec consectetur mauris.{" "}
            </p>

          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center mb-5 ">
        <Row
          xs={1}
          md={3}
          className="d-flex justify-content-around  align-items-center mt-5 "
        >
          <Col className="d-flex flex-column justify-content-around  ">
            <img src={yoga} className="img-fluid ml-5" alt="yoga" />
            <h1>Babbette</h1>
            <h5>Yoga Professor</h5>

            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et
              justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus
              a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum.
              Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna
              justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget
              volutpat massa. Quisque ultrices felis a odio rutrum, at viverra
              tortor placerat. Sed consectetur lacus urna. Phasellus fermentum
              non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet
              et, gravida at orci. Etiam nec consectetur mauris.{" "}
            </p>
            <Button variant="outline-dark" className="mt-3 mb-5">
              Read More
            </Button>
          </Col>
          <Col className="d-flex flex-column">
            <img src={yoga} className="img-fluid ml-5" alt="yoga" />
            <h1>Miguel & Lourenço</h1>
            <h5>Surf</h5>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et
              justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus
              a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum.
              Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna
              justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget
              volutpat massa. Quisque ultrices felis a odio rutrum, at viverra
              tortor placerat. Sed consectetur lacus urna. Phasellus fermentum
              non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet
              et, gravida at orci. Etiam nec consectetur mauris.{" "}
            </p>
            <Button variant="outline-dark" className="mt-3 mb-5">
              Read More
            </Button>
          </Col>
          <Col className="d-flex flex-column">
            <img src={yoga} className="img-fluid ml-5" alt="yoga" />
            <h1>Lucia</h1>
            <h5>Ayurveda</h5>

            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et
              justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus
              a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum.
              Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna
              justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget
              volutpat massa. Quisque ultrices felis a odio rutrum, at viverra
              tortor placerat. Sed consectetur lacus urna. Phasellus fermentum
              non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet
              et, gravida at orci. Etiam nec consectetur mauris.{" "}
            </p>
            <Button variant="outline-dark" className="mt-3 mb-5">
              Read More
            </Button>
          </Col>
        </Row>
      </Container>
      <AnyQuestions />
      <ContactForm />
      <MainFooter />
    </div>
  );
}

export default OurFamily;
