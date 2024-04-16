import React from "react";
import techimage from "/homeimage.png";
import "../mainIndex/css/indexHome.css";
import { TypeAnimation } from "react-type-animation";
import { Outlet, Link } from "react-router-dom";

const IndexHome = () => {
  return (
    <>
      <section className="index-home">
        <div className="container homepage">
          <div className="row">
            <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12  text-center">
             
              <div className="tech">
               <h3>Welcome to Veavix</h3>
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
              
                <button class="mt_btn_yellow mt_btn_yellowpx-4 btn-lg">
                  {" "}
                  GET A QUOTE{" "}
                </button>
              </Link>
            </div>
            <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12 box2 ">
              <img className="techimage mt-5" src={techimage} alt="" />
            </div>
          </div>
        </div>
      </section>



      <Outlet />
    </>
  );
};

export default IndexHome;
