import React from "react";

const Card = () => {
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-3">
      <div className="card p-0 ">
        <img
          src="https://picsum.photos/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body  text-center ">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary w-75">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
