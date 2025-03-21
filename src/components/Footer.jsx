import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.scrollY > 100);
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
              {[
                "Home",
                "About Us",
                "Services",
                "Our Works",
                "Careers",
                "Contact Us",
              ].map((link, index) => (
                <li key={index} className="nav-item mb-2">
                  <a
                    href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-second nav-link d-inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
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
            <ul className="nav justify-content-start justify-content-md-end">
              {["facebook", "twitter", "linkedin", "instagram", "youtube"].map(
                (platform, index) => (
                  <li key={index} className="nav-item mb-2">
                    <a
                      href={`https://${platform}.com/cleverhat`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-second nav-link"
                    >
                      <i className={`fa-brands fa-${platform}`}></i>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        {showButton && (
          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
          </motion.button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
