import React from "react";
// import "./css/hompage.css";
import "../technologies/css/hompage.css";
import techimage from "/tech.png";
const Homepage = () => {
  return (
    <>
      <section className="home-service">
        <div className="container homepage">
          <div className="row">
            <div className="col-lg-6 box1 text-center">
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

            <div className="col-lg-6 box2">
              <img className="techimage image-fluid" src={techimage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
