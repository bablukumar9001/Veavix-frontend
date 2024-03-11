// import React from "react";
import React, { useState, useEffect } from "react";

const ShowBlogs = () => {
  // const url = "/demo";
  const url = "/blogs/show";
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <h1>Sample blog post</h1>
          <h6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            consequuntur quae reprehenderit in error, minus deserunt debitis
            doloribus repudiandae necessitatibus maiores incidunt consequatur
            harum obcaecati dolorem,
          </h6>

          <div className="row mb-2 mt-5">
            {data.map((show) => (
              <div key={show._id} className="col-md-6">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                  <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-success">
                      <p style={{ color: "black" }}>{show.type}</p>
                    </strong>
                    <strong className="d-inline-block mb-2 text-success">
                      {show.authorname}
                    </strong>
                    <h3 className="mb-0">
                      <a className="text-dark" href="#">
                        {show.title}
                      </a>
                    </h3>
                    <div className="mb-1 text-muted">{show.date}</div>
                    <p className="card-text mb-auto">{show.description}</p>
                    <a href="#">Continue reading</a>
                  </div>
                  <img
                    className="card-img-right flex-auto d-none d-md-block"
                    data-src="holder.js/200x250?theme=thumb"
                    alt="Thumbnail [200x250]"
                    src={`http://127.0.0.1:3012/public/uploads/${show.photo}`}
                    data-holder-rendered="true"
                    style={{ width: "200px", height: "250px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowBlogs;
