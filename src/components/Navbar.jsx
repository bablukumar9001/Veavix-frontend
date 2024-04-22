import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "/Veavixlogoo.png";
import "./css/navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Toggle the navbar collapse state
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  // Change navbar style on scroll
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 25) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, [isActive]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-dark ${isActive ? "header-scrolled" : ""}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" style={{ height: "55px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav menu-navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleNavCollapse}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services" onClick={handleNavCollapse}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About" onClick={handleNavCollapse}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technologies" onClick={handleNavCollapse}>Technologies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact" onClick={handleNavCollapse}>Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blogs" onClick={handleNavCollapse}>Blogs</Link>
              </li>
              <Link to="/ContactForm">
              <button className="mt_btn_yellow ms-5" type="button" onClick={handleNavCollapse}>Get In Touch</button>
            </Link>
            </ul>
            
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
