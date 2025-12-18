import React from "react";
import "./SubsidyEligibility.css";

const SubsidyEligibility = () => {
  return (
    <section className="industrial-subsidy">
      <div className="container">

        {/* Header */}
        <div className="subsidy-header">
          <span className="subsidy-badge">Government Support</span>
          <h1>Industrial Subsidy</h1>
          <p>
            Industrial subsidy refers to financial assistance provided by the
            government to promote industrial growth, competitiveness, and
            economic development through grants, tax benefits, and incentives.
          </p>

          <button className="eligibility-btn">
            Check Eligibility
          </button>
        </div>

        {/* Content Grid */}
        <div className="subsidy-grid">

          {/* Eligibility */}
          <div className="subsidy-card">
            <h3>Eligibility Criteria</h3>
            <ul>
              <li>Minimum net worth of 1.50× grant amount</li>
              <li>Loan sanctioned on or after 25 Sept 2023</li>
              <li>Minimum 20% promoter contribution</li>
              <li>Project located in Mega Food Park</li>
              <li>Minimum project cost of ₹3 Crore</li>
              <li>Maximum 2 projects in 10 years</li>
            </ul>
          </div>

          {/* Documentation */}
          <div className="subsidy-card">
            <h3>Documentation Required</h3>
            <ul>
              <li>Online application with self-attested documents</li>
              <li>CA net worth certificate</li>
              <li>Bank guarantee (5% of subsidy)</li>
              <li>Audited financials (last 2 years)</li>
              <li>Land ownership / lease documents</li>
              <li>OEM quotations for machinery</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SubsidyEligibility;
