import React from "react";
import { Container } from "react-bootstrap";
import "./Disclaim.css";

const disclaimers = [
  "Subsidy4India is a division of Scinnovation Consultants Pvt. Ltd. (SCPL) and not directly affiliated with any Government of India or State Government organization neither does it directly provide any subsidies, funding or loan but facilitates the same.",
  "If you have inadvertently reached Subsidy4India.com, kindly visit the Central or State Govt. website as desired.",
  "Our company helps agri & food-based companies/FPOs/entrepreneurs/farmers to avail subsidies.",
  "We charge our commission on the amount of subsidy not on the full capital amount.",
  "We take commission on the savings, e.g., if you are availing interest subsidy which is 3% on bank loan till 2cr we will take our commission on that 3% which you are getting back in your account.",
  "Our company doesn’t do any marketing for your company / individuals / FPO / farmers as our core business is to get you subsidies from government of India.",
  "We help foreign companies to avail subsidies / carbon credits in India.",
  "Our company can’t be held back for any default at our customers’ end.",
  "Our company has to follow government’s rules; can’t be pushed by client for subsidy disbursement (if delayed due to some emergency situation at government’s end).",
  "If a client tries to run away from paying our commission, then legal action will be taken against them."
];

const Disclaim = () => {
  return (
    <section className="disclaim-section">
      <Container>
        <h2 className="disclaim-title">Disclaimers</h2>

        <div className="disclaim-grid">
          {disclaimers.map((text, i) => (
            <div key={i} className="disclaim-card">
              <div className="card-number">{String(i + 1).padStart(2, "0")}</div>
              <p className="card-text">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Disclaim;
