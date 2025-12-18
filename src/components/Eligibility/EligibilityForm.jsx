import React from "react";
import "./EligibilityForm.css";

const EligibilityForm = () => {
  return (
    <section className="eligibility-section">
      <div className="eligibility-container">

        {/* Header */}
        <div className="eligibility-header">
          <span className="eligibility-badge">2 Minutes Eligibility Check</span>
          <h1>Subsidy Eligibility Assessment</h1>
          <p>
            Answer a few quick questions to check your eligibility for
            government subsidies & incentives for your business.
          </p>
        </div>

        {/* Form */}
        <form className="eligibility-form">

          <div className="form-group">
            <label>Organization Name</label>
            <input type="text" placeholder="Enter organization name" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email address" />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" placeholder="Enter mobile number" />
            </div>
          </div>

          <div className="form-group">
            <label>Manufacturing Location (City / State / PIN)</label>
            <textarea placeholder="Enter manufacturing location"></textarea>
          </div>

          <div className="form-group">
            <label>Expected Date of Commercial Production</label>
            <select>
              <option>Select option</option>
              <option>Already commenced</option>
              <option>Within 1 year</option>
              <option>Within 2 years</option>
            </select>
          </div>

          <div className="form-group">
            <label>Nature of Business</label>
            <select>
              <option>Select business type</option>
              <option>Manufacturing of Goods</option>
              <option>Plant & Machinery Manufacturing</option>
              <option>Service Sector</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Total Project Cost (₹ Crore)</label>
              <input type="number" placeholder="e.g. 10" />
            </div>

            <div className="form-group">
              <label>Plant & Machinery Cost (₹ Crore)</label>
              <input type="number" placeholder="e.g. 5" />
            </div>
          </div>

          <div className="form-group">
            <label>Top 3 Products / Services</label>
            <textarea placeholder="Mention key products or services"></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Check Eligibility Now
          </button>

        </form>
      </div>
    </section>
  );
};

export default EligibilityForm;
