import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./SubsidyProcess.css";

const steps = [
  { title: "Stage One", desc: "Review Central and State Government assistance schemes for manufacturing or expansion." },
  { title: "Stage Two", desc: "Confirm eligibility for the applicable schemes (you can apply for one or more schemes)." },
  { title: "Stage Three", desc: "Apply for a bank loan and get sanction which is mandatory for Central Govt. subsidy schemes." },
  { title: "Stage Four", desc: "Complete the subsidy application process with the necessary documentation." },
  { title: "Stage Five", desc: "Get In Principle Approval (IPA) for your schemes." },
  { title: "Stage Six", desc: "Commence work after getting IPA (normal procedure in most cases)." },
  { title: "Stage Seven", desc: "Avail 1st tranche of your subsidy." },
  { title: "Stage Eight", desc: "Complete your project and facilitate site visits by the respective Govt. agencies." },
  { title: "Stage Nine", desc: "Get the pending subsidy amount as per subsequent milestones." },
  { title: "Stage Ten", desc: "Ensure compliance with subsidy terms else you will have to return the subsidy amount with penal interest applicable." }
];

const SubsidyProcess = () => {
  const flowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          flowRef.current.classList.add("animate");
        }
      },
      { threshold: 0.3 }
    );

    if (flowRef.current) observer.observe(flowRef.current);
  }, []);

  return (
    <section className="subsidy-process">
      <Container>
        <h2 className="process-title">How to avail subsidies in India?</h2>

        <div className="process-flow" ref={flowRef}>
          {steps.map((step, index) => (
            <div
              className={`flow-step ${index < 5 ? "top" : "bottom"}`}
              key={index}
            >
              <div className="flow-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h5>{step.title}</h5>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SubsidyProcess;
