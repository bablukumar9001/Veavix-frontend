import React from "react";
import "../mainIndex/css/whychoose3.css";


const Whychooseus3 = () => {
  return (
    <>
      <div
        class="feature-product-wrapper-bg position-relative"
        style={{ postion: "relative" }}
      >
        <div class="feature-area feature-product-bg mb-100 pt-100 over-hidden">
          <div class="container">
            <div class="row ">
              <div class="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12 ">
                <div
                  class="feature-img wow fadeInLeft"
                  data-wow-duration="1.6s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1.6s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <img
                    style={{ marginTop: "120px" }}
                    src="feature-img.png"
                    alt=""
                  />
                </div>
              </div>
              <div class=" col-xl-6 col-lg-6  col-md-12  col-sm-12 col-12">
                <div class="feature-content mt-100 ">
                  <div class="title">
                    <span class="sub-heading d-block f-700 theme-color">
                      Why Choose Us
                    </span>
                    <h3 class="f-700">Never compromise with Quality</h3>
                  </div>
                  <ul class="feature-text mt-50">
                    <li class="d-flex">
                      <span class="feature-icon theme-color d-inline-block mr-20">
                        <i class="fa-regular fa-check"></i>
                      </span>
                      <p>We are the best IT Solution company in noida.</p>
                    </li>
                    <li class="d-flex">
                      <span class="feature-icon theme-color d-inline-block mr-20">
                        <i class="fa-regular fa-check"></i>
                      </span>
                      <p>Best Service Provider in noida</p>
                    </li>
                    <li class="d-flex">
                      <span class="feature-icon theme-color d-inline-block mr-20">
                        <i class="fa-duotone fa-check"></i>
                      </span>
                      <p>
                        2 years of proven experience in providing IT services.
                      </p>
                    </li>
                    <li class="d-flex">
                      <span class="feature-icon theme-color d-inline-block mr-20">
                        <i class="fa-duotone fa-check"></i>
                      </span>
                      <p>
                        Best and expert team of IT Services with wide years of
                        experience
                      </p>
                    </li>
                    <li class="d-flex">
                      <span class="feature-icon theme-color d-inline-block mr-20">
                        <i class="fa-duotone fa-check"></i>
                      </span>
                      <p>
                        We give our best to our clients to fulfil their
                        requirements..
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          class="f-img-bg w-100 position-absolute top-0 left-0 right-0 w-100 mt-50 mb-100 z-index-1"
          style={{ zIndex: "-1" }}
          src="feature-bg.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Whychooseus3;
