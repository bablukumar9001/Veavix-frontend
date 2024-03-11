import React from "react";
// import "./css/mobile.css";
import "../technologies/css/mobile.css";
import kotlin from "/kotlin.png";
import flutter from "/flutter.png";
const Mobile = () => {
  return (
    <>
      <div className="container mobile">
        <h1>MOBILE</h1>
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
                  className="fa-solid fa-mobile-screen-button iconsize fa-shake fa-xl"
                  style={{ color: "#0c182c" }}
                ></i>
              </div>
              <h3> Mobile App Development</h3>
            </div>
          </div>
          <div className="col-lg mobilebox2 mt-3">
            <section className="mobile-section ">
              <div className="row">
                <div className="col-lg-6">
                  <div class="content-techo ">
                    <h3 class="pb-2">
                      Full-Stack Mobile App Development To Drive Every Strategic
                      Goal
                    </h3>
                    <p class="pt-3">
                      A competent group of cross-platform mobile app developers
                      works at Brave Solutions. Therefore, employ our services if you
                      have a limited budget but yet want your app to be
                      distributed across several platforms.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row mt-3">
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-java mob-logo"
                          style={{ color: "#f7b018" }}
                        ></i>
                        <b className="mt-3 mob-text">JAVA</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <i
                          class="fa-brands fa-react mob-logo"
                          style={{ color: "#0446b9" }}
                        ></i>
                        <b className="mt-3 mob-text">REACTNATIVE</b>
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
                        <i
                          class="fa-brands fa-swift mob-logo"
                          style={{ color: "#53307e" }}
                        ></i>
                        <b className="mt-3 mob-text">SWIFT</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <img src={kotlin} width={70} alt="" />
                        <b className="mt-3 mob-text">KOTlIN</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <img width={60} src={flutter} alt="" />
                        <b className="mt-3 mob-text">FLUTTER</b>
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

export default Mobile;
