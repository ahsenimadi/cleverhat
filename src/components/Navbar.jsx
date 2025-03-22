import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactPopup from "./ContactPopup";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="fixed-top mt-3 mt-md-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-7 col-md-9 d-flex align-items-center">
              <div className="logo">
                <Link to="/">
                  <img src="./images/logo.png" width="100" alt="logo" />
                </Link>
              </div>
              <ul
                className={`nav menubar ${menuOpen ? "open" : ""}`}
                id="menuBar"
              >
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/our-works">
                    Our Works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/team">
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/careers">
                    Careers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="menu" id="menuBtn" onClick={toggleMenu}>
                <h2>{menuOpen ? "Close" : "Menu"}</h2>
              </div>
            </div>
            <div className="col-5 col-md-3 d-flex justify-content-end">
              <button
                className="talk-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#talkOffcanvas"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactPopup />
    </>
  );
};

export default Navbar;
