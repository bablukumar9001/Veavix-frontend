import React, { useState } from "react";
import "./css/contactform.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactform from "/contactform.png";

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, mobile, message } = user;

    const res = await fetch("/employee/postuser", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        mobile,
        message,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);

    const data = await res.json();

    console.log(data);

    // if (res.status === 422) {
    if (res.status === 422 || !data) {
      toast.error("Invalid conatct  details", {
        toastId: "success1",
      });
      console.log("Invalid conatct  details");
      console.log(data);
    } else if (res.status !== 422) {
      toast.success("Message  has been sent Successfully", {
        toastId: "success2",
      });
      console.log("Message  has been sent Successfully");
    } else {
      toast.error("Some error ocurred");
    }
  };
  // console.log(`${apiUrl} and hello`);

  return (
    <>
      <section className="contact-wrapper">
        <div className="container  mt-5">
          {/* <h1>CONTACT US</h1> */}
          <div className="row">
            {/* left-content */}

            <div className="col-lg-6 contactbox1 text-center">
              <div className="image-fluid">
                <img src={contactform} alt="" height={120} />
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

            {/* right-content */}

            <div className="col-lg-6 contactbox2 form-group">
              <form
                id="contact_form"
                name="contact_form"
                // method="post"
                onSubmit={PostData}
              >
                <div class="mb-5 row">
                  <div class="col">
                    <label>First Name</label>
                    <input
                      type="text"
                      required
                      maxlength="50"
                      class="form-control"
                      id="first_name"
                      name="name"
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Your Name"
                    />
                    <span class="icon fa fa-user fa-lg"></span>
                  </div>
                  {/* <div class="col">
                  <label>Last Name</label>
                  <input
                    type="text"
                    required
                    maxlength="50"
                    class="form-control"
                    id="last_name"
                    name="last_name"
                  />
                </div> */}
                </div>
                <div class="mb-5 row">
                  <div class="col">
                    <label for="email_addr">Email address</label>
                    <input
                      type="email"
                      required
                      maxlength="50"
                      class="form-control"
                      id="email_addr"
                      name="email"
                      placeholder="Your Email"
                      value={user.email}
                      onChange={handleInputs}
                    />
                    <span class="icon fa fa-envelope fa-lg"></span>
                  </div>
                  <div class="col">
                    <label for="phone_input">Phone</label>
                    <input
                      type="tel"
                      required
                      maxlength="50"
                      class="form-control"
                      id="phone_input"
                      name="mobile"
                      placeholder=" Phone Number"
                      value={user.mobile}
                      onChange={handleInputs}
                    />
                    <span class="icon fa fa-phone fa-lg"></span>
                  </div>
                </div>
                <div class="mb-5">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={user.message}
                    onChange={handleInputs}
                  ></textarea>
                </div>
                <button
                  name="submit"
                  id="submit"
                  type="submit"
                  class="rn-btn main-btn-contact px-4 btn-lg"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ContactForm;
