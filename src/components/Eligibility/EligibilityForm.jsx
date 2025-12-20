import React, { useState } from "react";
import "./EligibilityForm.css";
import { useNavigate } from "react-router-dom";

const EligibilityForm = () => {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <section className="eligibility-section">
      <div className="eligibility-container">

        {/* HEADER */}
        <div className="eligibility-header">
          <span className="eligibility-badge">2 Minutes Eligibility Check</span>
          <h1>Subsidy Eligibility Assessment</h1>
          <p>
            Answer a few quick questions to understand subsidy eligibility &
            incentives for your organization.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        <form className="eligibility-form" onSubmit={handleSubmit}>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="form-step">
              <h3>Contact & Location</h3>
              <input placeholder="Organization Name *" />
              <input placeholder="Email *" />
              <input placeholder="Mobile Number *" />
              <textarea placeholder="Manufacturing Location (Dist./Taluka & PIN)" />
              <button type="button" className="next-btn" onClick={next}>
                Next →
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="form-step">
              <h3>Investment Details</h3>
              <select>
                <option>Expected Commercial Production</option>
                <option>Already commenced</option>
                <option>In next one year</option>
                <option>In next three years</option>
              </select>

              <select>
                <option>Investment Type</option>
                <option>New Unit</option>
                <option>Expansion</option>
                <option>Diversification</option>
              </select>

              <div className="btn-row">
                <button type="button" onClick={prev}>← Back</button>
                <button type="button" onClick={next}>Next →</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="form-step">
              <h3>Cost & Industry</h3>
              <input placeholder="Land Cost (₹ Cr)" />
              <input placeholder="Building Cost (₹ Cr)" />
              <input placeholder="Plant & Machinery Cost (₹ Cr)" />

              <div className="btn-row">
                <button type="button" onClick={prev}>← Back</button>
                <button type="button" onClick={next}>Next →</button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="form-step">
              <h3>Final Details</h3>
              <select>
                <option>Have you taken a term loan?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <button type="submit" className="submit-btn">
                Submit Eligibility Form
              </button>

              <button type="button" className="back-link" onClick={prev}>
                ← Go Back
              </button>
            </div>
          )}
        </form>

        {/* CONFUSED CTA */}
        <div className="confused-cta">
          <span>Still confused regarding the subsidy?</span>
          <button onClick={() => navigate("/contact")}>
            Click here
          </button>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <h2>🎉 Thank You!</h2>
            <p>
              Your eligibility form has been submitted successfully.
              Our experts will connect with you shortly.
            </p>
            <button onClick={() => setShowSuccess(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default EligibilityForm;
