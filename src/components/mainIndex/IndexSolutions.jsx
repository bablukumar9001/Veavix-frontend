import React from "react";
import outsource from "/outsourcing.png";
import mvp from "/mvp.png";
import team from "/teamd.png";

const IndexSolutions = () => {
  return (
    <>
      <section className="indexservice-wrapper" id="cards_landscape_wrap-2">
        <div className="container mt-5">
          <h1 className="text-center">SOLUTIONS</h1>
          <p className="text-center">
            Our top-notch Indian engineers undergo a rigorous selection process
            to provide first-class custom software development services{" "}
          </p>
          <div className="row mt-3">
            {/* new grid */}

            {/* <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={outsource} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Outsourcing</h6>
                      <p>
                        Superior software products quality and fair prices -
                        that’s what makes us different from our competitors.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div> */}


            <div className="col-xl-4 col-lg-4 col-md-6 ">
              <div className="servicefor">
                <div className="singleservice">
                  <div className=" image">
                    <a href="#">
                      <img src={outsource} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3>Outsourcing</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                    Superior software products quality and fair prices -
                        that’s what makes us different from our competitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 ">
              <div className="servicefor">
                <div className="singleservice">
                  <div className=" image">
                    <a href="#">
                      <img src={mvp} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3>MVP</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                    Our custom software development company can help you
                        create or extend your team at an all-inclusive rate. No
                        hassle, no hidden fees, only resul
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 ">
              <div className="servicefor">
                <div className="singleservice">
                  <div className=" image">
                    <a href="#">
                      <img src={team} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3>Dedicated team</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                    Do you have an idea but are not sure how to start? With
                        our experience working with startups, we know how to
                        help!
                    </p>
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

export default IndexSolutions;
