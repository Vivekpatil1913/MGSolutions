import React from "react";
import "./Team.css";
import { FaLinkedinIn } from "react-icons/fa";

import prachi from "../../assets/prachi.webp";
import nilesh from "../../assets/nilesh-.webp";
import ujjwala from "../../assets/Team-photos-20th-nov.-1.webp";
import ganesh from "../../assets/Team-photos-20th-nov.-2.webp";
import yogesh from "../../assets/Team-photos-20th-nov.webp";

const team = [
  { name: "Prachi Desai", role: "R&D Associate", img: prachi, linkedin: "#" },
  { name: "Nilesh Sodaye", role: "BD Associate", img: nilesh, linkedin: "#" },
  { name: "Ujjwala Gumble", role: "IP Associate", img: ujjwala, linkedin: "#" },
  { name: "Advocate Ganesh Juvekar", role: "Trademark Associate", img: ganesh, linkedin: "#" },
  { name: "Yogesh Patel", role: "Financial Advisor", img: yogesh, linkedin: "#" },
];

const TeamCard = ({ member }) => (
  <div className="team-card">
    <div className="team-img-wrap">
      <img src={member.img} alt={member.name} />
      <a href={member.linkedin} className="linkedin-float" target="_blank" rel="noreferrer">
        <FaLinkedinIn />
      </a>
    </div>
    <div className="team-info">
      <h4>{member.name}</h4>
      <p>{member.role}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">Our Team</h2>

      <div className="team-grid">
        {team.slice(0, 3).map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}

        {/* Last 2 members in a centered row */}
        <div className="team-last-row">
          {team.slice(3).map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
