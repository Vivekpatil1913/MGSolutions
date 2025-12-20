import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import banner1 from "../../assets/industrial-subsidy1-2.jpg";
import banner2 from "../../assets/What-Is-Subsidy.jpg";
import banner3 from "../../assets/industrial-subsidy1-2.jpg";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  const navigate = useNavigate();

  return (
    <Carousel
      indicators={false}
      controls={true}
      interval={4000}
      fade
      className="home-carousel"
    >
      {[banner1, banner2, banner3].map((banner, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100"
              src={banner}
              alt={`Slide ${index + 1}`}
            />

           
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
