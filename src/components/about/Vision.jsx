import React from "react";
import "./css/vision.css";

const Vision = () => {
  return (
    <>
      <section class="team-details team-details1 missionbefore1 ">
        <div class="container">
          <div class="section-title1 text-center mt-5">
            <div class="section-sub-title-box">
              <p
                style={{
                    color: "#ffae07",
                  // color: "black",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontSize: "18px",
                  fontWeight: 400,
                  margin: "0 0 15px 0",
                  display: "block",
                }}
              >
                VISION
              </p>
            </div>
            <h2
              class="section-title__title"
              style={{
                color: "white",
                // color: "black",
                fontSize: "40px",
                fontWeight: 700,
              }}
            >
              THE VISION We Have
            </h2>
          </div>
          <div class="team-details__top">
            <div class="row">
              <div class="col-xl-6 col-12">
                <div class="team-details__top-left">
                  <div class="team-details__top-img">
                    <img
                      src="/about/visionimage.jpg"
                      style={{ borderRadius: "20px" }}
                      class="project"
                      alt=""
                    />
                    {/* <!-- <div class="team-details__big-text">Stolz</div> --> */}
                    {/* <!-- <div class="team-details__big-text" style="margin-left:20px; color:black;">Vision</div> --> */}
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-12">
                <div class="team-details__top-right">
                  <div class="team-details__top-content">
                    <h3
                      class="team-details__top-name"
                      style={{
                        color: "white",
                        // color: "black",
                        marginTop: "20px",
                        fontSize: "40px",
                        fontWeight: 700,
                        marginLeft: "10px",
                      }}
                    >
                      Veavix Vision
                    </h3>

                    <p
                      class="team-details__top-text-2"
                      style={{ marginLeft: "10px", color: "white" }}
                    >
                      At Stolz, we strive for perfection in offering our clients
                      top-notch services. Our goal is to reduce the cost of
                      services like web and mobile app development. Giving SMEs
                      an online presence, which is absolutely essential in
                      today's society, will help them develop.
                      <br />
                      Our mission includes putting a smile on our clients'
                      faces. We are proud of the duty we have taken on in this
                      regard.
                    </p>

                    {/* <!-- <p class="team-details__top-text-3">Our mission includes putting a smile on our
                                                clients' faces. We are proud of the duty we have taken on in this regard.</p> -->
                                                <!-- <div class="team-details__big-text" style="margin-left: 20px; color:black;">Stolz</div> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
