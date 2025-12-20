import React, { useRef } from "react";
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
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="disclaimers-section">
      <Container>
        <h2 className="disclaimers-title">Disclaimers</h2>

       <div className="carousel-wrapper">
          {/* Prev Arrow */}
          <button className="arrow prev" onClick={scrollLeft}>
            ❮
          </button>

          {/* Cards */}
          <div className="cards-container" ref={scrollRef}>
            {disclaimers.map((item, index) => (
              <div key={index} className="disclaimer-card">
                <div className="card-number">{index + 1}</div>
                <p className="card-text">{item}</p>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button className="arrow next" onClick={scrollRight}>
            &#10095;
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Disclaim;
