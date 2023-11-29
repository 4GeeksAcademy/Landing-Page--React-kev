import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark px-5">
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex justify-content-between w-100">
            <a className="navbar-brand text-light fw-bold" href="#">
              Start Bootstrap
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link text-secondary" href="#">
                  Features
                </a>
                <a className="nav-link text-secondary" href="#">
                  Pricing
                </a>
                <a className="nav-link text-secondary" aria-disabled="true">
                  Disabled
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
