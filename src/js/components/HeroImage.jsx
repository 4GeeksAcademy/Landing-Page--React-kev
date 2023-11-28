import React from "react";

const HeroImage = () => {
  return (
    <>
      <div
        className="bg-light p-3 rounded-3 d-flex flex-column justify-content-around align-items-center align-items-lg-start"
        style={{ minHeight: "300px" }}
      >
        <h2> A Warm Welcome</h2>
        <p className="text-center text-lg-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
          laboriosam consequuntur? Repudiandae molestias suscipit, similique
          aliquid deserunt nisi blanditiis. Asperiores doloremque dicta
          voluptatibus laudantium nostrum deserunt incidunt ipsa. Maxime,
          exercitationem?
        </p>
        <button className="btn btn-primary mw-50">Call to action</button>
      </div>
    </>
  );
};

export default HeroImage;
