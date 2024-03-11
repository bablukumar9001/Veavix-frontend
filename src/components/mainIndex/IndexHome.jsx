import React from "react";
import techimage from "/homeimage.png";
import "../mainIndex/css/indexHome.css";
import { TypeAnimation } from "react-type-animation";
import { Outlet, Link } from "react-router-dom";

const IndexHome = () => {
  return (
    <>
      {/* <section className="index-home">
        <div className="container homepage">
          <div className="row">
            <div className="col-lg-6 box1 text-center">
             

              <div className="tech">
                <div className="titlee">
                  <h1 className="h11">WE TRANFORM IDEAS INTO</h1>
                </div>
                <div className="animate-text">
                  <TypeAnimation
                    sequence={[
                      "SUCCESSFUL STARTUPS ",
                      1000,
                      "INNOVATIONS",
                      1000,
                      "TENGIBLE REALITIES",
                      1000,
                      "TOP-NOTCH PLTAFORMS",
                      1000,
                      "PROGRESSIVE BRANDS",
                      1000,
                    ]}
                    repeat={Infinity}
                    speed={45}
                    deletionSpeed={50}
                  />
                </div>
                <p className="mt-3">
                  Offering cost-efficient solutions for out-of-the-box designs,
                  effective web and engageable app solutions to satisfy all your
                  needs.
                </p>
              </div>

              <Link to="/ContactForm">
              
                <button class="main-btn-contact px-4 btn-lg">
                  {" "}
                  GET A QUOTE{" "}
                </button>
              </Link>
            </div>
            <div className="col-lg-6 box2 ">
              <img className="techimage mt-5" src={techimage} alt="" />
            </div>
          </div>
        </div>
      </section> */}


       <section>
        
    <div id="home-banner" class="carousel slide ps_indicators_l  ps_control_rotate_f kbrns_zoomInOut thumb_scroll_x swipe_x ps_easeOutQuart" data-ride="carousel" data-pause="hover" data-interval="10000" data-duration="2000">

<div class="carousel-inner" role="listbox">

    <div class="item active">

        <img src="7.jpg" alt="slider_01" />

        <div class="caption_slide1 fadeInRight" data-animation="animated fadeInRight">
            <h3>Welcome To VEAVIX</h3>
            <h1>veavix creates user-centred solutions for the digital age.</h1>
            <p>Because we combine strategy, creative, and engineering, every product is distinct, much like our custom method. We promote synergies outside of the conventional to truly innovate. </p>
            <a class="mt_btn_white-bor" href="#">Read More</a>
            <a class="mt_btn_yellow" href="#">Contact Us</a>
            {/* <!-- <a class="mt_btn_black" href="#">testing</a> --> */}
        </div>
    </div>


    <div class="item">

        <img src="firstslider.webp"  alt="slider_02" />

        <div class="caption_slide1 caption_slide1_right wow fadeInLeft" data-animation="animated fadeInLeft">
            <h3>Welcome To VEAVIX</h3>
            <h1>Better education for a better world</h1>
            <a class="mt_btn_white-bor" href="#">Read More</a>
            <a class="mt_btn_yellow" href="#">Contact Us</a>
            {/* <!-- <a class="mt_btn_black" href="#">testing</a> --> */}
        </div>
    </div>


    <div class="item">

        <img src="slide-3.jpg" alt="slider_04" />

        <div class="caption_slide1 caption_slide1_center cap-new wow fadeInDown" data-animation="animated fadeInDown">
            <h3>Welcome To VEAVIX</h3>
            <h1>Exceptional People, Exceptional Care</h1>
            <a class="mt_btn_white-bor" href="#">Read More</a>
            <a class="mt_btn_yellow" href="#">Contact Us</a>

            {/* <!-- <a class="mt_btn_black" href="#">testing</a> --> */}
        </div>
    </div>

</div>

<a class="left carousel-control" href="#home-banner" role="button" data-slide="prev">
    <span class="fa fa-angle-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
</a>

<a class="right carousel-control"  href="#home-banner" role="button" data-slide="next">
    <span class="fa fa-angle-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
</a>
</div>
       </section>

      <Outlet />
    </>
  );
};

export default IndexHome;
