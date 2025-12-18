import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ import Link
import "./ContactOffices.css";

const offices = [
  {
    id: "01",
    city: "Mumbai",
    address: "305, Regent Chambers, 3rd Floor, Nariman Point, Mumbai – 400021",
    phone: "+91 99629 66004",
    email: "helpdesk@scinnovation.in",
    map: "https://www.google.com/maps/embed?pb=!1m18...",
  },
  {
    id: "02",
    city: "Delhi",
    address:
      "500, 5th Floor, TDI Tower, Netaji Subhash Place, New Delhi – 110034",
    phone: "+91 93124 77368",
    email: "helpdesk@scinnovation.in",
    map: "https://www.google.com/maps/embed?pb=!1m18...",
  },
  {
    id: "03",
    city: "USA",
    address: "312 W 36th St, New York, NY 10018, USA",
    phone: "+1 917-383-0038",
    email: "helpdesk@scinnovation.in",
    map: "https://www.google.com/maps/embed?pb=!1m18...",
  },
];

const ContactOffices = () => {
  return (
    <section className="contact-luxury">
      <Container>
        <div className="lux-header">
          <h1>Government Subsidy Support Centers</h1>
          <p>India & Global Presence for End-to-End Subsidy Assistance</p>
        </div>

        {offices.map((office, index) => (
          <div
            className={`office-row ${index % 2 !== 0 ? "reverse" : ""}`}
            key={office.id}
          >
            <div className="office-content">
              <h2>{office.city} Office</h2>
              <p className="office-address">{office.address}</p>
              <div className="office-meta">
                <span>
                  <strong>Phone:</strong> {office.phone}
                </span>{" "}
                <br />
                <span>
                  <strong>Email:</strong> {office.email}
                </span>
              </div>
            </div>
            <div className="office-map">
              <iframe src={office.map} title={office.city}></iframe>
            </div>
          </div>
        ))}

        <div className="appointment-cta">
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2c7SVKMEWhulgBXkj2AGZjYBo4hm3ojXmtEkSjcZ8r4pi9IoFrBMxMWN7W8zE1UEAb0vezIYZd?es=1&hl=en"
            className="appointment-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book an Appointment
            <span className="btn-glow"></span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ContactOffices;
