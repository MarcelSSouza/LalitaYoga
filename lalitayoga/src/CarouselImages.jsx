//create a new component carousel using bootstrap
import Carousel from "react-bootstrap/Carousel";
import React from "react";
//import images from assets folder

import { useEffect, useState } from "react";
import frutas from "./assets/frutas.webp";
import PA from "./assets/PA.webp";

function CarouselMain() {
  return (
    //make the carousel responsive to the screen
    <Carousel fade controls={false}>
      <Carousel.Item>
        <img
          src={frutas}
          className="w-100 h-75 image-fluid"
          style={{ objectFit: "cover" }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={PA}
          className=" w-100 image-fluid"
          style={{ objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={frutas}
          className=" w-100 image-fluid"
          style={{ objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;
