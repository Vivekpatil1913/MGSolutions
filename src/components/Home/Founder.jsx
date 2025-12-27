import React from "react";
import "./Founder.css";
import { FaLinkedinIn } from "react-icons/fa";

import founder1 from "../../assets/rajeev-.jpg";
import founder2 from "../../assets/trishla-2-.jpg";

const founders = [
  {
    name: "Rajeev Surana",
    role: "Founder",
    img: founder1,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Trishla Surana",
    role: "Co-Founder",
    img: founder2,
    linkedin: "https://linkedin.com",
  },
];

const Founder = () => {
  return (
    <section className="founder-section">
      <h2 className="founder-title">Our Founders</h2>

      <div className="founder-row">
        {founders.map((member, i) => (
          <div className="founder-card" key={i}>
            <div className="founder-img">
              <img src={member.img} alt={member.name} />
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="founder-linkedin"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <h4>{member.name}</h4>
            <span className="founder-role">{member.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founder;
