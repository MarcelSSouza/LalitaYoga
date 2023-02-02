//create a basic footer component
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faAirbnb,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import booking from "./assets/booking.png";

function Footer() {
  return (
    <footer className="mt-5" >
    <hr />
      <Container
        fluid={true}
        className="d-flex flex-column justify-content-evenly  flex-md-row "
      >
        <div>
          <h5><b>Where to find us</b></h5>
          <p>R. dos Lírios 5, 2640-012</p>
          <p>Ribamar, Portugal</p>
        </div>
        <div>
          <h5><b>Contact us </b> </h5>
          <p>
            <a href="mailto:lalitayogacamp@gmail.com">
              lalitayogacamp@gmail.com
            </a>
          </p>
          <p>
            <a href="https://api.whatsapp.com/send?phone=351915783064">
              +351 915 783 064
            </a>
          </p>
        </div>

        <div className="partners">
          <h5> <b>Follow us</b></h5>
          <div className="social-container d-flex justify-content-evenly">
          <a
            href="https://www.facebook.com/learnbuildteach/"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook}style={{color: "black"}}  size="3x"  />
          </a>
          <a
            href="https://www.instagram.com/learnbuildteach"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram}style={{color: "black"}}  size="3x" />
          </a>
          </div>
        </div>
        
        <div className="partners d-flex flex-column justify-content-evenly align-items-center">
          <h5><b>Our partners</b></h5>


          <a
            href="https://www.instagram.com/learnbuildteach"
            className="instagram social"
            >
    <FontAwesomeIcon icon={faAirbnb}size="3x" style={{color: "black"}}  />
          </a>

          <a href="https://www.booking.com/">
            <img src={booking} alt="booking" style={{width: "200px"}}/>
          </a>
    
            </div>
        
      </Container>
    </footer>
  );
}

export default Footer;
