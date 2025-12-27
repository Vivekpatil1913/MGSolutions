import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

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

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

const Clients = () => {
  return (
    <section className="clients-section">
      <Container>
        <h2 className="clients-title">Our Clients</h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          grabCursor={true}
          touchRatio={1}
          simulateTouch={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
         
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 7 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="client-logo-wrap">
                <img src={logo} alt={`Client ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Clients;
