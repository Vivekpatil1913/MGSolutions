import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";
import "./SubsidySection.css";

const SubsidySection = () => {
  return (
    <section className="subsidy-section">
      <Container>
        <Row className="align-items-center gy-5">

          {/* LEFT CONTENT */}
          <Col lg={6} className="content-col">
            
            <h2 className="section-title">
              Looking for subsidy for your <span>business?</span>
            </h2>

            <p className="section-desc">
              Unlock the full potential of subsidies in India with our expert
              consultancy services. We specialize in guiding businesses and
              individuals through the complex subsidy application process across
              various sectors, including agriculture, manufacturing, startups,
              and renewable energy.
            </p>

            <p className="section-desc">
              Our team ensures you maximize your subsidy benefits by providing
              personalized support and a deep understanding of government
              policies. Simplify the journey to financial assistance and growth
              with our trusted subsidy solutions.
            </p>

          </Col>

          {/* RIGHT VIDEO */}
          <Col lg={6}>
            <div className="video-wrapper">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Subsidy4India Video"
                  allowFullScreen
                />
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default SubsidySection;
