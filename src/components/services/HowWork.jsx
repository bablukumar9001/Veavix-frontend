import React from "react";
import workimage from "/workimage.png";

const HowWork = () => {
  return (
    <>
      <div className="container mt-5">
        <h1> How It Works ?</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, odio tenetur ad optio neque unde laborum autem labore
          quisquam nesciunt.
        </p>
        <img src={workimage} alt="" />
        <div className="text-center mt-5" style={{ backgroundColor: "white" }}>
          <h1>More About Veavix</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            laudantium debitis magnam quidem, assumenda ipsa impedit
            necessitatibus tempore non, molestias nemo laborum quam minima
            accusantium.
          </p>
          <button type="button" className="btn btn-primary">
            <a href="about"></a>
            Know More
          </button>
        </div>
      </div>
    </>
  );
};

export default HowWork;
