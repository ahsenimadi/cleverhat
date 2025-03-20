import React, { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-first text-second py-5 lead fw-normal">
      <div className="container">
        <div className="row g-5">
          <div className="col-md mb-4">
            <h5 className="text-uppercase mb-4">Company Description</h5>
            <p>
              Cleverhat began as a vision for how marketing could, and should,
              be better: Agile, transparent and always delivering value!
            </p>
          </div>
          <div className="col-md mb-4">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="text-second nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/about" className="text-second nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/services" className="text-second nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/contact" className="text-second nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md mb-4">
            <h5 className="text-uppercase mb-4">Company Address</h5>
            <p>123 Cleverhat St, Tech City, TC 12345</p>
            <p>Contact: (123) 456-7890</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6 my-auto">
            <div className="d-flex">
              <img src="images/logo2.png" width="100px" alt="partner 1" />
              <img src="images/logo3.png" width="100px" alt="partner 2" />
            </div>
          </div>
          <div className="col-md-6 my-auto">
            <ul className="nav justify-content-end">
              <li className="nav-item mb-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-second nav-link"
                >
                  <i className="fa-brands fa-facebook fa-2x"></i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-second nav-link"
                >
                  <i className="fa-brands fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-second nav-link"
                >
                  <i className="fa-brands fa-instagram fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <p className="mb-0 py-2">
              Copyright © 2025 Cleverhat. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a href="/privacy-policy" className="text-second nav-link">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a href="/terms-of-service" className="text-second nav-link">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        {showButton && (
          <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
          </button>
        )}
        <div className="text-center mt-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
