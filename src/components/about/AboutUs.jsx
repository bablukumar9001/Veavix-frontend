import React from "react";
import collab from "/about/collab.png";
import growth from "/about/growth.png";
import open from "/about/open.png";
import result from "/about/result.png";
import team from "/about/team.png";
import trans from "/about/trans.png";
import about from "/aboutus.png";
// import "/about/css/aboutUs.css";
import "../about/css/aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div id="cards_landscape_wrap-2">
        <div className="container about ">
          <h1 className="">What makes us different?</h1>
          <p>
            Our client partnerships go beyond technology. We become deeply
            involved in our client’s day-to-day realities, while working
            collaboratively to build superior digital experiences for global
            development.
          </p>
          {/* services */}

          <div className="row mt-5">
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={collab} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Strong collaboration</h6>
                      <p>
                        Each team member of our company acts as a leader.
                        Combining creative and business mindsets Technogigz team
                        drives successful projects.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={result} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Result orientation</h6>
                      <p>
                        Our team always focuses on the result to be obtained. We
                        are attentive to all the workflow details, but most
                        importantly, we clearly see the final goal.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={growth} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Growth</h6>
                      <p>
                        We keep pace with modern trends and sometimes it is
                        necessary to step out of our comfort zone. And this
                        exactly moves us forward to be better and enhance our
                        skills.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={team} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Team spirit</h6>
                      <p>
                        Our common success depends on team spirit, mutual
                        assistance, solidarity, and a warm atmosphere. We are
                        strong alone, but together we are invincible.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={open} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Openness</h6>
                      <p>
                        We, at Technogigz, believe that an open-minded and
                        unbiased approach can drive solid results. We are open
                        to constructive criticism.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={trans} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Transparency</h6>
                      <p>
                        We adhere to an approach that each step of the design
                        and development process needs to be transparent for all
                        members of the project.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* about us */}

          <div className="row mt-5">
            <div className="col-lg-5 mt-5">
              <h1 className="mt-4">About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias, vero maxime est voluptatibus aperiam illo amet.
                Dolores praesentium modi amet aperiam totam provident animi
                facere!
              </p>
              <div class="row mt-3">
                <div class="col-lg-6 mb-2">
                  <div class="acivment">
                    <h2>190+</h2>
                    <h5>Projects Done</h5>
                  </div>
                </div>
                <div class="col-lg-6 mb-2">
                  <div class="acivment">
                    <h2>12+</h2>
                    <h5>Countries Served</h5>
                  </div>
                </div>
                <div class="col-lg-6 mb-2">
                  <div class="acivment">
                    <h2>60%</h2>
                    <h5>Senior Engineers</h5>
                  </div>
                </div>
                <div class="col-lg-6 mb-2">
                  <div class="acivment">
                    <h2>100%</h2>
                    <h5>Project Delivered</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-5">
              <img className="aboutimage  img-fluid" src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
