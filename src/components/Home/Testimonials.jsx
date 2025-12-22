import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaQuoteRight, FaPlayCircle } from "react-icons/fa";
import "./Testimonials.css";
const testimonials = [
  {
    name: "Nolan George",
    position: "CEO, Fintech Company",
    videoId: "dQw4w9WgXcQ",
    quote: "This platform helped us scale faster with complete transparency.",
  },
  {
    name: "Rayna Aminof",
    position: "Founder, Sisyphus Ventures",
    videoId: "9bZkp7q19f0",
    quote: "Outstanding service and amazing support throughout the journey.",
  },
  {
    name: "Robert Fox",
    position: "Manager, Amazon",
    videoId: "3tmd-ClpJxA",
    quote: "Highly recommended for businesses looking for real growth.",
  },
];


const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <Container>
        <h2 className="sec-title">What People Say About Us</h2>

        <Row className="g-4">
          {testimonials.map((item, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <Card className="testimonial-card">
                
                {/* VIDEO */}
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <FaPlayCircle className="play-icon" />
                </div>

                {/* CONTENT */}
                <Card.Body>
                  <FaQuoteRight className="quote-icon" />
                  <Card.Text className="testimonial-text">
                    "{item.quote}"
                  </Card.Text>
                  <h5 className="testimonial-name">{item.name}</h5>
                  <p className="testimonial-role">{item.position}</p>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
