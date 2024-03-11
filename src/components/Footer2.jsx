import React from "react";

const Footer2 = () => {
  return (
    <>
      {" "}
      <section class="footerpadding" style={{ padding: "0px 0" }}>
        <footer class="footerpadding1">
          <div class="container ">
            <div class=" site-footer__top">
              <div class="row">
                <div
                  class="col-lg-4 col-sm-6 col-12 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div class="footer-widget__column footer-widget__contact clearfix">
                    {/* <!-- <h3 class="footer-widget__title" style="color:#333a65;">Contact us</h3> --> */}
                    <div
                      class="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img src="a.png" height="70" alt="" loading="lazy" />
                    </div>

                    <p class="text-center">
                      The Stolz team consists of idealists and forward-thinking
                      individuals. We know how to make the best decisions and
                      can utilise our knowledge to your benefit. Radical honesty
                      is one of our basic values that guides our interactions
                      with consumers.
                    </p>

                    <ul class="list-unstyled d-flex flex-row justify-content-center">
                      <li>
                        <a class="text-white px-2" href="#!">
                          <i class="fab fa-facebook-square"></i>
                        </a>
                      </li>
                      <li>
                        <a class="text-white px-2" href="#!">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a class="text-white ps-2" href="#!">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-lg-2 col-sm-6 col-12  wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div class="footer-widget__column footer-widget__contact clearfix">
                    <h3
                      class="footer-widget__title mb-30"
                      style={{ color: "#333a65" }}
                    >
                      Company
                    </h3>
                    <ul class="footer-widget__contact-list list-unstyled clearfix footer-address-list link-hover">
                      <li>
                        <a href="">About us</a>
                      </li>
                      <li>
                        <a href="">Services</a>
                      </li>
                      <li>
                        <a href="">Technology</a>
                      </li>
                      <li>
                        <a href="">Contact us</a>
                      </li>
                      <li>
                        <a href="">About us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-sm-6 col-12  wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div class="footer-widget__column footer-widget__gallery clearfix">
                    <h3
                      class="footer-widget__title mb-30"
                      style={{ color: "#333a65" }}
                    >
                      Important link
                    </h3>
                    <ul class="footer-address-list link-hover">
                      <li>
                        <a href="">Web Development</a>
                      </li>
                      <li>
                        <a href="">Mobile App Development</a>
                      </li>
                      <li>
                        <a href="">E-Commerce Development</a>
                      </li>
                      <li>
                        <a href="">Customer Software Development</a>
                      </li>
                      <li>
                        <a href="">IT Strategy & Software Consulting</a>
                      </li>
                      <li>
                        <a href="">Blockchain Development</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-lg-2 col-sm-6 col-12  wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div class="footer-widget__column footer-widget__newsletter">
                    <h3
                      class="footer-widget__title mb-30"
                      style={{ color: "#333a65" }}
                    >
                      Support
                    </h3>
                    <ul class="footer-address-list link-hover">
                      <li>
                        <span>
                          <i class="fa-solid fa-envelope"></i>
                        </span>
                        <p>
                          {" "}
                          <a href="mailto:info@brancosoft.com">
                            info@veavix.com
                          </a>
                        </p>
                      </li>
                      <li>
                        <span>
                          <i class="fas fa-phone-alt"></i>
                        </span>
                        <p>
                          {" "}
                          <a href="tel: +91 935 433 1163"> +91 7827530048</a>
                        </p>
                      </li>
                      <li>
                        <span>
                          <i class="fas fa-map-marker-alt"></i>
                        </span>
                        <p style={{ color: "#333a65" }}>
                          Noida, India{" "}
                          <span> Sector-63, Noida, UP-201301,</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-map">
            <img src="footer-map.png" alt="" />
          </div>
        </footer>
      </section>
      <div class="footer-bottom-area">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 " id="laststyle">
            <p class="">
              Copyright @2023{" "}
              <strong>
                {" "}
                <span class="first-color">Veavix</span>
              </strong>{" "}
              All rights reserved{" "}
              <a
                target="_blank"
                class="second-color"
                href="https://veavix.com/"
              >
                veavix.com
              </a>
            </p>
          </div>
          <div class="col-lg-6 col-md-6">
            <ul class="link-hover1">
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
