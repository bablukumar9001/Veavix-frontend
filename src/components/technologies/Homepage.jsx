import React from "react";
// import "./css/hompage.css";
import "../technologies/css/hompage.css";
import techimage from "/tech.png";
import Technologies from './../Technologies';
const Homepage = () => {
  return (
    <>
      <section className="home-service">
        <div className="container homepage">
          <div className="row">
            <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12 text-center">
              <div className="tech">
                <div class="title">
                  <h1 className="h1">TECHNOLOGIES</h1>
                </div>
                <div className="mt-3 par">
                  <p className="p">
                    {" "}
                    We offer only well-recognized and time-tested technologies
                    to support any of your business goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12 box2">
              <img className="techimage image-fluid" src={techimage} alt="" />
            </div>
          </div>
        </div>
      </section>
{/* 
<section id="home" className="home">
      <h1>Explore The World Of Our Graduates</h1>
      <h2>with IT Company Services</h2>
    <div className="wave wave1"></div>
    <div className="wave wave2"></div>
    <div className="wave wave3"></div>
  </section>

  <section id="about" className="about">
    <h1 className="heading">Technologies</h1>
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

export default Homepage;
