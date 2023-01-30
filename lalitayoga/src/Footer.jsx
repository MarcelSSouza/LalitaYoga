//create a basic footer component
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const MyMap=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.72998760971!2d-9.419027684175125!3d38.99865837955515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1f26f476a6a91d%3A0xd23602a1ac087462!2sLalit%C4%81%20House%20Yoga%20Camp!5e0!3m2!1spt-PT!2spt!4v1674917046610!5m2!1spt-PT!2spt" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
function Footer() {
  return (
    <footer className="mt-5" >
      <Container
        fluid={true}
        className="d-flex flex-column justify-content-around flex-md-row "
      >
        <div>

          <div dangerouslySetInnerHTML={{__html: MyMap}}></div>
        </div>
        <div>
          <h3>Contact</h3>
          <br></br>
          <p>🇵🇹 AL/581100</p>
          <p>🇵🇹+351 915 783 064</p>
          <p>lalitayogacamp@gmail.com</p> 
          <p>R. dos Lírios 5, 2640-012, Ribamar- Portugal</p>
        </div>

      </Container>
    </footer>
  );
}

export default Footer;
