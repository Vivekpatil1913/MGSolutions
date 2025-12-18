import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  BsAward,
  BsBuildings,
  BsBriefcase,
  BsCashStack,
  BsCheckCircle,
  BsClock,
  BsCpu,
  BsPeople,
} from "react-icons/bs";
import "./AboutWhyUs.css";

const AboutWhyUs = () => {
  return (
    <section className="about-modern">
      <Container>
        <Row className="align-items-center gy-5">
          {/* ABOUT */}
          <Col lg={6}>
            <h2 className="about-title">About Us</h2>

            <p>
              Subsidy4India is a one stop platform for a farmer, agro
              entrepreneur, startups, corporate, foreign investor or even a not
              for profit organisation to identify all the subsidies and
              incentives being provided by Government of India in the field of
              agriculture and food industry.
            </p>

            <p>
              Subsidy4India is promoted by Scinnovation Consultants Pvt Ltd, a
              well known consulting firm headquartered in Mumbai with offices in
              New Delhi and USA founded by the famous Shark Tank India couple,
              Rajeev & Trishla Surana.
            </p>

            <p>
              Govt. of India is investing upwards of Rs.2 lac crore (USD 25
              billion) to benefit farmers and the entire food value chain right
              from farm to fork but very often due to lack of awareness,
              expertise or simply because of the bandwidth the real
              beneficiaries are unable to take advantage of the subsidy schemes
              and funding available to all the stakeholders.
            </p>

            <p>
              Subsidy4India will be your trusted partner to help you identify
              the right scheme which suits your requirement and then work with
              you to help you avail the scheme benefits till the funds are
              disbursed in your bank account.
            </p>

            <p className="highlight-text">
              <strong>It’s as simple as lifting a fork, literally!</strong>
            </p>

            <Button className="gold-btn">Get in Touch</Button>
          </Col>

          {/* WHY US */}
          <Col lg={6}>
            <div className="why-clean">
              <h3 className="why-title">Why Us?</h3>

              <div className="why-list">
                {/* First 5 rows – normal */}
                <div className="why-row">
                  <BsAward /> India’s no.1 Subsidy Consultants
                </div>
                <div className="why-row">
                  <BsBuildings /> Clients range from startups to large
                  corporates and MNCs
                </div>
                <div className="why-row">
                  <BsBriefcase /> Represent clients with various Government
                  agencies
                </div>
                <div className="why-row">
                  <BsCashStack /> Transparent, all inclusive pricing
                </div>
                <div className="why-row">
                  <BsCheckCircle /> Avail Central Govt. and major State Govt.
                  subsidies
                </div>

                {/* Last 3 rows in one horizontal row */}
                <div className="why-last-row-modern">
                  <div className="why-last-item-modern">
                    <BsClock />
                    <p>Project On Time</p>
                  </div>
                  <div className="why-last-item-modern">
                    <BsCpu />
                    <p>Modern Technology</p>
                  </div>
                  <div className="why-last-item-modern">
                    <BsPeople />
                    <p>Team of Experts</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* CTA */}
        <div className="about-cta">
          <Button className="dark-btn">Book an Appointment Now</Button>
          <Button className="outline-gold-btn">Check Your Eligibility</Button>
        </div>
      </Container>
    </section>
  );
};

export default AboutWhyUs;
