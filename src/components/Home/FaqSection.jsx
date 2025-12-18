import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "./FaqSection.css";

const FaqSection = () => {
  return (
    <section className="faq-section">
      <Container>
        <p className="faq-subtitle">Learn More From</p>
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <Accordion defaultActiveKey="0" flush className="faq-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              1. What is the difference between capital and interest subsidy?
            </Accordion.Header>
            <Accordion.Body>
              Capital subsidy refers to the subsidy provided for purchase of
              capital equipment as part of a project, whereas interest subsidy
              is provided on the interest payable on bank loans taken for a
              project.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              2. Can one avail subsidies or benefits from more than one scheme
              for the same project?
            </Accordion.Header>
            <Accordion.Body>
              In some cases, multiple subsidies can be availed, but it depends
              on the guidelines of individual schemes. Overlapping benefits are
              usually restricted.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              3. Is it mandatory to have a Detailed Project Report (DPR) for
              availing subsidy?
            </Accordion.Header>
            <Accordion.Body>
              Yes, most subsidy schemes require a Detailed Project Report (DPR)
              to assess project feasibility and eligibility.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              4. Does one need to take a bank loan to avail subsidies?
            </Accordion.Header>
            <Accordion.Body>
              Not always. Some subsidies are linked to bank finance, while
              others can be availed without a loan depending on the scheme.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              5. How do I find out whether one is eligible to avail incentives
              under a particular scheme?
            </Accordion.Header>
            <Accordion.Body>
              Eligibility depends on factors like sector, location, investment
              size, and government guidelines. Consulting experts or scheme
              documentation helps determine eligibility.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FaqSection;
