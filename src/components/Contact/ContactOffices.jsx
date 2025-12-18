import React from "react";
import { Container } from "react-bootstrap";
import "./ContactOffices.css";

const offices = [
  {
    id: "01",
    city: "Mumbai",
    address:
      "305, Regent Chambers, 3rd Floor, Nariman Point, Mumbai – 400021",
    phone: "+91 99629 66004",
    email: "helpdesk@scinnovation.in",
    map: "https://www.google.com/maps/embed?pb=!1m18..."
  },
  {
    id: "02",
    city: "Delhi",
    address:
      "500, 5th Floor, TDI Tower, Netaji Subhash Place, New Delhi – 110034",
    phone: "+91 93124 77368",
    email: "helpdesk@scinnovation.in",
    map: "https://www.google.com/maps/embed?pb=!1m18..."
  },
  {
    id: "03",
    city: "USA",
    address: "312 W 36th St, New York, NY 10018, USA",
    phone: "+1 917-383-0038",
    email: "helpdesk@scinnovation.in",
    map: "https://www.google.com/maps/embed?pb=!1m18..."
  }
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
          <div className="lux-row" key={index}>
            <div className="lux-info">
              <span className="lux-number">{office.id}</span>
              <h2>{office.city} Office</h2>

              <p>{office.address}</p>
              <p><strong>Phone:</strong> {office.phone}</p>
              <p><strong>Email:</strong> {office.email}</p>
            </div>

            <div className="lux-map">
              <iframe src={office.map} title={office.city}></iframe>
              <div className="map-overlay"></div>
            </div>
          </div>
        ))}
        <div className="appointment-cta">
  <a href="/book-appointment" className="appointment-btn">
    Book an Appointment
    <span className="btn-glow"></span>
  </a>
</div>

      </Container>
    </section>
  );
};

export default ContactOffices;
