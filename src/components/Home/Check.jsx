import React from "react";
import { useNavigate } from "react-router-dom";
import "./Check.css";

const Check = () => {
  const navigate = useNavigate();

  return (
    <section className="check-section ">
      <div className="check-card">
        <div className="check-left">
          <h2>
            Check Your <span>Subsidy Eligibility</span>
          </h2>
          <p>
            Answer a few quick questions and find out in just
            <strong> 2 minutes </strong>
            whether your business qualifies for government subsidies.
          </p>
        </div>

        <div className="check-right">
          <button onClick={() => navigate("/2-minutes-subsidy-eligibility")}>
            Start Eligibility Check
          </button>
          <span className="time-text">⏱ Takes only 2 minutes</span>
        </div>
      </div>
    </section>
  );
};

export default Check;
