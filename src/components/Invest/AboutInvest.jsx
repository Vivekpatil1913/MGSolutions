import React from "react";
import "./AboutInvest.css";
import investLogo from "../assets/download-1.webp"; // replace with your logo path

const AboutInvest = () => {
  return (
    <section className="about-invest">
      <div className="content-wrapper">
        <div className="text-section">
          <h2>
            About <span className="highlight">Invest in India</span>
          </h2>
          <p>
            India is an <span className="highlight">emerging market</span> for your organisation.
            We provide insights on <span className="highlight">Government subsidies</span> and
            incentives, including <span className="highlight">Make in India</span> norms for
            local manufacturing, and special incentives for sectors like
            <span className="highlight"> aerospace, defence, renewable energy, green hydrogen, semiconductors, AI</span>.
          </p>
          <p>
            <span className="highlight">Subsidy4India</span> is your trusted partner with
            deep domain knowledge, local networks, and expertise to provide holistic solutions
            to help you make informed investment decisions.
          </p>
          <p className="italic-highlight">
            As part of the <span className="highlight">Make in India</span> initiative,
            we ensure you understand what it means for you and your business!
          </p>
        </div>

        <div className="logo-card">
         
          <img src={investLogo} alt="Invest India Logo" />
          <h3>INVEST INDIA</h3>
          <p className="subtext">
            NATIONAL INVESTMENT PROMOTION <br />
            & FACILITATION AGENCY
          </p>
          <div className="color-dots">
            <span className="blue"></span>
            <span className="green"></span>
            <span className="black"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInvest;
