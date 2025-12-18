import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./Clients.css";

import logo1 from "../../assets/1.webp";
import logo2 from "../../assets/2.webp";
import logo3 from "../../assets/3.webp";
import logo4 from "../../assets/4.webp";
import logo5 from "../../assets/5.webp";
import logo6 from "../../assets/6.webp";
import logo7 from "../../assets/7.webp";
import logo8 from "../../assets/8.webp";
import logo9 from "../../assets/9.webp";
import logo10 from "../../assets/10.webp";
import logo11 from "../../assets/11.webp";
import logo12 from "../../assets/12.webp";

const logos = [logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12];

// Custom Arrows – add "position: absolute" in CSS
const NextArrow = ({ onClick }) => (
  <button className="arrow next" onClick={onClick}>❯</button>
);

const PrevArrow = ({ onClick }) => (
  <button className="arrow prev" onClick={onClick}>❮</button>
);

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <section className="clients-section">
      <Container>
        <h2 className="clients-title">Our Clients</h2>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="client-logo-wrap">
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Clients;
