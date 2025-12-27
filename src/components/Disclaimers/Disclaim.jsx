import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  FaUniversity,
  FaGlobe,
  FaSeedling,
  FaPercentage,
  FaMoneyBillWave,
  FaBullhorn,
  FaIndustry,
  FaExclamationTriangle,
  FaClock,
  FaGavel,
} from "react-icons/fa";
import "./Disclaim.css";

const disclaimers = [
  {
    title: "Company Affiliation",
    icon: <FaUniversity />,
    text:
      "Subsidy4India is a division of Scinnovation Consultants Pvt. Ltd. (SCPL) and is not directly affiliated with any Central or State Government organization nor does it directly provide subsidies, funding or loans.",
  },
  {
    title: "Official Government Portals",
    icon: <FaGlobe />,
    text:
      "If you have inadvertently reached Subsidy4India.com, kindly visit the relevant Central or State Government website directly.",
  },
  {
    title: "Nature of Services",
    icon: <FaSeedling />,
    text:
      "We assist agri & food-based companies, FPOs, entrepreneurs and farmers to avail eligible subsidies.",
  },
  {
    title: "Commission Structure",
    icon: <FaPercentage />,
    text:
      "Our commission is charged only on the subsidy amount sanctioned and not on the full capital investment.",
  },
  {
    title: "Savings-Based Commission",
    icon: <FaMoneyBillWave />,
    text:
      "In case of interest subsidy, our commission is charged only on the interest savings credited to the client’s account.",
  },
  {
    title: "No Marketing Services",
    icon: <FaBullhorn />,
    text:
      "We do not provide marketing, branding or promotional services as our core business is subsidy facilitation.",
  },
  {
    title: "Foreign Company Support",
    icon: <FaIndustry />,
    text:
      "We assist foreign companies in availing subsidies and carbon credits in India as per applicable laws.",
  },
  {
    title: "Client Responsibility",
    icon: <FaExclamationTriangle />,
    text:
      "The company cannot be held responsible for any default, misrepresentation or non-compliance at the client’s end.",
  },
  {
    title: "Government Timelines",
    icon: <FaClock />,
    text:
      "Subsidy disbursement is subject to government rules and timelines and cannot be expedited due to unforeseen delays.",
  },
  {
    title: "Legal Compliance",
    icon: <FaGavel />,
    text:
      "Any attempt to evade payment of agreed commission may result in legal action under applicable laws.",
  },
];

const Disclaim = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="disclaim-section">
      <Container>
        <h2 className="disclaim-title">
          Important <span>Disclaimers</span>
        </h2>

        <div className="disclaim-grid">
          {disclaimers.map((item, index) => (
            <div
              key={index}
              className="disclaim-card"
              onClick={() => setActiveItem(item)}
            >
              <div className="disclaim-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <span className="disclaim-link">View Details</span>
            </div>
          ))}
        </div>
      </Container>

      {/* ===== Modal ===== */}
      {activeItem && (
        <div className="modal-overlay" onClick={() => setActiveItem(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveItem(null)}>
              ×
            </button>

            <div className="modal-icon">{activeItem.icon}</div>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.text}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Disclaim;
