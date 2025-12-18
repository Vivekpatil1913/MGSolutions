import React from "react";
import "./Founder.css";
import { FaLinkedinIn } from "react-icons/fa";

import founder1 from "../../assets/rajeev-.webp";
import founder2 from "../../assets/trishla-2-.webp";

const founders = [
  {
    name: "Rajeev Surana",
    role: "Founder",
    img: founder1,
    linkedin: "#",
  },
  {
    name: "Trishla Surana",
    role: "Co-Founder",
    img: founder2,
    linkedin: "#",
  },
];

const Founder = () => {
  return (
    <section className="founder-section">
      <h2 className="founder-heading">Our Founders</h2>

      <div className="founder-wrapper">
        {founders.map((founder, index) => (
          <div className="founder-card" key={index}>
            <div className="founder-image">
              <img src={founder.img} alt={founder.name} />
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noreferrer"
                className="linkedin-float"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="founder-info">
              <h4>{founder.name}</h4>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founder;
