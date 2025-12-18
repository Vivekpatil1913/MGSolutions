import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsFillBuildingFill, BsGraphUp } from "react-icons/bs";
import "./SubsidyCards.css";
import { useNavigate } from "react-router-dom";

const SubsidyCards = () => {
  const navigate = useNavigate();

  return (
    <section className="subsidy-focus">
      <Container>
        <Row className="g-5">
          <Col lg={6} md={6} sm={12}>
            <div className="focus-card">
              <div className="icon-box">
                <BsFillBuildingFill />
              </div>

              <h3>Industrial Subsidy</h3>

              <p>
                Industrial subsidies are financial incentives or support
                provided by governments to promote and sustain the growth of
                specific industries within India.
              </p>
             <Button
                className="focus-btnn"
                onClick={() => navigate("/industrial-subsidy")}
              >
                Explore Details
                <span className="arrow">→</span>
              </Button>
            </div>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="focus-card">
              <div className="icon-box">
                <BsGraphUp />
              </div>

              <h3>Investment in India</h3>

              <p>
                The Invest in India programme encourages global and indigenous
                manufacturers to make goods in India. It aims to stimulate
                production and generate employment.
              </p>

              <Button
                className="focus-btnn"
                onClick={() => navigate("/invest-in-india")}
              >
                Explore Details
                <span className="arrow">→</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubsidyCards;
