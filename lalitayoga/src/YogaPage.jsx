import React from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import AnyQuestions from "./AnyQuestions";
import MainFooter from "./MainFooter";
import MenuBar from "./MenuBar";
import food1 from "./assets/salayoga.jpg";
function YogaPage() {
  return (
    <div>
      <MenuBar />
      <br />
      <br />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={food1}
            alt="First slide"
            style={{ height: "60vh" }}
          />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <h1>Yoga Classes and Retreats</h1>
      <p style={{ textAlign: "justify" }} className="m-5">
        We organize all-year long courses, retreats, training, and workshops
        following the traditional Yoga curriculum and the Vedanta values. Our
        purpose is to provide the students a solid foundation on the yogic
        disciplines and lifestyle, so the authentic Yoga practice can become
        their daily ritual. Everyone is welcome in{" "}
        <a href="/house">our House</a>; all shapes and sizes and all levels of
        Yoga practitioners – beginners, intermediate and also teachers.{" "}
        <a href="/book">During the Stay</a> they start or continue a strong
        relationship with Yoga and understand the real aim of this discipline.
      </p>{" "}
      <p style={{ textAlign: "justify" }} className="m-5">
        The practitioners grow in a vital and spiritual journey, and create a
        more equitable relationship with body and mind. The classes (90 min) are
        based on the studying and execution of traditional Mantras, practice of
        Asanās (postures), Surya Namaskār, Prāṇāyāma (breathing exercises), and
        Yoganidrā (conscious relaxation).Textbooks and printed course materials,
        <a href="/news"> welcome kit</a>, Āsana practice props are provided to
        all the students. The meditation and practices are made both outdoor in
        the garden and in the Yoga shala, depending on weather conditions and
        group needs. The Courses will be taught by notable{" "}
        <a href="/about">yogis and teachers</a> with experience in Yoga and its
        many branches.{" "}
      </p>
      <Button
        variant="dark"
        className="mb-5"
        style={{ backgroundColor: "#444945" }}
      >
        BOOK NOW
      </Button>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={food1}
            alt="First slide"
            style={{ height: "60vh" }}
          />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <h1>Yoga Courses</h1>
      <p style={{ textAlign: "justify" }} className="m-5">
        Take time for yourself and honour your temple with a breakaway in
        beautiful Sintra. Join us for one week and be immersed in nature. During
        this time together we are going to explore the Vinyasa discipline
        starting from the most traditional approach, the eastern one, till the
        most contemporary and creative one. This experience is designed for
        those who wish to go deeper into the practice of Vinyasa Yoga, to
        understand its techniques, its secrets, it philosophy. Bks Iyengar
        writes: "The word vinyasa has two parts. Vi means separating and nyasa
        means placing or putting down. Vinyasa means separating and putting down
        or placing in a sequential order." We will point at the exploration of
        the correct alignment which will bring you an understanding of the
        healing purpose of the asanas and the inner feeling of the body and
        mind.{" "}
      </p>
      <h1 className="m-5">Program and Daily Schedule</h1>
      <p className="m-5" style={{ textAlign: "justify" }}>
        Experience the timeless wisdom of yoga at our traditional yoga retreat.
        Immerse yourself in a peaceful environment, surrounded by nature and
        dedicated to the practice of yoga. Our retreats are led by experienced
        teachers who guide you through a variety of yoga styles, including
        Hatha, Vinyasa, and Restorative Yoga. Take this opportunity to deepen
        your practice, connect with like-minded individuals, and rejuvenate your
        mind, body, and soul. Our retreats offer a balanced program of yoga,
        meditation, and mindfulness, along with delicious healthy meals and
        comfortable accommodation.
      </p>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={food1}
            alt="First slide"
            style={{ height: "60vh" }}
          />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <Container>
        <h1 className="m-5">Traditional Yoga Retreat</h1>
        <p style={{ textAlign: "justify" }}>
          Experience the timeless wisdom of yoga at our traditional yoga
          retreat. Immerse yourself in a peaceful environment, surrounded by
          nature and dedicated to the practice of yoga. Our retreats are led by
          experienced teachers who guide you through a variety of yoga styles,
          including Hatha, Vinyasa, and Restorative Yoga. Take this opportunity
          to deepen your practice, connect with like-minded individuals, and
          rejuvenate your mind, body, and soul. Our retreats offer a balanced
          program of yoga, meditation, and mindfulness, along with delicious
          healthy meals and comfortable accommodation.
        </p>

        <p style={{ textAlign: "justify" }}>
          Come and join us on a journey of self-discovery and transformation.
          Book your traditional yoga retreat with us today and connect with your
          inner self, discovering peace, joy and balance.
        </p>

        <h1 className="m-5">Program and Daily Schedule</h1>
        <p className="m-5" style={{ textAlign: "justify" }}>
          Experience the timeless wisdom of yoga at our traditional yoga
          retreat. Immerse yourself in a peaceful environment, surrounded by
          nature and dedicated to the practice of yoga. Our retreats are led by
          experienced teachers who guide you through a variety of yoga styles,
          including Hatha, Vinyasa, and Restorative Yoga. Take this opportunity
          to deepen your practice, connect with like-minded individuals, and
          rejuvenate your mind, body, and soul. Our retreats offer a balanced
          program of yoga, meditation, and mindfulness, along with delicious
          healthy meals and comfortable accommodation.
        </p>

        <h3>
          <b>Available Dates</b>
        </h3>
        <h5>
          <b>April 08-15</b> <a href="/news">Easter Special</a> Yoga Retreat{" "}
        </h5>
        <h5>
          <b>April 22-24</b>Yoga & Surf with{" "}
          <a href="https://www.justyoga.pt/retiroyogasurfericeira">
            Studio Just Yoga
          </a>{" "}
        </h5>
        <h5>
          <b>Mai 06-13</b> Immersion Training 50h Certified
        </h5>
        <h5>
          <b>June 17-24</b> Yoga & Meditation Course 50h Certified
        </h5>
        <h5>
          <b>July 15-22</b> Immersion Training 50h certified{" "}
        </h5>
        <h5>
          <b>August 12-19</b> Immersion Training 50h certified{" "}
        </h5>
        <h5>
          <b>August 19-26</b> Traditional Yoga Retreat{" "}
        </h5>
        <h5>
          <b>September 2-9</b> Meditation & Yoga Course 50h certified{" "}
        </h5>
        <h5>
          <b>October 14-21</b> Traditional Yoga Retreat{" "}
        </h5>

        <h5>
          <b>November 11-18</b> Meditation & Yoga Course 50h certified{" "}
        </h5>
      </Container>
      <AnyQuestions />
      <MainFooter />
    </div>
  );
}

export default YogaPage;
