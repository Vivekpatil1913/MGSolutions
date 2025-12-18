import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../assets/industrial-subsidy1-2.jpg";
import banner2 from "../../assets/What-Is-Subsidy.jpg";
import banner3 from "../../assets/industrial-subsidy1-2.jpg";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <Carousel
      indicators={false}
      controls={false}
      interval={4000}
      fade
      className="home-carousel"
    >
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="Slide 1" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Slide 2" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
