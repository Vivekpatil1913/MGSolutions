import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Downloads.css";

// 👉 IMPORT IMAGES (important in React)
import corporateImg from "../../assets/scpl-coroprate-presentation-cover-page-25th-nov.webp";
import newsletterImg from "../../assets/SCPL-NEWSLETTER-11TH-NOV.2025-1.pdf-1.webp";

const Downloads = () => {
  return (
    <section className="downloads-section">
      <Container>
        <h2 className="downloads-title">Our Downloads</h2>

        <Row className="g-5 justify-content-center">

          {/* CARD 1 */}
          <Col lg={5} md={6} sm={12}>
            <div className="download-card">
              <img
                src={corporateImg}
                alt="Corporate Presentation"
                className="download-image"
              />
              <h5 className="download-heading">
                SCPL Corporate Presentation
              </h5>
              <Button className="download-btn">
                Click to Download
              </Button>
            </div>
          </Col>

          {/* CARD 2 */}
          <Col lg={5} md={6} sm={12}>
            <div className="download-card">
              <img
                src={newsletterImg}
                alt="SCPL Newsletter"
                className="download-image"
              />
              <h5 className="download-heading">
                SCPL Newsletter – 6 Dec, 2025
              </h5>
              <Button className="download-btn">
                Download Newsletter
              </Button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Downloads;
