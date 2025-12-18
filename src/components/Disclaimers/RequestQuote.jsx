import React from "react";
import { Container } from "react-bootstrap";
import "./RequestQuote.css";

const RequestQuote = () => {
  return (
    <section className="request-section">
      <Container>
        <div className="request-wrapper">
          {/* Form Section */}
          <div className="request-form">
            <h2>Request a Quote</h2>
            <p>Ready to work together? Build a project with us!</p>
            <form>
              <input type="text" placeholder="Enter your name" />
              <input type="text" placeholder="Contact Number" />
              <input type="email" placeholder="Enter your email address" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="request-info">
            <h2>Have Any Doubts?</h2>
            <h3>Talk to our subsidy experts today</h3>

            <div className="info-list">
              <div className="info-item">
                <span className="dot"></span>
                <p>
                  End-to-end guidance on Central & State government subsidies.
                </p>
              </div>

              <div className="info-item">
                <span className="dot"></span>
                <p>Transparent commission structure with zero hidden costs.</p>
              </div>

              <div className="info-item">
                <span className="dot"></span>
                <p>
                  Expert support for MSMEs, FPOs, startups & foreign companies.
                </p>
              </div>

              <div className="info-item">
                <span className="dot"></span>
                <p>Fast responses and personalized consultation.</p>
              </div>
            </div>

            <div className="info-highlight">
              Let’s simplify subsidies for you.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RequestQuote;
