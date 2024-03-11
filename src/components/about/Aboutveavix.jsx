import React from "react";

const Aboutveavix = () => {
  return (
    <>
      <section class="value1" style={{ background: "rgb(234, 241, 250)" }}>
        <div
          class=" finance-one_pattern"
          //   style="background:url(pattern-16.png);background-size:conver;background-repeat:no-repeat;"
        ></div>
        <div
          class=" finance-one_pattern-two"
          //   style="background:url(pattern-17.png);background-size:conver;background-repeat:no-repeat;"
        ></div>

        <div class="container container1">
          <div class="row">
            <div class="col-lg-6 col-12 ">
              <div class="item itemimageabout">
                <div class="circle"></div>
                <div class="image1 single-thumb">
                  <img 
                    class="  shadow2 "
                    data-aos="reveal-item"
                    // src="/about/about-us.webp"
                    alt=""
                  />
                </div>
                <div class="image2 single-thumb">
                  <img
                    class="  shadow2 "
                    data-aos="reveal-item"
                    // src="/about/photo-7-1 (1).jpg"
                    alt=""
                  />
                </div>
              </div>
              {/* <!-- <div class=" wow fadeInLeft mt-30 text-center"  data-animation="animated fadeInLeft"  style="padding-top:50px;position:relative;">
                     <p style="color:#333a65;font-size:22px;font-weight:500;">Development is always easy, it's the inexperienced team which makes it difficult.  </p>
                   
                     <button type="button" class="mt_btn_yellow "  data-toggle="modal" data-target="#myModal " style="padding:15px 30px;font-size:15px;">
                     Request A Quote
                  
                            </button>
                    
                </div> --> */}
            </div>

            <div class="col-lg-6 col-12 center aboutsection ">
              <div>
                <h3
                  class="aboutt first-color"
                  style={{
                    color: "#ffae07",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    fontSize: "18px",
                    fontWeight: 400,
                    margin: "0 0 15px 0",
                    display: "block",
                  }}
                >
                  ABOUT VEAVIX
                </h3>
                <h1
                  style={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: "45px",
                    lineHeight: 1,
                  }}
                >
                  Veavix
                </h1>
                <p class="lead mb-5 ">
                  We have developed a specific market for ourselves in the field
                  of mobile and website development. With years of expertise in
                  development, technology consulting, and IT outsourcing, we are
                  a top-ranked business in Delhi-NCR. We began a few years back
                  with only 3 workers and have since grown to more than 50. This
                  reflects our development and the excellence of the work we
                  produced throughout the years.
                </p>
                <p class="lead mb-5" style={{ color: "#9f9f9f" }}>
                  Our company is made up of highly qualified IT specialists
                  whose goal is to provide SMEs excellent yet affordable
                  solutions. We are experts in creating websites and
                  applications that are specifically tailored for each industry.
                  Therefore, if there is a specific demand, we will satisfy it
                  by customising the app to suit your requirements.
                </p>
              </div>
              <div class="row">
                <div class="col-lg-4 col-sm-4">
                  <div class="counter">
                    <span
                      class="js-counter"
                      data-number="200"
                      style={{ fontSize: "35px", color: "#ffac00" }}
                    >
                      0
                    </span>
                    <span style={{ fontSize: "35px", color: "#ffac00" }}>
                      +
                    </span>
                    <p>Apps Developed</p>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                  <div class="counter">
                    <span
                      class="js-counter"
                      data-number="20"
                      style={{ fontSize: "35px", color: "#ffac00" }}
                    >
                      0
                    </span>
                    <span style={{ fontSize: "35px", color: "#ffac00" }}>
                      +
                    </span>
                    <p>Countries Served</p>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                  <div class="counter">
                    <span
                      class="js-counter"
                      data-number="100"
                      style={{ fontSize: "35px", color: "#ffac00" }}
                    >
                      0
                    </span>
                    <span style={{ fontSize: "35px", color: "#ffac00" }}>
                      %
                    </span>
                    <p>Client Satisfaction</p>
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

export default Aboutveavix;
