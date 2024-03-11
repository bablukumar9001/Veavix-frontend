import React from "react";
import image1 from "/image1.jpg";
import image2 from "/image2.webp";
// import image3 from "/image3.jpg";
import "../services/css/ServiceIndex.css";
import blogs from "/Blogs/blogs.png";

const ServiceIndex = () => {
  return (
    <>
      {/* <section className="home-service">
        <div className="container  homepage">
          <div className="row">
            <div className="col-lg-6 box1 text-center">
              <div className="tech">
                <div class="title">
                  <h1 className="h1">Blogs</h1>
                </div>
                <div className="par mt-3">
                  <p className="p">
                    Get your business growing right and fast with our dedicated
                    services that include tailored services and applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 box2 ">
              <img className="techimage " src={blogs} alt="" />
            </div>
          </div>
        </div>
      </section> */}

<section id="home" className="home">
      {/* <h1>Bring your Business Online</h1> */}
      <h1>Need A Unique And High-Quality Website Design?</h1>
      <h2>with IT Company Services</h2>
    <div className="wave wave1"></div>
    <div className="wave wave2"></div>
    <div className="wave wave3"></div>
  </section>

  <section id="about" className="about">
    <h1 className="heading">Blogs</h1>
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

export default ServiceIndex;
