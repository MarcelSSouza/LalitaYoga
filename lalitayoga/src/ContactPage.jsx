import React from "react";
import ContactForm from "./ContactForm";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import contact from "./assets/contact.jpeg";
import MenuBar from "./MenuBar";
import MainFooter from "./MainFooter";
function ContactPage() {
  const mapframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.72998760971!2d-9.419027684175125!3d38.99865837955515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1f26f476a6a91d%3A0xd23602a1ac087462!2sLalit%C4%81%20House%20Yoga%20Camp!5e0!3m2!1spt-PT!2spt!4v1675338844890!5m2!1spt-PT!2spt" width="500" height="400" style="border:0; position:relative; width:90vw;" allowfullscreen=""  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return (
    <div>
      <MenuBar />
      <img
        src={contact}
        alt="contact"
        className="mb-5"
        style={{ height: "50vh", width: "100vw" }}
      />
      <Container fluid={true} className="mb-5">
        <div className="d-flex flex-column">
          <div>
            <h4>Address</h4>
            <p>R. dos Lírios 5, 2640-012, Ribamar, Portugal</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>
              <a href="mailto:lalitayogacamp@gmail.com">
                lalitayogacamp@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h4>Phone and Whatsapp</h4>
            <p>
              <a href="https://api.whatsapp.com/send?phone=351915783064">
                +351 915 783 064
              </a>
            </p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="social-container d-flex justify-content-center">
              <a
                href="https://www.facebook.com/lalitahouseyogacamp"
                className="facebook social m-4"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "black" }}
                  size="3x"
                />
              </a>
              <a
                href="https://www.instagram.com/lalita_house_yoga_camp/"
                className="instagram social m-4"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "black" }}
                  size="3x"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="d-flex flex-column">
        <div>
          <div dangerouslySetInnerHTML={{ __html: mapframe }}></div>
        </div>
      </div>
      <ContactForm />

      <MainFooter />
    </div>
  );
}

export default ContactPage;
