import React from "react";
import techimage from "/about/about.png";

const AboutHome = () => {
  return (
    <>
      <section className="home-service">
        <div className="container homepage">
          <div className="row">
            <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12 text-center">
              <div className="tech">
                <div class="title">
                  <h1 className="h1">ABOUT US</h1>
                </div>
                <div className="mt-3 par">
                  <p className="p">
                    
                    Veavix team consists of perfectionists and open-minded
                    people. We know how to make the best decisions and are able
                    to put our experience to work for you. Radical honesty is
                    one of our key values we practice whilst working with our
                    clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12 box2 ">
              <img className="techimage" src={techimage} alt="" />
            </div>
          </div>
        </div>
      </section>
{/* 
<section id="home" className="home">
      <h1>Need A Unique And High-Quality Website Design?</h1>
      <h2>with IT Company Services</h2>
    <div className="wave wave1"></div>
    <div className="wave wave2"></div>
    <div className="wave wave3"></div>
  </section>

  <section id="about" className="about">
    <h1 className="heading">About us</h1>
    <div className="row">
        <div className="content">
            <h3>We make creativity work for your brand!</h3>
            <p>Ours is a team of creatives that is brainstorming on great ideas,<b> all. the. time.</b><br/>
                With our skills put together, you get an ensemble capable of doing anything and everything your brand needs.</p>
        </div>
    </div>
  </section> */}


    </>
  );
};

export default AboutHome;
