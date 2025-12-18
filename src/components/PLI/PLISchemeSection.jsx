import React from "react";
import "./PLISchemeSection.css";
import pliImg from "../assets/PLI.webp";

const PLISchemeSection = () => {
  return (
    <section className="pli-section">
      <div className="pli-hero">

        {/* LEFT CONTENT */}
        <div className="pli-left fade-up">
          <div className="pli-accent"></div>

          <h2 className="pli-title">About PLI Scheme</h2>

          <p>
            Govt. of India runs PLI schemes in various industry sectors to boost
            local manufacturing in areas such as semiconductors, electronics
            design and development, medical devices, Electric Vehicles (EV) etc.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="pli-right fade-right">
          <img src={pliImg} alt="PLI Scheme" />
        </div>

      </div>

      {/* DETAILS */}
      <div className="pli-info fade-up">

        <div className="pli-info-card">
          <ul>
            <li>
              It provides incentives for increase in production and sales
              normally in the range of 10% for additional manufacturing capacity
              achieved above the base number which is calculated for the same.
            </li>

            <li>
              For e.g. If the base production of EV for FY 2021-22 was 100,000
              units which is the base year and the incentive for additional
              production is 10% and the production for FY 2022-23 was 130,000
              units then incentives will be provided on the additional production
              of 30,000 units at 10% of the production cost
            </li>
          </ul>
        </div>

        <div className="pli-info-card">
          <h4>Advisory on setting up in India</h4>

          <p>
            Whether you are planning to enter India directly or through a partner,
            Subsidy4India is your partner to help you navigate through the issues
            of compliance, subsidies, incentives and all the clearances for
            setting up your operations in India, be it manufacturing or setting
            up a research facility or even a services business.
          </p>

          <p className="pli-contact">
            Do not hesitate to reach out directly to our Founder, Mr. Rajeev
            Surana on <span>founders@scinnovation.in</span> or Whats App / voice
            call on <span>+91-9321477368</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default PLISchemeSection;
