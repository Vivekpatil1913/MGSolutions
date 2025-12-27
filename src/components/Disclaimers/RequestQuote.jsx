import React, { useState, useEffect } from "react";
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

  /* ================= REGEX ================= */
  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const mobileRegex = /^[0-9]{10}$/; // ✅ generic mobile validation

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    let { name, value } = e.target;

    /* ---------- NAME ---------- */
    if (name === "name") {
      value = value.replace(/\s{2,}/g, " ");
      if (value.startsWith(" ")) return;

      setFormData((prev) => ({ ...prev, name: value }));

      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, name: "Please enter name" }));
      } else if (!nameRegex.test(value.trim())) {
        setErrors((prev) => ({
          ...prev,
          name: "Name must contain only letters",
        }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }

    /* ---------- EMAIL ---------- */
    if (name === "email") {
      value = value.toLowerCase();
      if (value.includes(" ")) return;

      setFormData((prev) => ({ ...prev, email: value }));

      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, email: "Please enter email" }));
      } else if (!emailRegex.test(value.trim())) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    /* ---------- CONTACT (UPDATED ONLY HERE) ---------- */
    if (name === "contact") {
      value = value.replace(/[^0-9]/g, ""); // numbers only

      if (value.length > 10) return;

      setFormData((prev) => ({ ...prev, contact: value }));

      if (value === "") {
        setErrors((prev) => ({
          ...prev,
          contact: "Please enter mobile number",
        }));
      } else if (!mobileRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          contact: "Enter a valid mobile number (10 digits)",
        }));
      } else {
        setErrors((prev) => ({ ...prev, contact: "" }));
      }
    }

    /* ---------- MESSAGE ---------- */
    if (name === "message") {
      if (value.length > 200) return;

      setFormData((prev) => ({ ...prev, message: value }));

      if (value.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          message: "Please enter a message",
        }));
      } else if (value.trim().length < 10) {
        setErrors((prev) => ({
          ...prev,
          message: "Message must be at least 10 characters",
        }));
      } else {
        setErrors((prev) => ({ ...prev, message: "" }));
      }
    }
  };

  /* ================= FINAL VALIDATION ================= */
  const validateForm = () => {
    let tempErrors = {};

    if (!formData.name.trim())
      tempErrors.name = "Please enter name";
    else if (!nameRegex.test(formData.name.trim()))
      tempErrors.name = "Name must contain only letters";

    if (!formData.email.trim())
      tempErrors.email = "Please enter email";
    else if (!emailRegex.test(formData.email.trim()))
      tempErrors.email = "Please enter a valid email";

    if (!formData.contact.trim())
      tempErrors.contact = "Please enter mobile number";
    else if (!mobileRegex.test(formData.contact.trim()))
      tempErrors.contact = "Enter a valid mobile number (10 digits)";

    if (!formData.message.trim())
      tempErrors.message = "Please enter a message";
    else if (formData.message.trim().length < 10)
      tempErrors.message = "Message must be at least 10 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setFormData({
        name: "",
        contact: "",
        email: "",
        message: "",
      });
      setErrors({});
    }, 2000);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <section className="request-section">
      <Container>
        <div className="request-wrapper">
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
                placeholder="Mobile Number"
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
                placeholder="Message (min 10 chars)"
                value={formData.message}
                onChange={handleChange}
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
              <div className="success-toast">
                ✅ Message sent successfully!
              </div>
            )}
          </div>

          {/* INFO SECTION UNCHANGED */}
          <div className="request-info">
            <h2>Have Any Doubts?</h2>
            <h3>Talk to our subsidy experts today</h3>

            <div className="info-list">
              <div className="info-item">
                <span className="dot"></span>
                <p>End-to-end guidance on government subsidies.</p>
              </div>
              <div className="info-item">
                <span className="dot"></span>
                <p>Transparent pricing with zero hidden costs.</p>
              </div>
              <div className="info-item">
                <span className="dot"></span>
                <p>Support for MSMEs, startups & foreign companies.</p>
              </div>
              <div className="info-item">
                <span className="dot"></span>
                <p>Fast responses & personalized consultation.</p>
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
