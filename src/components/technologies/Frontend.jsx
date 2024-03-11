import React from "react";
// import "./css/frontend.css";
import "../technologies/css/frontend.css";
import kotlin from "/kotlin.png";
import flutter from "/flutter.png";

const Frontend = () => {
  return (
    <>
      <div className="container frontend">
        <h1>FRONTEND</h1>
        <h6>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          consequuntur quae reprehenderit in error, minus deserunt debitis
          doloribus repudiandae necessitatibus maiores incidunt consequatur
          harum obcaecati dolorem,
        </h6>
        <div className="row">
          {/* lef colum */}

          <div className="col-lg frontendbox1 mt-3">
            <section className="mobile-section ">
              <div className="row">
                <div className="col-lg-6">
                  <div class="content-techo ">
                    <h3 class="pb-2">
                      Leveraging The Latest Front-End Development Technologies
                    </h3>
                    <p class="pt-3">
                      At Brave Solutions, we are committed to building websites with
                      unrivalled UI and UX design. We make sure to cater to the
                      needs of our clients and provide them with innovative
                      suggestions to improve their judgement.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row mt-3">
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-angular mob-logo"
                          style={{ color: "#f7b018" }}
                        ></i>
                        <b className="mt-3 mob-text">ANGULAR</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-react mob-logo"
                          style={{ color: "#0446b9" }}
                        ></i>
                        <b className="mt-3 mob-text">REACT</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-html5 mob-logo"
                          style={{ color: "#040506" }}
                        ></i>
                        <b className="mt-3 mob-text">HTML</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-css3 mob-logo"
                          style={{ color: "#125bd9" }}
                        ></i>
                        <b className="mt-3 mob-text">CSS</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-square-js mob-logo"
                          style={{ color: "#f96534" }}
                        ></i>
                        <b className="mt-3 mob-text">JAVASCRIPT</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-vuejs mob-logo"
                          style={{ color: "#33cc45" }}
                        ></i>
                        <b className="mt-3 mob-text">VUE</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* right column */}

          <div className="col-lg-3 frontendbox2 mt-3">
            <div className="text-center mt-5">
              <div class="mt-3">
                <i
                  className="fa-solid fa-code iconsize fa-shake fa-xl"
                  style={{ color: "#0c182c" }}
                ></i>
              </div>
              <h3> Frontend Development</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
