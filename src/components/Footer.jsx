import React from "react";
import "./css/footer.css";
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
       <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }}/>

      {/* <div className="container-fluid ">
        <div className="row footerr">
          <div className="col">
            <h1 className="">FOOTER</h1>
          </div>
        </div>
      </div> */}
      <footer className="footer-section mt-5" id="services">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-12 pb-5">
              <div class="sociel-heading d-lg-flex justify-content-between text-center">
                <p>
                  Write us:
                  <a
                    href="mailto:Info@Technogigz.com"
                    // style="text-transform:lowercase"
                    class="mx-2"
                  >
                    info@veavix.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="callto:+919096743051" class="mx-2">
                    +91 9578455245
                  </a>
                </p>

                <p>
                  {" "}
                  WhatsApp:{" "}
                  <a href="callto:+919625128949" class="mx-2">
                    +91 9578455245
                  </a>
                </p>
                <p>
                  {" "}
                  BOTIM:{" "}
                  <a href="callto:+919625128949" class="mx-2">
                    +91 9578455245
                  </a>
                </p>
              </div>{" "}
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-3 col-3 pt-2">
              <div>
                <h3 class="pb-4 footer-top-heading">Address</h3>
              </div>
              <div class="custom-links">
                <ul>
                  <h5 className="footer-heading">PUNE OFFICE</h5>
                  <li class="nav-item">
                    <p className="footer-adress">
                      609, Gera's Imperium Rise, Hinjewadi-411057, Pune, India
                    </p>
                  </li>
                </ul>
                <ul>
                  <h5 className="footer-heading">DELHI OFFICE</h5>
                  <li class="nav-item">
                    <p className="footer-adress">
                      609, Gera's Imperium Rise, Hinjewadi-411057, Pune, India
                    </p>
                  </li>
                </ul>
                <ul>
                  <h5 className="footer-heading">GURUGRAM OFFICE</h5>
                  <li class="nav-item">
                    <p className="footer-adress">
                      609, Gera's Imperium Rise, Hinjewadi-411057, Pune, India
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-3 pt-3">
              <div>
                <h3 class="pb-4 footer-top-heading">Services</h3>
              </div>
              <div class="links-custom">
                <ul>
                  <li class="me-5 nav-item service-text">
                    <a>Mobile App Development</a>
                  </li>
                  <li class="me-5 nav-item service-text">
                    <a>Web Development</a>
                  </li>
                  <li class="me-5 nav-item service-text">
                    <a>UI/UX Development</a>
                  </li>
                  <li class="me-5 nav-item service-text">
                    <a>iOS Development</a>
                  </li>
                  <li class="me-5 nav-item service-text">
                    <a>Digital Marketing</a>
                  </li>
                  <li class="me-5 nav-item service-text">
                    <a>Blockchain Development</a>
                  </li>
                  <li class="me-5 nav-item service-text">
                    <a>AI/AM Development</a>
                  </li>
                  <li class="me-5 nav-item service-text">
                    <a>Graphic Designing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-3 pt-3">
              <div>
                <h3 class="pb-4 footer-top-heading">Company</h3>
              </div>
              <div class="links-custom">
                <ul>
                  <li class="me-5 nav-item nav-link-text">
                    <Link to="/" className="nav-link-text">
                      Home
                    </Link>
                  </li>
                  <li class="me-5 nav-item nav-link-text">
                    <Link
                      to="/Services"
                      className="nav-link-text"
                      href="#services"
                    >
                      Services
                    </Link>
                  </li>
                  <li class="me-5 nav-item nav-link-text">
                    <Link to="/technologies" className="nav-link-text">
                      Technologies
                    </Link>
                  </li>
                  <li class="me-5 nav-item nav-link-text">
                    <Link to="/Contact" className="nav-link-text">
                      Contact Us
                    </Link>
                  </li>
                  <li class="me-5 nav-item nav-link-text">
                    <Link to="/About" className="nav-link-text">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-3 pt-3">
              <div>
                <h3 class="pb-4 footer-top-heading">Support</h3>
              </div>
              <div class="links-custom">
                <ul>
                  <li class="me-5 nav-item nav-link-text">
                  
                  Write us:
                  <a
                    href="mailto:Info@Technogigz.com"
                    // style="text-transform:lowercase"
                    class="mx-2"
                  >
                    info@veavix.com
                  </a>
                
                  </li>
                  <li class="me-5 nav-item nav-link-text">
                 
                  Phone:{" "}
                  <a href="callto:git8920549001" class="mx-2">
                    +91 8920549001
                  </a>
                
                  </li>
                  <li class="me-5 nav-item nav-link-text">
                 
                  {" "}
                  WhatsApp:{" "}
                  <a href="callto:8920549001" class="mx-2">
                    +91 8920549001
                  </a>
             
                  </li>
                  <li class="me-5 nav-item nav-link-text">
                  
                  {" "}
                  BOTIM:{" "}
                  <a href="callto:8920549001" class="mx-2">
                    +91 8920549001
                  </a>
                
                  </li>
                 
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-4 col-4 pt-3"></div> */}
          </div>
        </div>
        {/* social icon */}
        <div class="">
          <div>
            <ul className="list-unstyled-contact d-flex justify-content-center justify-content-md-end justify-content-lg-center social-iconn mb-3 mb-md-0">
              <li>
                <a href="https://www.instagram.com/abhay__9001/" target=" ">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/abhay559722/" target=" ">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/babluku9001" target=" ">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bablu-kumar-a0aa16231/"
                  target=" "
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/bablukumar9001" target=" ">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <a href="https://wa.me/8920549001" target="_blank">
        <i
          // class="fa-brands fa-whatsapp fa-bounce"
          class="fa-brands fa-whatsapp"
          // style={{ color: "#32d31d" }}
          id="whatsapp"
        ></i>
      </a> */}

      <div class="copyright">
        <p class="text-center">Copyright © 2023 Veavix. All rights reserved.</p>
      </div>
      <Outlet />
    </>
  );
};

export default Footer;
