import React from "react";
import "../technologies/css/database.css";
import mongodb from "/technologies/mongodb.png";
import mysql from "/technologies/mysql.png";
import oracle from "/technologies/oracle.png";
import postge from "/technologies/postge.png";
import sqlserver from "/technologies/sqlserver.png";
import redis from "/technologies/redis.png";

const Databases = () => {
  return (
    <>
      <div className="container database">
        <h1>DATABASE</h1>
        <h6>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          consequuntur quae reprehenderit in error, minus deserunt debitis
          doloribus repudiandae necessitatibus maiores incidunt consequatur
          harum obcaecati dolorem,
        </h6>
        <div className="row">
          {/* lef colum */}

          <div className="col-lg frontendbox1 mt-3">
            <section className="mobile-section ">
              <div className="row">
                <div className="col-lg-6">
                  <div class="content-techo ">
                    <h3 class="pb-2">
                      Easily organize massive amounts of data
                    </h3>
                    <p class="pt-3">
                      Our custom database development technologies, services,
                      and techniques help in collecting, organizing, and
                      obtaining key insights from humungous amounts of data
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row mt-3">
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <img width={60} src={mongodb} alt="" />
                        <b className="mt-3 mob-text">MongoDB</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <img width={60} src={mysql} alt="" />
                        <b className="mt-3 mob-text">mySQL</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <img width={60} src={oracle} alt="" />
                        <b className="mt-3 mob-text">ORACLE</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <img width={60} src={postge} alt="" />
                        <b className="mt-3 mob-text">PostgeSQL</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <img width={60} src={sqlserver} alt="" />
                        <b className="mt-3 mob-text">SQLserver</b>
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 text-center">
                      <div class="mt-3">
                        <img width={60} src={redis} alt="" />
                        <b className="mt-3 mob-text">REDIS</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* right column */}

          <div className="col-lg-3 frontendbox2 mt-3">
            <div className="text-center mt-3">
              <div class="mt-3">
                <i
                  className="fa-solid fa-database iconsize fa-shake fa-xl"
                  style={{ color: "#0c182c" }}
                ></i>
              </div>
              <h3> Database Development</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Databases;
