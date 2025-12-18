import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FiPhoneCall, FiMail, FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/MAIN MG Solutions Logo 1..png";
import "./Header.css";

const Header = () => {
  return (
    <header className="gov-header">
      <div className="gov-topbar">
        <Container fluid className="gov-topbar-inner">
          <div className="gov-brand">
            <img src={logo} alt="Subsidy Logo" />
          </div>

          <div className="gov-actions">
            <div className="gov-call">
              <FiPhoneCall />
              <span>+91 99626 96204</span>
            </div>

            <div className="gov-email">
              <FiMail />
              <span>info@subsidy4india.com</span>
            </div>
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
                title={
                  <span>
                    Industrial Subsidy{" "}
                    <FiChevronDown className="dropdown-icon" />
                  </span>
                }
                id="industrial-dropdown"
              >
                <NavDropdown.Item as={NavLink} to="/industrial-state-subsidy">
                  State Government Subsidy
                </NavDropdown.Item>

                <NavDropdown
                  title={
                    <span className="central-title">
                      <NavLink
                        to="/govt-subsidy"
                        className="dropdown-link"
                        // onClick={(e) => e.stopPropagation()}
                      >
                        Central Government Subsidy
                      </NavLink>
                      <FiChevronDown className="dropdown-icon" />
                    </span>
                  }
                  id="central-dropdown"
                  drop="end"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/production-linked-incentives"
                  >
                    Production Linked Incentives (PLI) Scheme
                  </NavDropdown.Item>

                  <NavDropdown.Item as={NavLink} to="/detailed-project-report">
                    Detailed Project Report (DPR) For Bank Loan
                  </NavDropdown.Item>
                </NavDropdown>
                {/* 👆 END OF CHANGE */}
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
