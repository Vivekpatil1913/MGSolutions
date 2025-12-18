import React from "react";
import "./DPRSection.css";
import dprImg from "../assets/DPR.webp"; // use your image

const DPRSection = () => {
  return (
    <section className="dpr-section">
      <div className="dpr-container">

        {/* LEFT CONTENT */}
        <div className="dpr-content fade-up">
          <h2 className="dpr-title">About DPR for Bank Loan</h2>

          <p>
            Are you aware that you will need to take a bank loan to avail any
            Central Government subsidy since the subsidy will be directly
            credited to your bank account for which you need to provide a
            Detailed Project Report (DPR) to your bank which comprises both
            financial projections and business plan.
          </p>

          <p>
            Subsidy4India has a team of Chartered Accountants and professionals
            to prepare the DPR for any industry vertical as per your desired
            bank’s format in a time bound manner.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="dpr-image fade-right">
          <div className="dpr-image-frame">
            <img src={dprImg} alt="DPR for Bank Loan" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default DPRSection;
