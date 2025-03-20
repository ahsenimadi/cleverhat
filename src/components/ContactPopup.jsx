import React, { useState } from "react";

const ContactPopup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    // Handle form submission logic here
    console.log(formData);
    setSuccessMessage("Your message has been sent successfully!");

    // Clear form data after submission
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div>
      <div
        className="offcanvas offcanvas-end bg-dark text-light"
        tabIndex="-1"
        id="talkOffcanvas"
        aria-labelledby="talkOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <h5 className="offcanvas-title" id="talkOffcanvasLabel">
            Let's Talk
          </h5>
          <p className="display-1">We would love to hear from you</p>
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          <form className="talk-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg bg-transparent"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg bg-transparent"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control form-control-lg bg-transparent"
                placeholder="Your Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control form-control-lg bg-transparent"
                placeholder="Your Message"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send your message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
