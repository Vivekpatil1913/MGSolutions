import React from "react";
import "./Team.css";
import { FaLinkedinIn } from "react-icons/fa";
import prachi from "../../assets/prachi.webp";
import nilesh from "../../assets/nilesh-.webp";
import ujjwala from "../../assets/Team-photos-20th-nov.-1.webp";
import ganesh from "../../assets/Team-photos-20th-nov.-2.webp";
import yogesh from "../../assets/Team-photos-20th-nov.webp";

const team = [
  { name: "Prachi Desai", role: "R&D Associate", img: prachi },
  { name: "Nilesh Sodaye", role: "BD Associate", img: nilesh },
  { name: "Ujjwala Gumble", role: "IP Associate", img: ujjwala },
  { name: "Advocate Ganesh Juvekar", role: "Trademark Associate", img: ganesh }

];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>

      <div className="team-grid">
        {team.map((member, i) => (
          <div className="team-card" key={i}>
            <div className="team-img">
              <img src={member.img} alt={member.name} />
              <a href="#" className="team-linkedin">
                <FaLinkedinIn />
              </a>
            </div>

            <h4>{member.name}</h4>
            <span className="team-role">{member.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
