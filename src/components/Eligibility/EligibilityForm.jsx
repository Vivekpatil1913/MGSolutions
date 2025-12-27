import React, { useState } from "react";
import "./EligibilityForm.css";
import { useNavigate } from "react-router-dom";

const EligibilityForm = () => {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    organization: "",
    email: "",
    mobile: "",
    location: "",
    production: "",
    investmentType: "",
    landCost: "",
    buildingCost: "",
    machineryCost: "",
    termLoan: ""
  });

  const [errors, setErrors] = useState({});

  /* ===== REGEX (same quality as Careers form) ===== */
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const mobileRegex = /^[6-9]\d{9}$/;

  /* ===== HANDLE CHANGE WITH LIVE VALIDATION ===== */
  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = value;

    /* Mobile: numbers only + max 10 digits */
    if (name === "mobile") {
      val = val.replace(/\D/g, "");
      if (val.length > 10) return;
    }

    setFormData({ ...formData, [name]: val });

    /* Live validation */
    let msg = "";

    if (name === "organization" && val.trim() === "") {
      msg = "Organization name is required";
    }

    if (name === "email") {
      if (val.trim() === "") msg = "Email is required";
      else if (!emailRegex.test(val.trim()))
        msg = "Enter a valid email address";
    }

    if (name === "mobile") {
      if (val.trim() === "") msg = "Mobile number is required";
      else if (!mobileRegex.test(val))
        msg = "Enter valid 10-digit mobile number";
    }

    if (name === "location" && val.trim() === "") {
      msg = "Location is required";
    }

    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  /* ===== STEP VALIDATION (FINAL CHECK) ===== */
  const validateStep = () => {
    let tempErrors = {};

    if (step === 1) {
      if (!formData.organization.trim())
        tempErrors.organization = "Organization name is required";

      if (!formData.email.trim())
        tempErrors.email = "Email is required";
      else if (!emailRegex.test(formData.email.trim()))
        tempErrors.email = "Enter a valid email address";

      if (!formData.mobile.trim())
        tempErrors.mobile = "Mobile number is required";
      else if (!mobileRegex.test(formData.mobile))
        tempErrors.mobile = "Enter valid 10-digit mobile number";

      if (!formData.location.trim())
        tempErrors.location = "Location is required";
    }

    if (step === 2) {
      if (!formData.production)
        tempErrors.production = "Select expected production";
      if (!formData.investmentType)
        tempErrors.investmentType = "Select investment type";
    }

    if (step === 3) {
      if (!formData.landCost.trim())
        tempErrors.landCost = "Enter land cost";
      if (!formData.buildingCost.trim())
        tempErrors.buildingCost = "Enter building cost";
      if (!formData.machineryCost.trim())
        tempErrors.machineryCost = "Enter machinery cost";
    }

    if (step === 4) {
      if (!formData.termLoan)
        tempErrors.termLoan = "Please select an option";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    setShowSuccess(true);
    setFormData({
      organization: "",
      email: "",
      mobile: "",
      location: "",
      production: "",
      investmentType: "",
      landCost: "",
      buildingCost: "",
      machineryCost: "",
      termLoan: ""
    });
    setStep(1);
  };

  return (
    <section className="eligibility-section">
      <div className="eligibility-container">

        {/* HEADER */}
        <div className="eligibility-header">
          <span className="eligibility-badge">2 Minutes Eligibility Check</span>
          <h1>Subsidy Eligibility Assessment</h1>
          <p>
            Answer a few quick questions to understand subsidy eligibility & incentives for your organization.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        <form className="eligibility-form" onSubmit={handleSubmit} noValidate>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="form-step">
              <h3>Contact & Location</h3>

              <input
                name="organization"
                placeholder="Organization Name *"
                value={formData.organization}
                onChange={handleChange}
              />
              {errors.organization && <small className="error">{errors.organization}</small>}

              <input
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="error">{errors.email}</small>}

              <input
                name="mobile"
                placeholder="Mobile Number *"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <small className="error">{errors.mobile}</small>}

              <textarea
                name="location"
                placeholder="Manufacturing Location (Dist./Taluka & PIN)"
                value={formData.location}
                onChange={handleChange}
              />
              {errors.location && <small className="error">{errors.location}</small>}

              <button type="button" className="next-btn" onClick={nextStep}>
                Next →
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="form-step">
              <h3>Investment Details</h3>

              <select
                name="production"
                value={formData.production}
                onChange={handleChange}
              >
                <option value="">Expected Commercial Production</option>
                <option value="Already commenced">Already commenced</option>
                <option value="In next one year">In next one year</option>
                <option value="In next three years">In next three years</option>
              </select>
              {errors.production && <small className="error">{errors.production}</small>}

              <select
                name="investmentType"
                value={formData.investmentType}
                onChange={handleChange}
              >
                <option value="">Investment Type</option>
                <option value="New Unit">New Unit</option>
                <option value="Expansion">Expansion</option>
                <option value="Diversification">Diversification</option>
              </select>
              {errors.investmentType && <small className="error">{errors.investmentType}</small>}

              <div className="btn-row">
                <button type="button" onClick={prevStep}>← Back</button>
                <button type="button" onClick={nextStep}>Next →</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="form-step">
              <h3>Cost & Industry</h3>

              <input
                name="landCost"
                placeholder="Land Cost (₹ Cr)"
                value={formData.landCost}
                onChange={handleChange}
              />
              {errors.landCost && <small className="error">{errors.landCost}</small>}

              <input
                name="buildingCost"
                placeholder="Building Cost (₹ Cr)"
                value={formData.buildingCost}
                onChange={handleChange}
              />
              {errors.buildingCost && <small className="error">{errors.buildingCost}</small>}

              <input
                name="machineryCost"
                placeholder="Plant & Machinery Cost (₹ Cr)"
                value={formData.machineryCost}
                onChange={handleChange}
              />
              {errors.machineryCost && <small className="error">{errors.machineryCost}</small>}

              <div className="btn-row">
                <button type="button" onClick={prevStep}>← Back</button>
                <button type="button" onClick={nextStep}>Next →</button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="form-step">
              <h3>Final Details</h3>

              <select
                name="termLoan"
                value={formData.termLoan}
                onChange={handleChange}
              >
                <option value="">Have you taken a term loan?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.termLoan && <small className="error">{errors.termLoan}</small>}

              <button type="submit" className="submit-btn">
                Submit Eligibility Form
              </button>

              <button type="button" className="back-link" onClick={prevStep}>
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
