import React, { useState, useEffect } from "react";
import "./css/navbar.css";
// import { Link } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import logo from "/Veavixlogoo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    // show navbar on scroll

    const changeBackground = () => {
      if (window.scrollY > 25) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
      console.log("hello");
    };

    window.addEventListener("scroll", changeBackground);
  }, [isActive]);
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-light bg-dark ${
            isActive ? "header-scrolled" : " "
          }`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" style={{ height: "55px" }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    // href="#"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    // href="#"
                    to="/Services"
                    href="#services"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/technologies"
                    // data-bs-toggle="offcanvas"
                    // data-bs-target="#offcanvasTop"
                    // aria-controls="offcanvasTop"
                  >
                    Technologies
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <Link to="/ContactForm">
                <button
                  className="rn-btn  main-btn-navbar ms-5"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                  data-bs-scroll="true"
                  style={{ color: "white" }}
                >
                  Get In Touch
                </button>
              </Link>
              {/* offcanvaas */}
              {/* <div
                class="offcanvas offcanvas-top"
                tabindex="-1"
                id="offcanvasTop"
                aria-labelledby="offcanvasTopLabel"
              >
                <div class="offcanvas-header">
                  <h5 id="offcanvasTopLabel">
                    <h3>OUR SERVICES</h3>
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">...</div>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
