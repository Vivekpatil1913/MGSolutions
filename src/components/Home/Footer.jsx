import "./Footer.css";
import { FaTwitter, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import logo from "../../assets/MAIN MG Solutions Logo 1.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COLUMN 1 : LOGO + ABOUT */}
        <div className="footer-col">
          <img src={logo} alt="Subsidy4India" className="footer-logo" />

          <p>
            M G Solution is a one-stop platform for <br />
            all Central & State Government subsidies <br />
            in India.
          </p>

          <p className="footer-time">
            <FaClock /> <strong>Mon – Fri:</strong> 10:00 – 18:00 IST <br />
            <FaClock /> <strong>Sat:</strong> 10:00 – 14:00 IST
          </p>
        </div>

        {/* COLUMN 2 : NAV LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-footer-link" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active-footer-link" : ""
                }
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/industrial-state-subsidy"
                className={({ isActive }) =>
                  isActive ? "active-footer-link" : ""
                }
              >
                Industrial Subsidy
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/invest-in-india"
                className={({ isActive }) =>
                  isActive ? "active-footer-link" : ""
                }
              >
                Invest in India
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active-footer-link" : ""
                }
              >
                Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/disclaimer"
                className={({ isActive }) =>
                  isActive ? "active-footer-link" : ""
                }
              >
                Disclaimers
              </NavLink>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 : CONTACT + SOCIALS */}
        {/* COLUMN 3 : CONTACT + SOCIALS */}
        <div className="footer-contact-block">
          <div>
            <h3>Contacts</h3>

            {/* ADDRESS */}
            <p>
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Scinnovation+Consultants+Pvt+Ltd+Nariman+Point+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="footer-plain-link"
              >
                Scinnovation Consultants Pvt Ltd <br />
                305, Regent Chambers, 3rd Floor <br />
                Nariman Point, Mumbai – 400021
              </a>
            </p>

            {/* PHONE */}
            <p>
              <FaPhoneAlt />
              <a href="tel:+919962696204" className="footer-plain-link">
                +91 9962696204
              </a>
            </p>

            {/* EMAIL */}
            <p>
              <FaEnvelope />
              <a
                href="mailto:helpdesk@scinnovation.in"
                className="footer-plain-link"
              >
                helpdesk@scinnovation.in
              </a>
            </p>
          </div>

          {/* SOCIAL ICONS AT BOTTOM */}
          <div className="footer-socials">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/919962696204"
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="youtube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright © 2025{" "}
        <a
          href="https://www.sumagoinfotech.com"
          target="blank"
          rel="noreferrer"
          className="footer-company"
        >
          Sumago Infotech Private Limited
        </a>
      </div>
    </footer>
  );
};

export default Footer;
