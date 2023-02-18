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
          Sandhi House has 5 beautifully decorated bedrooms, so we can
          accomodate 10 guests max. Each room has either 1 double bed or 2
          single beds by your choice. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member. Our vision is to provide you privacy,
          space and peacefullness while staying with us. You can choose to
          socialize with our family and guests in our spacious living room, or
          you can choose you-time enjoing the view from our rooftop terrace or
          find a quiet spot with a cup of tea, a book from our library or a
          glass of wine if you prefer. Take a look at our rooms below and find
          your favourite
        </p>
      </Container>
      <Container>
        <h1>Our Rooms</h1>
        <hr></hr>
        <br></br>
        <Slots button="Book now" link="/book" tittle="Suite Ocean View" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum. Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget volutpat massa. Quisque ultrices felis a odio rutrum, at viverra tortor placerat. Sed consectetur lacus urna. Phasellus fermentum non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet et, gravida at orci. Etiam nec consectetur mauris." />
        <br></br>
        <Slots2 button="Book now"link="/book"tittle="Double Rooms Garden View" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum. Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget volutpat massa. Quisque ultrices felis a odio rutrum, at viverra tortor placerat. Sed consectetur lacus urna. Phasellus fermentum non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet et, gravida at orci. Etiam nec consectetur mauris."  />
        <br></br>
        <Slots link="/book" button="Book now"tittle="Shared Dorm Ocean Side" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor sit amet condimentum vestibulum. Nam nec dolor et justo rhoncus fermentum. Ut vitae gravida risus. Nunc mollis purus a ullamcorper porta. In ut quam nisi. Aenean in facilisis ipsum. Sed et nulla aliquam, maximus erat in, bibendum ante. Ut magna justo, laoreet vitae turpis eu, aliquam vehicula est. Morbi eget volutpat massa. Quisque ultrices felis a odio rutrum, at viverra tortor placerat. Sed consectetur lacus urna. Phasellus fermentum non nisl ac porttitor. Vestibulum velit turpis, mollis at laoreet et, gravida at orci. Etiam nec consectetur mauris." />
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
      />     <br></br>
           <br></br>
              <p style={{ textAlign: "justify" }}>
          Sandhi House has 5 beautifully decorated bedrooms, so we can
          accomodate 10 guests max. Each room has either 1 double bed or 2
          single beds by your choice. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member.  Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member. 
        </p>
        <a href="/yoga"><Button variant="outline-dark" size="lg" block>Yoga Courses & Retreats</Button></a>
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
      />     <br></br>     <br></br>
              <p style={{ textAlign: "justify" }}>
          Sandhi House has 5 beautifully decorated bedrooms, so we can
          accomodate 10 guests max. Each room has either 1 double bed or 2
          single beds by your choice. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member.  Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member. 
        </p>
        </Container>
        <AnyQuestions />
      <MainFooter />
    </div>
  );
}
