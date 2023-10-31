import React, { useState } from "react";
import "./css/contactform.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
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

    const res = await fetch("/clientdata", {
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
      <div className="container mt-5">
        {/* <h1>CONTACT US</h1> */}
        <div className="row">
          {/* left-content */}

          <div className="col-lg-6 contactbox1 text-center">
            <h2 className="mt-5">Let's make it together</h2>
            <p>
              Fill up the form and our team will get back to you within 24
              hours.
            </p>
            <div className="mt-3">
              <div class="my-4">
                <a href="tel:+91 9096743051" class="btn btn-gradient py-2 px-3">
                  <i class="fa-solid fa-phone me-2"></i> +919578455245
                </a>
              </div>
              <div class="my-4">
                <a
                  href="mailto:info@technogigz.com"
                  class="btn btn-gradient py-2 px-3"
                >
                  <i class="fa-solid fa-envelope me-2"></i> info@veavix.com
                </a>
              </div>
              <div>
                <a class="btn btn-gradient py-2 px-3">
                  <i class="fa-solid fa-location-dot me-2"></i>
                  701, c-tower, sector 63, Noida, India.
                </a>
              </div>
            </div>
          </div>

          {/* right-content */}

          <div className="col-lg-6 contactbox2">
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
                  />
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
                    placeholder="name@example.com"
                    value={user.email}
                    onChange={handleInputs}
                  />
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
                    placeholder="Phone"
                    value={user.mobile}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <div class="mb-5">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  rows="5"
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
