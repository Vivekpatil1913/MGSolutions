
import React from "react";
import "./CentralPLIScheme.css";

const CentralPLIScheme = () => {
  return (
    <section className="central-pli-section">
      <div className="central-pli-container">

        {/* LEFT CONTENT */}
        <div className="central-pli-left fade-up">
          <h2 className="central-pli-title">About PLI Scheme</h2>

          <p>
            Govt. of India runs PLI schemes in various industry sectors to boost
            local manufacturing in areas such as semiconductors, electronics
            design and development, medical devices, Electric Vehicles (EV) etc.
          </p>

          <ul className="central-pli-points">
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
              of 30,000 units at 10% of the production cost.
            </li>
          </ul>
        </div>

        {/* RIGHT ADVISORY */}
        <div className="central-pli-right fade-right">
          <div className="advisory-card">
            <h3>Advisory on setting up in India</h3>

            <p>
              Whether you are planning to enter India directly or through a
              partner, Subsidy4India is your partner to help you navigate through
              the issues of compliance, subsidies, incentives and all the
              clearances for setting up your operations in India, be it
              manufacturing or setting up a research facility or even a services
              business.
            </p>

            <p className="central-contact">
              Do not hesitate to reach out directly to our Founder, Mr. Rajeev
              Surana on <span>founders@scinnovation.in</span> or Whats App / voice
              call on <span>+91-9321477368</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CentralPLIScheme;
