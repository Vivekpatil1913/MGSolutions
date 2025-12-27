import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FiPhoneCall, FiMail, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/MAIN MG Solutions Logo 1..png";
import "./Header.css";
import { NavLink, useLocation, Link } from "react-router-dom";
import  { useState } from "react";

const Header = () => {
  const [isCentralOpen, setIsCentralOpen] = useState(false);

  const handleSubmenuToggle = (e) => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      e.stopPropagation();

      const submenu = e.currentTarget.closest(".dropdown-submenu");
      if (!submenu) return;

      // CLOSE other open submenus (optional but clean)
      document.querySelectorAll(".dropdown-submenu.show").forEach((el) => {
        if (el !== submenu) el.classList.remove("show");
      });

      submenu.classList.toggle("show");
    }
  };

  const closeMobileMenu = () => {
    if (window.innerWidth <= 991) {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      navbarCollapse?.classList.remove("show");
    }
  };

  const location = useLocation();
  const isIndustrialActive =
    location.pathname.startsWith("/industrial") ||
    location.pathname.startsWith("/govt-subsidy") ||
    location.pathname.startsWith("/production-linked-incentives") ||
    location.pathname.startsWith("/detailed-project-report");

  return (
    <header className="gov-header">
      <div className="gov-topbar">
        <Container fluid className="gov-topbar-inner">
          <div className="gov-brand">
            <Link to="/" className="mobile-navbar-logo">
              <img src={logo} alt="MG Solution Logo" />
            </Link>
          </div>

          <div className="gov-actions">
            <a href="tel:+919962696204" className="gov-call">
              <FiPhoneCall />
              <span>+91 99626 96204</span>
            </a>

            <a href="mailto:info@subsidy4india.com" className="gov-email">
              <FiMail />
              <span>info@subsidy4india.com</span>
            </a>
          </div>
        </Container>
      </div>

      <Navbar expand="lg" className="gov-navbar">
        <Container fluid>
          {/* Mobile logo on LEFT */}
          <Navbar.Brand as={Link} to="/" className="mobile-navbar-logo">
            <img src={logo} alt="MG Solutions Logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="gov-nav mx-auto">
              <Nav.Link as={NavLink} to="/" end onClick={closeMobileMenu}>
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about" onClick={closeMobileMenu}>
                About Us
              </Nav.Link>

              <NavDropdown
                id="industrial-dropdown"
                className={isIndustrialActive ? "active" : ""}
                title={
                  <span
                    className={
                      isIndustrialActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Industrial Subsidy{" "}
                    <FiChevronDown className="dropdown-icon" />
                  </span>
                }
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/industrial-state-subsidy"
                  onClick={closeMobileMenu}
                >
                  State Government Subsidy
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <div className={`dropdown-submenu ${isCentralOpen ? "show" : ""}`}>

                  <NavLink
                    to="/govt-subsidy"
                    className="dropdown-item submenu-title"
                    onClick={(e) => {
                      if (window.innerWidth <= 991 && !isCentralOpen) {
                        e.preventDefault(); // ⛔ stop navigation FIRST time
                        setIsCentralOpen(true); // ✅ open submenu
                      } else {
                        closeMobileMenu(); // ✅ allow navigation SECOND time
                      }
                    }}
                  >
                    Central Government Subsidy
                    <FiChevronDown className="submenu-arrow" />
                  </NavLink>

                  <div className="dropdown-menu submenu-menu">
                    <NavLink
                      to="/production-linked-incentives"
                      className="dropdown-item"
                      onClick={closeMobileMenu}
                    >
                      Production Linked Incentives (PLI) Scheme
                    </NavLink>

                    <NavLink
                      to="/detailed-project-report"
                      className="dropdown-item"
                      onClick={closeMobileMenu}
                    >
                      Detailed Project Report (DPR) For Bank Loan
                    </NavLink>
                  </div>
                </div>
              </NavDropdown>

              <Nav.Link
                as={NavLink}
                to="/invest-in-india"
                onClick={closeMobileMenu}
              >
                Invest in India
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact" onClick={closeMobileMenu}>
                Contact Us
              </Nav.Link>

              <Nav.Link as={NavLink} to="/disclaimer" onClick={closeMobileMenu}>
                Disclaimers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
