import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsPeopleFill, BsBuilding, BsAward } from "react-icons/bs";
import { Link } from "react-router-dom"; // ✅ import Link
import "./AboutIntro.css";

const AboutIntro = () => {
  return (
    <section className="about-intro">
      <Container>
        <Row className="gy-5 align-items-start">

          {/* LEFT CONTENT */}
          <Col lg={7}>
            <span className="about-badge">About M G Solution</span>

            <h2 className="about-title">
              M G Solution is a one stop platform for all Central & State Govt.
              subsidies in India
            </h2>

            <p className="about-text">
               M G Solution is a one stop platform for entrepreneurs, startups,
              corporates, MSMEs, foreign investors or even not for profit
              organisation to identify and avail relevant Central Govt. and
              State Govt. subsidies and incentives being provided by Government
              agencies in any segment such as manufacturing, services,
              agriculture & food and even emerging technologies such as
              Electric Vehicles, AI, renewable energy, green hydrogen etc.
               </p>

            <p className="about-text">
               M G Solution is promoted by Scinnovation Consultants Pvt Ltd, a
              well known management consulting firm headquartered in Mumbai
              with offices in New Delhi and USA founded by the famous Shark
              Tank India couple, Rajeev & Trishala Surana supported by an
              energetic team based across different geographies with diverse
              skill sets.
            </p>

            <p className="about-text">
              We work across three different verticals namely Industry,
              Agriculture and Invest in India whereby we advice clients on
              relevant schemes such as capital subsidy, PLI schemes, Make in
              India etc. to ensure they get maximum ROI for their investments
              in India.
            </p>

            <p className="about-text">
              Govt of India is investing upwards of Rs.2 lac crore (USD 25
              billion) to benefit farmers and the entire food value chain right
              from farm to fork but very often due to lack of awareness,
              expertise or simply because of the bandwidth the real
              beneficiaries are unable to take advantage of the subsidy
              schemes and funding available to all the stakeholders.
            </p>

            <p className="about-text">
               M G Solution will be your trusted partner to help you identify
              the right scheme which suits your requirement and then work with
              you to help you avail the scheme benefits till the funds are
              disbursed in your bank account.
            </p>

            <p className="about-text">
              It’s as simple as lifting a fork, literally! the phrase word is
               M G Solution
            </p>

            
            <Link to="/contact" className="about-ct">
              Contact Us Now
            </Link>
          </Col>

          {/* RIGHT HIGHLIGHTS */}
          <Col lg={5}>
            <div className="about-highlights">

              <div className="highlight-card">
                <div className="highlight-icon">
                  <BsPeopleFill />
                </div>
                <div>
                  <h4>Team of Industry Experts</h4>
                  <p>Our experts are well equipped with current trends in the industry!</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <BsBuilding />
                </div>
                <div>
                  <h4>Research & Development</h4>
                  <p>Research and development are the main mantras of  M G Solution.</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <BsAward />
                </div>
                <div>
                  <h4>Undefeated Success Rate</h4>
                  <p>We have a pool of happy clients!</p>
                </div>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutIntro;
