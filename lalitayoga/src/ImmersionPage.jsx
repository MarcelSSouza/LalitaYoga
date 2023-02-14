import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import Event from "./Event";
import AnyQuestions from "./AnyQuestions";
import MainFooter from "./MainFooter";
import MenuBar from "./MenuBar";
import food1 from "./assets/food1.jpg";

function ImmersionPage() {
  return (
    <div>
      <MenuBar />
      <br></br>
      <br></br>
      <br></br>
      <Event
          title="Immersion Training"
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
        <div>

        <h3>What will you learn</h3>
        <p  style={{textAlign: "justify" }}>
          Sandhi House has 5 beautifully decorated bedrooms, so we can
          accomodate 10 guests max. Each room has either 1 double bed or 2
          single beds by your choice. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member. Our guests never shares room with
          strangers, you either book as single room or share the room with your
          choosen friend or family member.
        </p>
        </div>
        <div>
        <h3>Certification</h3>
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
        </div>

        06.00 - 06.30 am Yogic Drink 
06.30 - 07.30 am Ṣaṭkarma and Prānāyāma
07.30 - 08.00 am Meditation
08.00 - 08.30 am Chai and Fruit 
08.30 - 10.00 am Yoga Āsana practice
10.15 - 11.30 am Vegetarian Breakfast
11.50 - 12.20 pm Yoganidrā
12.20 - 13.20 pm Theoric Class I (Philosophy, Workshop, Physiology)
13.30 - 14.30 pm Lunch 
15.30 - 16.00 pm Prānāyāma
16.00 - 17.20 pm Theoric Class II (Philosophy, Workshop, Physiology)
17-20 - 17.40 pm Herbal tea and Fruit
17.40 - 19.00 pm Restorative Yoga practice 
19.30 - 20.30 pm Vegetarian Dinner 
21.00 - 21.30 Satsanga (2 x week)
        <div>
        <br></br>

        <h3>Daily Schedule</h3>

        <ul>
          <li><b>06.00 - 06.30 am</b> Yogic Drink</li>
          <li><b>06.30 - 07.30 am</b> Ṣaṭkarma and Prānāyāma</li>
          <li><b>07.30 - 08.00 am</b> Meditation</li>
          <li><b>08.00 - 08.30 am</b> Chai and Fruit</li>
          <li><b>08.30 - 10.00 am</b> Yoga Āsana practice</li>
          <li><b>10.15 - 11.30 am</b> Vegetarian Breakfast</li>
          <li><b>11.50 - 12.20 pm</b> Yoganidrā</li>
          <li><b>12.20 - 13.20 pm</b> Theory lesson or workshop 1</li>
          <li><b>13.30 - 14.30 pm</b> Lunch</li>
          <li><b>15.30 - 16.00 pm</b> Prānāyāma</li>
          <li><b>16.00 - 17.20 pm</b>  Theory lesson or workshop 2</li>
          <li><b>17-20 - 17.40 pm</b> Herbal tea and Fruit</li>
          <li><b>17.40 - 19.00 pm</b> Restorative Yoga practice</li>
          <li><b>19.30 - 20.30 pm</b> Vegetarian Dinner</li>
          <li><b>21.00 - 21.30 </b>Satsanga (2 x week)</li>
        </ul>
        </div>



        <div>
          <h3>What's included</h3>
          <ul>
            <li>Textbooks and printed course materials</li>
            <li>Welcome KIT</li>
            <li>Neti Lessons</li>
            <li>All Yoga practices</li>
            <li>All workshops</li>
            <li>All theory lessons</li>
            <li>Use of yoga props during the course</li>
            <li><a href="/food">Vegetarian meals</a> (3 times a day)</li>
            <li>Comfortable <a href="/house">accommodation</a> in private or shared rooms</li>
          </ul>
        </div>

        <div>
          <h3>Extra Charges</h3>
          <ul>
            <li>Airplane fees</li>
            <li>Taxi pick up from Lisboa Portela Airport 45€</li>
            <li>Taxi pick up from Lisboa Center or Train Station 55€</li>
          </ul>

        </div>


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

export default ImmersionPage;
