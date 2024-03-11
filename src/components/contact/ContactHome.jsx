import React from "react";
import techimage from "/contact.png";
import "./css/contacthome.css"

const ContactHome = () => {
  return (
    <>
      {/* <section className="home-service">
        <div className="container homepage">
          <div className="row">
            <div className="col-lg-6 box1 text-center">
              <div className="tech">
                <div class="title">
                  <h1 className="h1">CONTACT US</h1>
                </div>
                <div className="mt-3 par ">
                  <p className="p">
                    We are on edge of our seats to hear you out and make it all
                    possible on your behalf.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 box2 ">
              <img className="techimage" src={techimage} alt="" />
            </div>
          </div>
        </div>
      </section> */}

<section id="home" className="home">
      {/* <h1>Bring your Business Online</h1> */}
      <h1>Your Ideas, Our Solution</h1>
      <h2>Contact Us And We Will Put Your Ideas Into Action.</h2>
    <div className="wave wave1"></div>
    <div className="wave wave2"></div>
    <div className="wave wave3"></div>
  </section>

  <section id="about" className="about">
    <h1 className="heading">Contact us</h1>
    <div className="row">
        <div className="content">
            <h3>We make creativity work for your brand!</h3>
            <p>Ours is a team of creatives that is brainstorming on great ideas,<b> all. the. time.</b><br/>
                With our skills put together, you get an ensemble capable of doing anything and everything your brand needs.</p>
            {/* <a href="#"><button className="btn">Read More</button></a> */}
        </div>
    </div>
  </section>

    </>
  );
};

export default ContactHome;
