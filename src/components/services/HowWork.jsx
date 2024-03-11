import React from "react";
// import workimage from "/workimage.png";
import "../services/css/howwork.css";

const HowWork = () => {
  return (
    <>
      <section class="development_process_sec section-padding">
        <div class="container">
          <div class="main-heading-box main-heading-box-inner">
            <h2 style={{ fontSize: "40px", letterSpacing: "2px" }}>
              Veavix Development Process
            </h2>
            <p style={{ fontSize: "20px" }}>
              We believe in simplifying technology for you.
            </p>
            <p style={{ fontSize: "20px", lineHeight: "1.2" }}>
              Our development process is carefully curated to guide you from one
              end to another successfully. At veavix we give you number of
              reasons to choose us, one of them is our smartly designed process.
              From Development to Optimisation we work effectively to perfect
              you enterprise needs.
            </p>
          </div>
          <div class="row">
            <div
              class="col-md-2 dev_process_blk"
              style={{ position: "relative" }}
            >
              <article>
                <figure>
                  <img src="/Service/strategy.svg" alt="Strategy" class="lazyload" />
                </figure>
                <figcaption>
                  <h4>Strategy</h4>
                </figcaption>
              </article>
            </div>
            <div class="col-md-2 dev_process_blk">
              <article>
                <figure>
                  <img
                    alt="Analysis & Planning"
                    class="lazyload"
                    src="/Service/analysis.svg"
                  />
                </figure>
                <figcaption>
                  <h4>Analysis & Planning</h4>
                </figcaption>
              </article>
            </div>
            <div class="col-md-2 dev_process_blk">
              <article>
                <figure>
                  <img
                    alt="UI/UX Design"
                    class="lazyload"
                    src="/Service/ui-design.svg"
                  />
                </figure>
                <figcaption>
                  <h4>UI/UX Design</h4>
                </figcaption>
              </article>
            </div>
            <div class="col-md-2 dev_process_blk">
              <article>
                <figure>
                  <img
                    alt="Development Process"
                    class="lazyload"
                    src="/Service/development-process.svg"
                  />
                </figure>
                <figcaption>
                  <h4>Development Process</h4>
                </figcaption>
              </article>
            </div>
            <div class="col-md-2 dev_process_blk">
              <article>
                <figure>
                  <img alt="Testing" class="lazyload" src="/public/Service/testing.svg" />
                </figure>
                <figcaption>
                  <h4>Testing</h4>
                </figcaption>
              </article>
            </div>
            <div class="col-md-2 dev_process_blk">
              <article>
                <figure>
                  <img
                    alt="Publish & Launch"
                    class="lazyload"
                    src="/Service/publish.svg"
                  />
                </figure>
                <figcaption>
                  <h4>Publish & Launch</h4>
                </figcaption>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWork;
