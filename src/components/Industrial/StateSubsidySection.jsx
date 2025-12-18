import React, { useState } from "react";   // ✅ useState imported
import "./StateSubsidySection.css";

const states = [
  {
    name: "Rajasthan",
    desc:
      "Rajasthan offers capital subsidy, interest subsidy, and land-related incentives to promote industrial development.",
  },
  {
    name: "Haryana",
    desc:
      "Haryana provides investment promotion subsidies, SGST reimbursement, and employment incentives.",
  },
  {
    name: "Uttarakhand",
    desc:
      "Uttarakhand supports industries through tax incentives, transport subsidy, and infrastructure benefits.",
  },
  {
    name: "Maharashtra",
    desc:
      "Maharashtra offers incentives under Package Scheme of Incentives including capital and interest subsidy.",
  },
  {
    name: "Karnataka",
    desc:
      "Karnataka promotes MSMEs with capital subsidy, technology upgradation, and power tariff subsidy.",
  },
  {
    name: "Tamil Nadu",
    desc:
      "Tamil Nadu provides payroll subsidy, capital subsidy, and industrial housing benefits.",
  },
  {
    name: "Andhra Pradesh",
    desc:
      "Andhra Pradesh offers investment subsidy, power subsidy, and infrastructure assistance.",
  },
  {
    name: "Telangana",
    desc:
      "Telangana supports industries with TS-iPASS incentives, SGST reimbursement, and capital subsidy.",
  },
  {
    name: "Gujarat",
    desc:
      "Gujarat offers interest subsidy, technology acquisition support, and export incentives.",
  },
  {
    name: "Madhya Pradesh",
    desc:
      "MP provides industrial promotion assistance, land subsidy, and electricity duty exemption.",
  },
];

const StateSubsidySection = () => {
  const [activeState, setActiveState] = useState(null);

  return (
    <>
      <section className="state-subsidy-section">
        <h2 className="state-subsidy-title">
          Subsidies in <span>Different States</span>
        </h2>

        <div className="state-grid">
          {states.map((state, index) => (
            <div className="state-card" key={index}>
              <h3>{state.name}</h3>
              <p>{state.desc}</p>
              <button onClick={() => setActiveState(state)}>
                Know More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== POPUP ===== */}
      {activeState && (
        <div className="modal-overlay" onClick={() => setActiveState(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setActiveState(null)}>
              ×
            </span>

            <h3>{activeState.name}</h3>

            <div className="modal-content">
              <div className="modal-map">
                <div className="fake-map">MAP</div>
              </div>

              <p>{activeState.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StateSubsidySection;
