import React from "react";
import { Button, Container } from "react-bootstrap";
import MenuBar from "./MenuBar";
import MainFooter from "./MainFooter";
import Slots from "./Slots";
import Slots2 from "./Slots2";
import contact from "./assets/contact.jpeg";
import AnyQuestions from "./AnyQuestions";
export default function HousePage() {
  return (
    <div>
      <MenuBar />
      <img
        src={contact}
        alt="contact"
        className="mb-5"
        style={{ height: "50vh", width: "100vw" }}
      />
      <Container>
        <h1>The House</h1>
        <p style={{ textAlign: "justify" }}>
          Lalitā House Yoga Camp is located very close to the Ocean, in the
          peaceful area of Ribamar surrendered by a natural environment, free
          from noises or crowd. You can enjoy the most beautiful Atlantic view:
          walk few minutes from the House to the wonderful oceanic cliff and
          arrive at the beaches and Surf spots of Ribeira d’Ilhas, Coxos,
          Matadouro and São Lourenço. The Village of Ericeira is at 2 km only,
          reachable by foot, bike, or by car. At walking distance, you find
          local minimarkets, a pharmacy, cafes and bakeries, bars with gigs
          nights, ATM. We have high-speed Internet connection.
        </p>
      </Container>
      <Container>
        <h1>Our Rooms</h1>
        <hr></hr>
        <br></br>
        <Slots
          button="Book now"
          link="/book"
          tittle="Suite Ocean View"
          text="The private suite has a beautiful ocean view, is very spacious and sunny all day long. There is a comfortable double bed, big wardrobe, shelf with several compartments for your personal belongings, an armchair. Extra blankets, and pillows are available. One en-suite private bathroom with shower is reserved for the guests. This room is also suitable for families, we provide a baby crib or a single bed."
        />
        <br></br>
        <Slots2
          button="Book now"
          link="/book"
          tittle="Double Room Garden View"
          text="The double private room has a view of the peaceful, quiet home backyard garden. There are comfortable double or twin beds, a big wardrobe with clothes hangers, several shelves for personal belongings, the door is lockable for your privacy. This is excellent for couples, friends. Extra blankets and pillows are available. Big, shared bathrooms are reserved for the two private rooms with bathtub or shower."
        />
        <br></br>
        <Slots
          link="/book"
          button="Book now"
          tittle="Dorm Room Oceanside"
          text="It’s a bright, spacious room, it has access to a big, flowery terrace, sunny all day long. Mostly used for 4 persons, we can host up to 6 guests. Each bed comes with reading lights, a night table and private lockable boxes for your personal belongings. There are two comfortable wardrobes and numerous storage shelves. Two shared bathrooms with big showers are reserved for this room."
        />
        <br></br>
      </Container>
      <Container className="mb-5">
        <h1>Yoga Shala</h1>
        <hr></hr>
        <br></br>
        <img
          src={contact}
          alt="contact"
          className="w-100"
          style={{ height: "50vh", width: "100%" }}
        />{" "}
        <br></br>
        <br></br>
        <p style={{ textAlign: "justify" }}>
          Shala means in Sanskrit “Home”: feel welcome in this warm, calm
          environment free from distractions and noises. Here we receive you for
          sharing the Yoga practices, meditations, workshops, lectures, Ayurveda
          consultations and messages, and mostly all the main activities. In the
          Shala you can find studying books, traditional Yoga manuals, magazines
          and all the necessary material and props such as mats, blankets,
          blocks, eye pillows, boosters, belts, available always for all the
          students.
        </p>
        <a href="/yoga">
          <Button variant="outline-dark" size="lg" block>
            Yoga Courses & Retreats
          </Button>
        </a>
      </Container>
      <Container className="mb-5">
        <h1>The Garden</h1>
        <hr></hr>
        <br></br>
        <img
          src={contact}
          alt="contact"
          className="w-100"
          style={{ height: "50vh", width: "100%" }}
        />{" "}
        <br></br> <br></br>
        <p style={{ textAlign: "justify" }}>
          Our backyard garden is the hidden pearl of the House. Silent, sunny
          from sunrise until afternoon, surrounded by evergreen trees and
          flowers. Walk barefoot on the wooden pavement, rest on the grass or on
          the hammocks, enjoy the birds singing. The chill out area is also used
          for meditation and practice, for ceremonies, and Ayurveda massages.
          Here we serve our meals, and it’s the perfect place for working and
          studying in peace.
        </p>
      </Container>
      <AnyQuestions />
      <MainFooter />
    </div>
  );
}
