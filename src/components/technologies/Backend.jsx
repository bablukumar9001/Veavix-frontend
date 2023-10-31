import React from "react";
import "../technologies/css/backend.css";
import django from "/django.svg";
import ruby from "/ruby.png";

const Backend = () => {
  return (
    <>
      <div className="container backend">
        <h1>BACKEND</h1>
        <h6>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          consequuntur quae reprehenderit in error, minus deserunt debitis
          doloribus repudiandae necessitatibus maiores incidunt consequatur
          harum obcaecati dolorem,
        </h6>
        <div className="row">
          <div className="col-lg-3 mobilebox1 mt-3">
            <div className="text-center mt-5">
              <div class="mt-3">
                <i
                  className="fa-solid fa-server iconsize fa-shake fa-xl"
                  style={{ color: "#0c182c" }}
                ></i>
              </div>
              <h3> Backend Development</h3>
            </div>
          </div>
          <div className="col-lg mobilebox2 mt-3">
            <section className="mobile-section ">
              <div className="row">
                <div className="col-lg-6">
                  <div class="content-techo ">
                    <h3 class="pb-2">
                      Support your growth with our robust backend solutions
                    </h3>
                    <p class="pt-3">
                      Our backend development services create solutions that
                      seamlessly work, meets client’s & market’s need, and
                      offers a top-notch user experience that increases your
                      client’s loyalty.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row mt-3">
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-php mob-logo"
                          style={{ color: "#f7b018" }}
                        ></i>
                        <b className="mt-3 mob-text">PHP</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-laravel mob-logo"
                          style={{ color: "#0446b9" }}
                        ></i>
                        <b className="mt-3 mob-text">LARAVEL</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-python mob-logo"
                          style={{ color: "#c8ae09" }}
                        ></i>
                        <b className="mt-3 mob-text">PYTHON</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <img width={60} src={django} alt="" />
                        <b className="mt-3 mob-text">DJANGO</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-node mob-logo"
                          style={{ color: "#067a13" }}
                        ></i>
                        <b className="mt-3 mob-text">NODEJS</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <img width={60} src={ruby} alt="" />
                        <b className="mt-3 mob-text">RUBY</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backend;
