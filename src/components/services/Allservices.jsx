import React from "react";
import "../services/css/allServices.css";
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

const Allservices = () => {
  return (
    <>
      <div id="cards_landscape_wrap-2">
        <div className="container mt-5">
          <h1> We Can Help With</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            eaque minima, ullam magni voluptatum eveniet.
          </p>

          <div className="row mt-3">
            {/* new grid */}

            {/* <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4">
              <a href="">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src={frontend} alt="" />
                    </div>
                    <div className="text-container">
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
            </div> */}

            <div className="col-xl-4 col-lg-4 col-md-6 ">
              <div className="servicefor">
                <div className="singleservice">
                  <div className=" image">
                    <a href="#">
                      <img src={frontend} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> Graphic Design</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                      {" "}
                      Our talented graphic designers will give your website a
                      sophisticated appearance. Your website's design will
                      captivate your viewers.
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
                      <img src={web} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> WEB DEVELOPMENT</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                      {" "}
                      We provide engaging and attractive web interfaces that are
                      responsive and responsible for your customer's engagement
                      needs with your business.
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
                      <img src={blockchain} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> BLOCKCHAIN DEVELOPMENT</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                      {" "}
                      As blockchain continues to spread its legs in digitization
                      we build our expertise to cope with the ever growing
                      technology to provide all solutions for the blockchain
                      technology.
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
                      <img src={iot} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> INTERNET OF THINGS</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                      {" "}
                      We at Technogigz produce excellent IoT-enabled apps. So,
                      if you have a great concept for an IoT application, we
                      have reliable and affordable solutions waiting for you!.
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
                      <img src={ios} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> IOS DEVELOPMENT</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                      {" "}
                      By offering businesses streamlined services for iOS
                      platforms, Technogigz helps them broaden their horizons.
                      We offer our clients optimal services by combining
                      experience and technology in the right way.
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
                      <img src={digitalmark} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> DIGITAL MARKETING</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                      {" "}
                      We make you stand out of the crowd by promoting your
                      business or brand to all the interactive audiences
                      available out there.
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
                      <img src={ui} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> UI/UX DESIGN</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                      {" "}
                      We at Technogigz are committed to building websites with
                      unparalleled UI and UX designs. We make sure to cater to
                      the needs of our clients and provide them with original
                      suggestions to improve their judgement.
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
                      <img src={graphic} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> GRAPHIC DESIGN</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                      {" "}
                      The inventiveness and ability to leave a lasting
                      impression possessed by our graphic designers are well
                      acknowledged. What miraculous accomplishment do they pull
                      off? They use a few of the most cutting-edge instruments
                      to achieve it.
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
                      <img src={chatbot} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> CHATBOT</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                      {" "}
                      We provide customized chatbots for your business and do
                      not use any third-party services, to match all your
                      customer support and catering needs.
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
                      <img src={Ai} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> AI/ML DEVELOPMENT </h3>
                  </div>
                  <div className="paragraph">
                    <p>
                    As AI/ML is seen as the future of technology, we have
                        moulded our solutions and team to the advancement of the
                        technology and bring cost-effective yet feasible
                        solutions for our clients.
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
                      <img src={itconsult} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> IT STRATEGY SOFTWARE CONSULTING</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                    Our goal at Technogigz is to give you highly effective
                        consulting solutions and strategies. We've established a
                        solid reputation by offering excellent solutions.
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
                      <img src={reseacrh} alt="" />
                    </a>
                  </div>
                  <div className="headingweb first-color">
                    <h3> RESEARCH AND DEVELOPMENT</h3>
                  </div>
                  <div className="paragraph">
                    <p>
                    Our goal at Technogigz is to give you highly effective
                        consulting solutions and strategies. We've established a
                        solid reputation by offering excellent solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

       

           
         
          
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Allservices;
