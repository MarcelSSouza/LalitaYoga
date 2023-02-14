//create a new component carousel using bootstrap
import Carousel from "react-bootstrap/Carousel";
import React from "react";
//import images from assets folder
import salayoga from "./assets/salayoga.jpg";
import { useEffect, useState } from "react";
import frutas from "./assets/frutas.webp";
import PA from "./assets/PA.webp";
import video from "./assets/video.mp4";
function CarouselMain() {
  return (
    //make the carousel responsive to the screen
    <Carousel fade controls={false}>
      <Carousel.Item>
        <video
          src={video}
          autoPlay
          loop
          muted
          className=" w-100 vh-100 image-fluid"
          style={{ objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;
