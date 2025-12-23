import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./RequestQuote.css";

const RequestQuote = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // clear error on typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};

    // Name
    if (!formData.name.trim()) {
      tempErrors.name = "Please enter your name";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      tempErrors.name = "Name should contain only letters";
    }

    // Contact
    if (!formData.contact.trim()) {
      tempErrors.contact = "Please enter your contact number";
    } else if (!/^[6-9]\d{9}$/.test(formData.contact)) {
      tempErrors.contact = "Please enter a valid 10-digit mobile number";
    }

    // Email
    if (!formData.email.trim()) {
      tempErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    // Message
    if (!formData.message.trim()) {
      tempErrors.message = "Please enter your message";
    } else if (formData.message.length > 200) {
      tempErrors.message = "Message cannot exceed 200 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setSuccess(false);

    // 🔹 Fake API call (2 seconds)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // reset form
      setFormData({
        name: "",
        contact: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  React.useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <section className="request-section">
      <Container>
        <div className="request-wrapper">
          {/* FORM SECTION */}
          <div className="request-form">
            <h2>Request a Quote</h2>
            <p>Ready to work together? Build a project with us!</p>

            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small>{errors.name}</small>}

              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
              />
              {errors.contact && <small>{errors.contact}</small>}

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small>{errors.email}</small>}

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                maxLength={200}
              ></textarea>

              <div className="message-meta">
                <span className="message-error">{errors.message}</span>
                <span className="message-count">
                  {formData.message.length} / 200
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={success ? "success-animation" : ""}
              >
                {loading ? <span className="spinner"></span> : "Send Message"}
              </button>
            </form>
            {success && (
              <div className="success-toast">✅ Message sent successfully!</div>
            )}
          </div>

          {/* INFO SECTION (UNCHANGED) */}
          <div className="request-info">
            <h2>Have Any Doubts?</h2>
            <h3>Talk to our subsidy experts today</h3>

            <div className="info-list">
              <div className="info-item">
                <span className="dot"></span>
                <p>
                  End-to-end guidance on Central & State government subsidies.
                </p>
              </div>

              <div className="info-item">
                <span className="dot"></span>
                <p>Transparent commission structure with zero hidden costs.</p>
              </div>

              <div className="info-item">
                <span className="dot"></span>
                <p>
                  Expert support for MSMEs, FPOs, startups & foreign companies.
                </p>
              </div>

              <div className="info-item">
                <span className="dot"></span>
                <p>Fast responses and personalized consultation.</p>
              </div>
            </div>

            <div className="info-highlight">
              Let’s simplify subsidies for you.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RequestQuote;
