//create a new component carousel using bootstrap
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
//import images from assets folder
import salayoga from './assets/salayoga.jpg';
import { useEffect, useState } from 'react';
import frutas from './assets/frutas.webp';
import PA from './assets/PA.webp';
function CarouselMain() {
    return (
      //make the carousel responsive to the screen
        <Carousel fade controls={false}   >
          <Carousel.Item interval={1000}> 
            <img
            //image that fill the screen and responsive, also add alt text and the height of the image needs to be responsive to the screen
              className="d-block w-100 vh-100 img-fluid"
              src={salayoga}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
            //image that fill the screen and responsive, also add alt text and the height of the image needs to be responsive to the screen
              className="d-block w-100 vh-100 img-fluid"
              src={frutas}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
            //image that fill the screen and responsive, also add alt text and the height of the image needs to be responsive to the screen
              className="d-block w-100 vh-100 img-fluid"
              src={PA}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      );
}
    
    export default CarouselMain;