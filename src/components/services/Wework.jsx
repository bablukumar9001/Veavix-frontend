import React, { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"; // Optional: Add indicators for debugging
import { TweenMax } from "gsap";
import "../services/css/wework.css";

const Wework = () => {
  useEffect(() => {
    // Initialize ScrollMagic controller
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {},
    });

    // Create ScrollMagic scene
    new ScrollMagic.Scene({
      triggerElement: "#item-2", // Adjust as per your needs
      duration: 500, // Adjust duration as per your needs
    })
      .setClassToggle("#item-2", "in")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#item-3",
      duration: 500,
    })
      .setClassToggle("#item-3", "in")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#item-4",
      duration: 500,
    })
      .setClassToggle("#item-4", "in")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#item-5",
      duration: 500,
    })
      .setClassToggle("#item-5", "in")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#item-6",
      duration: 500,
    })
      .setClassToggle("#item-6", "in")
      .addTo(controller);

    // Clean up
    return () => {
      controller.destroy();
    };
  }, []); // Empty dependency array to run only once

  return (
    <>
      {/* <section className="work-wrapper">
        <div className="container mt-5 pt-5">
          <h2>WE CAN ALSO ASSIT YOU WITH</h2>
          <div className="row mt-3">
            <div class="card workcard" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div class="card workcard" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div class="card workcard" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div class="card workcard" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div class="card workcard" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div class="card workcard" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section style={{ padding: 0 }}>
        <div id="page " class="bg-gradient7">
          <div id="item-1" class="item item-1">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-10 ">
                  <div class="common-heading ptag" style={{ zIndex: 0 }}>
                    <span
                      style={{
                        color: "#ffae07",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        fontSize: "18px",
                        fontWeight: 400,
                        display: "block",
                      }}
                    >
                      {" "}
                      WELCOME TO VEAVIX
                    </span>
                    <h2 class="second-color">Why choose veavix</h2>
                    <p class="mb30">
                      Veavix is renowned for offering top-notch services that
                      are trustworthy and economical. We have a lot to offer and
                      are experts in our field.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="item-2"
            class="item item-2"
            style={{ marginTop: "20px", paddingTop: "0px" }}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-6  col-sm-6 width col-12 mt30">
                  <div class="s-block wide-sblock">
                    <div class="s-card-icon">
                      <img src="/Service/teama.svg" class="img-fluid" alt="" srcset="" />
                    </div>
                    <div class="s-block-contant">
                      <h4 class="second-color">
                        {" "}
                        Dealing with clients like you..
                      </h4>
                      <p>
                        Like you, our clientele placed their trust in our
                        abilities.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-12 width mt30">
                  <div class="s-block wide-sblock">
                    <div class="s-card-icon">
                      <img src="/Service/link.svg" class="img-fluid" alt="" srcset="" />
                    </div>
                    <div class="s-block-contant">
                      <h4 class="second-color">
                        {" "}
                        Total technical proficiency.
                      </h4>
                      <p>
                        We offer technological answers to your problems or
                        missions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="item-3"
            class="item item-3"
            style={{ marginTop: "-70px", paddingTop: "50px" }}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-sm-6 col-12 width mt30">
                  <div class="s-block wide-sblock">
                    <div class="s-card-icon">
                      <img src="/Service/tech.svg" class="img-fluid" alt="" srcset="" />
                    </div>
                    <div class="s-block-contant">
                      <h4 class="second-color">
                        {" "}
                        Total technical proficiency.
                      </h4>
                      <p>
                        We offer technological answers to your problems or
                        missions.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-12 width mt30">
                  <div class="s-block wide-sblock">
                    <div class="s-card-icon">
                      <img src="/Service/hi.svg" class="img-fluid" alt="" srcset="" />
                    </div>
                    <div class="s-block-contant">
                      <h4 class="second-color">
                        {" "}
                        Amiable and warm in demeanour.
                      </h4>
                      <p>
                        You can expect courteous and cordial help from us as a
                        customer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="item-4"
            class="item item-2"
            style={{ marginTop: "-70px", paddingTop: "50px" }}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-sm-6 col-12 width mt30">
                  <div class="s-block wide-sblock">
                    <div class="s-card-icon">
                      <img src="/Service/badge.svg" class="img-fluid" alt="" srcset="" />
                    </div>
                    <div class="s-block-contant">
                      <h4 class="second-color">
                        {" "}
                        Superior quality delivered on schedule.
                      </h4>
                      <p>
                        Deployed projects are of the greatest calibre, and
                        deadlines are always fulfilled.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-12 width mt30">
                  <div class="s-block wide-sblock">
                    <div class="s-card-icon">
                      <img src="/Service/tin.svg" class="img-fluid" alt="" srcset="" />
                    </div>
                    <div class="s-block-contant">
                      <h4 class="second-color">
                        {" "}
                        Continual and efficient communication.
                      </h4>
                      <p>
                        Regularly interact with the client to improve clarity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- <div id="item-5" class="item item-3" style="margin-top:40px;"></div> --> */}
          <div id="item-6" class="item item-2"></div>
        </div>
      </section>
    </>
  );
};

export default Wework;
