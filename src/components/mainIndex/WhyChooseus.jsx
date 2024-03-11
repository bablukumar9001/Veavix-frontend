import React from "react";
import "../mainIndex/css/whychooseus.css";

const WhyChooseus = () => {
  return (
    <>
      <section class="why-choos-lg pad-tb deep-dark">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="common-heading text-l">
                <span>Why Choose Us?</span>
                {/* <!-- <h2 class="mb20">We create <span class="text-second text-bold">smart digital solutions </span>for individuals, startup companies, &amp; brands.</h2> --> */}

                <h2 class="mb20">
                  Stolz is one stop{" "}
                  <span class="text-second text-bold">
                    {" "}
                    solution for all your digital{" "}
                  </span>{" "}
                  needs. Our business is to build yours
                </h2>
                <div class="itm-media-object mt40 tilt-3d">
                  <div class="media">
                    <div
                      class="img-ab- base"
                      data-tilt=""
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                    >
                      <img src="computers.svg" alt="icon" class="layer" />
                    </div>
                    <div class="media-body">
                      <h4> Futuristic Technology</h4>
                      <p>
                        We continually strive to push limits and establish new
                        benchmarks using the potential of computing.
                      </p>
                    </div>
                  </div>
                  <div class="media mt40">
                    <div
                      class="img-ab- base "
                      data-tilt=""
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                    >
                      <img src="worker.svg" alt="icon" class="layer" />
                    </div>
                    <div class="media-body">
                      <h4>Promise to our clients</h4>
                      <p>
                        We are committed to helping our clients build apps and
                        websites that are genuinely seamless, safe, and
                        accessible.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="media mt40">
                    <div
                      class="img-ab- base"
                      data-tilt=""
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                    >
                      {" "}
                      <img src="deal.svg" alt="icon" class="layer" />
                    </div>
                    <div class="media-body">
                      <h4>Perfection with intention</h4>
                      <p>
                        We develop thoughtfully built, well-designed products
                        that solve actual problems in the real world, not just
                        for the purpose of innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 whychoseustext">
              <div
                data-tilt=""
                data-tilt-max="5"
                data-tilt-speed="1000"
                class="single-image bg-shape-dez wow fadeIn"
                data-wow-duration="2s"
                style={{
                  visibility: "visible",
                  animationDuration: "2s",
                  animationName: "none",
                }}
              >
                <img
                  style={{ borderRadius: "10px" }}
                  src="information-technology-connection-graphics-concept.jpg"
                  alt="myimage"
                  class="img-fluid"
                />
              </div>
              <p class="text-center mt30">
                A great team may have contributed to your project's success.
                Stolz has a group of industry experts working together to help
                you accomplish your goals.{" "}
              </p>
              <div class="cta-card mt60 text-center">
                <h3 class="mb20">
                  Your fantastic project might
                  <span class="text-second text-bold">begin with a Hello!</span>
                </h3>
                <p>
                  We are happy to begin on this new adventure with you, and let
                  us work together to help you achieve your goals!{" "}
                </p>
                {/* <!-- <button type="button" class=" mt30 mt_btn_yellow" data-toggle="#myModal" data-target="#myModal">Request A Quote<i class="fas fa-chevron-right fa-icon"></i></button> --> */}
                <button
                  type="button"
                  class=" mt30 mt_btn_yellow"
                  data-toggle="#myModal"
                  data-target="#myModal"
                >
                  Request A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseus;
