import React from "react";
import "../contact/css/newcontactform.css";

const NewContactForm = () => {
  return (
    <>
      <section
        class="contactiages"
        style={{ marginTop: "-30px " }}
        // style="background:url('map-1.png')"
      >
        <div class="container ">
          <div class="row">

            {/* <div
              class="col-lg-6 t-center1"
              style={{ alignSelf: "center", alignItems: "center" }}
            >
              <div class="imagecon">
                <img src="contact.png" alt="" srcset="" />
              </div>
            </div> */}

            <div className="col-lg-6 contactbox1 text-center">
              <div className="image-fluid">
                {/* <img src={contactform} alt="" height={120} /> */}
              </div>
              <h1 className="mt-3"> Get in touch </h1>
              <p>
                Got a question? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
              <div className="mt-2">
                <div class="my-2">
                  <a
                    style={{ color: "white" }}
                    href="tel:+91 9096743051"
                    class="btn btn-gradient py-2 px-3"
                  >
                    <i class="fa-solid fa-phone me-2"></i> +919578455245
                  </a>
                </div>
                <div class="my-2">
                  <a
                    style={{ color: "white" }}
                    href="mailto:info@veavix.com"
                    class="btn btn-gradient py-2 px-3"
                  >
                    <i class="fa-solid fa-envelope me-2"></i> info@veavix.com
                  </a>
                </div>
                <div>
                  <a
                    class="btn btn-gradient py-2 px-3"
                    style={{ color: "white" }}
                  >
                    <i class="fa-solid fa-location-dot me-2"></i>
                    701, c-tower, sector 63, Noida, India.
                  </a>
                </div>
              </div>
              <div>
                <ul className="list-unstyled-contact d-flex justify-content-center justify-content-md-end justify-content-lg-center social-icon mb-3 mt-4 mb-md-0">
                  <li>
                    <a href="https://www.instagram.com/abhay__9001/" target=" ">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/abhay559722/" target=" ">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/babluku9001" target=" ">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/bablu-kumar-a0aa16231/"
                      target=" "
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/bablukumar9001" target=" ">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>


            <div
              class="col-lg-6 contactmargin"
              style={{
                boxShadow: "0 0 20px hsla(0,0%,62%,.16)",
                padding: "40px",
              }}
            >
              <div class="contactheader">
                <h2>Tell us about your project</h2>
                <p>discuss your project with us</p>
              </div>
              <form action="" id="contactphp">
                <div class="row">
                  <div class="col-xl-12">
                    <div class="comment-form__input-box">
                      <input type="text" placeholder="Your name" name="name" />
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="comment-form__input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="comment-form__input-box">
                      <input
                        type="text"
                        placeholder="Phone number"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="comment-form__input-box">
                      <input type="text" placeholder="Subject" name="subject" />
                    </div>
                  </div>
                  <div class="comment-form__input-box text-message-box">
                    <textarea
                      name="message"
                      placeholder="Write a message"
                    ></textarea>
                  </div>
                  <div class="col-xl-12">
                    <div class="comment-form__btn-box">
                      <button type="submit" class="mt_btn_yellow mt-30    ">
                        Send a Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* contact details */}

      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="contact-info-box">
                <div class="back-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <h3 style={{ fontWeight: "600" }}>Our Adderes</h3>
                <p>Noida sector 63 G.B Nagar noida noida</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="contact-info-box">
                <div class="back-icon">
                  <i class="fa-solid fa-phone-volume"></i>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-phone-volume"></i>
                </div>
                <h3 style={{ fontWeight: "600" }}>Our contact</h3>
                <p style={{ margin: "0px 0 0px" }}>
                  Hr: <a href="tel:+7827530048">(+91) - 7827530048</a>
                </p>
                <p style={{ margin: "0px 0 0px" }}>
                  Info: <a href="tel:+7827530048">(+91) - 7827530048</a>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="contact-info-box">
                <div class="back-icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <h3 style={{ margin: "0px 0 0px" }}>Our Email</h3>
                <p style={{ margin: "0px 0 0px" }}>hr@veavix.com</p>
                <p style={{ margin: "0px 0 0px" }}>info@veavix.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* social links */}

    <div class="footer1">
        <div class="social">
          <p>Follow me on social media</p>
          <ul class="wrapper">
            <a href="#" target="_blank">
              <li class="icon linkedin">
                <span class="tooltip" >LinkedIn</span>
                <span><i class="fab fa-linkedin" ></i></span>
              </li>
            </a>
            <a href="#" target="_blank">
              <li class="icon github">
                <span class="tooltip" >GitHub</span>
                <span ><i class="fab fa-github" ></i></span>
              </li>
            </a>
            <a href="#" target="_blank">
              <li class="icon facebook">
                <span class="tooltip" >Facebook</span>
                <span><i class="fab fa-facebook-f" ></i></span>
              </li>
            </a>
            <a href="#" target="_blank">
              <li class="icon instagram">
                <span class="tooltip" >Instagram</span>
                <span><i class="fab fa-instagram " ></i></span>
              </li>
            </a>
            <a href="#" target="_blank">
              <li class="icon twitter">
                <span class="tooltip" >Twitter</span>
                <span><i class="fab fa-twitter" ></i></span>
              </li>
            </a>
           
            
          </ul>
        </div>
        {/* <!-- <div class="final_text"></div> --> */}
       
</div>

    </>
  );
};

export default NewContactForm;
