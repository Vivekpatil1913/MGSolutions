import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FiPhoneCall, FiMail, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/MAIN MG Solutions Logo 1..png";
import "./Header.css";
import { NavLink, useLocation, Link } from "react-router-dom";

const Header = () => {
  const handleSubmenuToggle = (e) => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      const parent = e.currentTarget.parentNode;
      parent.classList.toggle("show");
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
            <Link to="/">
              <img src={logo} alt="Subsidy Logo" />
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
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="gov-nav mx-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about">
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
                <NavDropdown.Item as={NavLink} to="/industrial-state-subsidy">
                  State Government Subsidy
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <div className="dropdown-submenu">
                  <NavLink
                    to="/govt-subsidy"
                    className="dropdown-item submenu-title"
                    onClick={handleSubmenuToggle} // <-- add this
                  >
                    Central Government Subsidy
                    <FiChevronDown className="submenu-arrow" />
                  </NavLink>

                  <div className="dropdown-menu submenu-menu">
                    <NavLink
                      to="/production-linked-incentives"
                      className="dropdown-item"
                    >
                      Production Linked Incentives (PLI) Scheme
                    </NavLink>

                    <NavLink
                      to="/detailed-project-report"
                      className="dropdown-item"
                    >
                      Detailed Project Report (DPR) For Bank Loan
                    </NavLink>
                  </div>
                </div>
              </NavDropdown>

              <Nav.Link as={NavLink} to="/invest-in-india">
                Invest in India
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact">
                Contact Us
              </Nav.Link>

              <Nav.Link as={NavLink} to="/disclaimer">
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
