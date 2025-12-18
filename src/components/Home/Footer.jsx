import "./Footer.css";
import { FaTwitter, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import logo from "../../assets/MAIN MG Solutions Logo 1..png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 : LOGO + ABOUT */}
        <div className="footer-col">
          <img src={logo} alt="Subsidy4India" className="footer-logo" />

          <p>
            Subsidy4India is a one-stop platform for <br />
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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/subsidies">Subsidies</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* COLUMN 3 : CONTACT + SOCIALS */}
        <div className="footer-contact-block">
          <div>
            <h3>Contacts</h3>

            <p>
              <FaMapMarkerAlt />
              Scinnovation Consultants Pvt Ltd <br />
              305, Regent Chambers, 3rd Floor <br />
              Nariman Point, Mumbai – 400021
            </p>

            <p>
              <FaPhoneAlt /> +91 9962696204
            </p>

            <p>
              <FaEnvelope /> helpdesk@scinnovation.in
            </p>
          </div>

          {/* SOCIAL ICONS AT BOTTOM */}
          <div className="footer-socials">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="linkedin">
              <FaLinkedinIn />
            </a>
            <a href="https://wa.me/919962696204" target="_blank" rel="noreferrer" className="whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="youtube">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        Copyright © 2025{" "}
        <span className="footer-company">
          Scinnovation Consultants Private Limited
        </span>
      </div>
    </footer>
  );
};

export default Footer;
