import React from "react";
import "../mainIndex/css/indextech.css";
import django from "/django.svg";
import ruby from "/ruby.png";
import mongodb from "/technologies/mongodb.png";
import mysql from "/technologies/mysql.png";
import oracle from "/technologies/oracle.png";
import postge from "/technologies/postge.png";
import sqlserver from "/technologies/sqlserver.png";
import redis from "/technologies/redis.png";

const IndexTech = () => {
  return (
    <>
      <section className="indextech-wrapper ">
        <div className="container">
          <div className="row">
            <div class="works-content d-flex justify-content-between">
              <div>
                <h1
                  class="title aos-init aos-animate mt-5"
                  data-aos="fade-right"
                >
                  Technologies In Which we work{" "}
                </h1>
                <p class="py-2 aos-init aos-animate" data-aos="fade-left">
                  We offer only well-recognized and time-tested technologies to
                  support any of your business goals.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <ul
              className="nav nav-pills justify-content-center  mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link test active"
                  id="pills-frontend-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-frontend"
                  type="button"
                  role="tab"
                  aria-controls="pills-skill"
                  aria-selected="true"
                >
                  Frontend
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link test"
                  id="pills-backend-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-backend"
                  type="button"
                  role="tab"
                  aria-controls="pills-education"
                  aria-selected="false"
                >
                  Backend
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link  test"
                  id="pills-database-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-database"
                  type="button"
                  role="tab"
                  aria-controls="pills-awards"
                  aria-selected="true"
                >
                  Database
                </button>
              </li>
            </ul>
            {/* frontend-tecnologies */}

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade active show"
                id="pills-frontend"
                role="tabpanel"
                aria-labelledby="pills-frontend-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <i
                        class="fa-brands fa-angular mob-logo"
                        style={{ color: "#f7b018" }}
                      ></i>
                    </div>
                    <b className="mt-3 mob-text">ANGULAR</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <i
                        class="fa-brands fa-react mob-logo"
                        style={{ color: "#0446b9" }}
                      ></i>
                    </div>
                    <b className="mt-3 mob-text">REACT</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <i
                        class="fa-brands fa-html5 mob-logo"
                        style={{ color: "#040506" }}
                      ></i>
                    </div>
                    <b className="mt-3 mob-text">HTML</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <i
                        class="fa-brands fa-css3 mob-logo"
                        style={{ color: "#125bd9" }}
                      ></i>
                    </div>
                    <b className="mt-3 mob-text">CSS</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <i
                        class="fa-brands fa-square-js mob-logo"
                        style={{ color: "#f96534" }}
                      ></i>
                    </div>
                    <b className="mt-3 mob-text">JAVASCRIPT</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <i
                        class="fa-brands fa-vuejs mob-logo"
                        style={{ color: "#33cc45" }}
                      ></i>
                    </div>
                    <b className="mt-3 mob-text">VUE</b>
                  </div>
                </div>
              </div>

              {/* backend-technologies */}

              <div
                className="tab-pane fade container-fluid "
                id="pills-backend"
                role="tabpanel"
                aria-labelledby="pills-backend-tab"
                tabIndex="0"
              >
                <div className="row mt-3">
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <i
                        class="fa-brands fa-php mob-logo"
                        style={{ color: "#f7b018" }}
                      ></i>
                    </div>
                    <b className="mt-3 mob-text">PHP</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <i
                        class="fa-brands fa-laravel mob-logo"
                        style={{ color: "#0446b9" }}
                      ></i>
                    </div>
                    <b className="mt-3 mob-text">LARAVEL</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <i
                        class="fa-brands fa-python mob-logo"
                        style={{ color: "#c8ae09" }}
                      ></i>
                    </div>
                    <b className="mt-3 mob-text">PYTHON</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <img width={60} src={django} alt="" />
                    </div>
                    <b className="mt-3 mob-text">DJANGO</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <i
                        class="fa-brands fa-node mob-logo"
                        style={{ color: "#067a13" }}
                      ></i>
                    </div>
                    <b className="mt-3 mob-text">NODEJS</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <img width={60} src={ruby} alt="" />
                    </div>
                    <b className="mt-3 mob-text">RUBY</b>
                  </div>
                </div>
              </div>

              {/* database-technologies */}

              <div
                className="tab-pane fade container-fluid "
                id="pills-database"
                role="tabpanel"
                aria-labelledby="pills-database-tab"
                tabIndex="0"
              >
                <div className="row mt-3">
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <img width={60} src={mongodb} alt="" />
                    </div>
                    <b className="mt-3 mob-text">MongoDB</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <img width={60} src={mysql} alt="" />
                    </div>
                    <b className="mt-3 mob-text">mySQL</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <img width={60} src={oracle} alt="" />
                    </div>
                    <b className="mt-3 mob-text">ORACLE</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <img width={60} src={postge} alt="" />
                    </div>
                    <b className="mt-3 mob-text">PostgeSQL</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <img width={60} src={sqlserver} alt="" />
                    </div>
                    <b className="mt-3 mob-text">SQLserver</b>
                  </div>
                  <div class="col-lg-4 col-6 text-center">
                    <div class="mt-3">
                      <img width={60} src={redis} alt="" />
                    </div>
                    <b className="mt-3 mob-text">REDIS</b>
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

export default IndexTech;
