import React from "react";
import AnyQuestions from "./AnyQuestions";
import MainFooter from "./MainFooter";
import MenuBar from "./MenuBar";
import lucia from "./assets/lucia.png";
import babette from "./assets/Babette1.png";
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
          <Col className="d-flex flex-column">
            <h1>Mônica</h1>
            <h5>Founder & Food</h5>
            <p style={{ textAlign: "justify" }}>
              From Rome (Italy), she is a “forever-student” and lively Hatha
              Yoga practitioner since 2013. Passionate from travels and people,
              she is a former translator and teacher. She arrived in Ericeira
              with the dream of creating a cosy home stay of relaxation,
              adventures, and learning. Monica starts studying Yoga with Adriano
              in 2019; together they open the Lalitā House Yoga Camp. She makes
              you feel like part of the family, during your stay you can always
              count on her because she is able to organize the best, most
              personalized experience for you. She will also delight you with
              incredible, homemade food.
            </p>
          </Col>
          <Col className="d-flex flex-column justify-content-around  ">
            <h1>Adriano</h1>
            <h5>Founder & Yoga</h5>
            <p style={{ textAlign: "justify" }}>
              Brazilian from Salvador de Bahia, he started practicing and
              studying Yoga at the age of 17. He arrived in Portugal in 2016 to
              teach the traditional Yoga that he had learned from his teachers.
              Adriano is a Yoga Alliance certified experienced teacher (800h
              TTC) in traditional Yoga and Vedanta with over 2000 hours of
              teaching experience. He will guide you, with kindness and
              dedication, through the original techniques described in the old
              Yoga manuals, following the path of the Vedanta values. During the
              courses he will share the theory of Yoga and the procedure to
              create a safe, authentic Practice.
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
            <img src={babette} className="img-fluid ml-5" alt="yoga" />
            <h1>Babette</h1>
            <h5>Yoga</h5>

            <p style={{ textAlign: "justify" }}>
              Babette is a certified Yoga teacher (400h) from the Netherlands,
              she moved to Ericeira in 2022 attracted by the Ocean. She combines
              Vinyasa, Yin, and trauma-based Yoga with elements of coaching,
              breath work and body awareness. Her Yoga style will invite you to
              observe your body, mind, and emotions and to develop a dose of
              curiosity towards yourself. Kindness starts by being kind to
              yourself, something that she will teach you to practice on the mat
              and in everyday life. Babette is also a Mental and Professional
              Stress & Burn-out Coach who focuses on scaling-up consciousness
              and personal leadership.
            </p>
            <Button variant="outline-dark" className="mt-3 mb-5">
              <a href="https://www.kind-moment.com/" target="_blank" style={{color: "black"}}>
                Read More
              </a>
            </Button>
          </Col>
          <Col className="d-flex flex-column">
            <img src={yoga} className="img-fluid ml-5 " alt="yoga" />
            <h1>Miguel & Lourenço</h1>
            <h5>Surf</h5>
            <p style={{ textAlign: "justify" }}>
              Miguel and Lourenço from the Semente Surf School are our partners
              since the opening of the Lalitā House Yoga Camp. Locals 100%, they
              know the waves of Ericeira for 20 years and have 10 years of
              teaching experience. They are professional, certified coaches who
              will accompany you in the safest, funniest adventure of the
              European Surfing Reserve. Our Yoga routine provides a very
              significant improvement for your surfing skills: the Āsana
              practice confers balance, confidence, and energy, the breathing
              exercises expand the lung capacity and train the mind to deal with
              stressful situations, the meditation increases your focus and
              concentration.
            </p>
            <Button variant="outline-dark" className="mt-3 mb-5">
              <a href="https://www.sementesurfschool.com" target="_blank" style={{color: "black"}}>
                Read More
              </a>
            </Button>
          </Col>
          <Col className="d-flex flex-column">
            <img src={lucia} className="img-fluid ml-5 w-100 h-100" alt="yoga" />
            <h1>Lucía</h1>
            <h5>Ayurveda</h5>

            <p style={{ textAlign: "justify" }}>
              Lucía is a physician from Buenos Aires, Argentina. She arrived in
              Ericeira in 2021 after her postgraduate studies in Ayurvedic
              Medicine, the traditional medicine of India. Lucía will propose
              you Ayurvedic Yoga massage, a deep tissue oil massage with
              different Yoga stretches to everybody’s needs, it can be relaxing,
              energizing, deep or remedial. During the consultation, you will
              learn how to take care of yourself according to your individual
              requirements. The prevention is better than the cure through
              certain interventions of your lifestyle or daily routine and the
              adoption of natural therapies to rebalance the body, mind, and
              spirit.
            </p>
            <Button variant="outline-dark" className="mt-3 mb-5">
              <a href="https://www.luavenatti.com/" target="_blank" style={{color: "black"}}>
                Read More
              </a>
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
