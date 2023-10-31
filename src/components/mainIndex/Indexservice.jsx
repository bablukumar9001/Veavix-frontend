import React from "react";
import blockchain from "/Service/blockchain.png";
import web from "/Service/web.png";
import chatbot from "/Service/chatbot.png";
import iot from "/Service/iot.png";
import ios from "/Service/ios.png";
import graphic from "/Service/graphic.png";
import ui from "/Service/ui.png";
import frontend from "/Service/frontend.png";
import Ai from "/Service/AI.png";
import digitalmark from "/Service/digitalmarketing.png";
import reseacrh from "/Service/research.png";
import itconsult from "/Service/itconsulting.png";

const Indexservice = () => {
  return (
    <>
      <section className="indexservice-wrapper" id="cards_landscape_wrap-2">
        <div className="container mt-5">
          <h1 className="text-center">OUR SERVICES</h1>
          <p className="text-center">
            Get your business growing right and fast with our dedicated services
            that include tailored services and applications.
          </p>
          <div className="row mt-3">
            {/* new grid */}

            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={frontend} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>MOBILE APP DEVELOPMENT</h6>
                      <p>
                        We use the latest technology solutions for mobile
                        application development to facilitate your business
                        growth and brand recognition.
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
                      <img src={web} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>WEB DEVELOPMENT</h6>
                      <p>
                        We provide engaging and attractive web interfaces that
                        are responsive and responsible for your customer's
                        engagement needs with your business.
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
                      <img src={ios} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>IOS DEVELOPMENT</h6>
                      <p>
                        By offering businesses streamlined services for iOS
                        platforms, Technogigz helps them broaden their horizons.
                        We offer our clients optimal services by combining
                        experience and technology in the right way.
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
                      <img src={digitalmark} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>DIGITAL MARKETING</h6>
                      <p>
                        We make you stand out of the crowd by promoting your
                        business or brand to all the interactive audiences
                        available out there.
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
                      <img src={ui} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>UI/UX DESIGN</h6>
                      <p>
                        We at Technogigz are committed to building websites with
                        unparalleled UI and UX designs. We make sure to cater to
                        the needs of our clients and provide them with original
                        suggestions to improve their judgement.
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
                      <img src={Ai} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>AI/ML DEVELOPMENT </h6>
                      <p>
                        As AI/ML is seen as the future of technology, we have
                        moulded our solutions and team to the advancement of the
                        technology and bring cost-effective yet feasible
                        solutions for our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Indexservice;
