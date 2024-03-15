import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const AboutUs = () => {
  useEffect(() => {
    document.title = "Play Ways - About Us"; 
  }, []);
  return (
    <>
      <div>
        <div className="position-relative">
          <img
            src={require("../imgs/illustrations/aboutUs.png")}
            alt="Feedback"
            className="img-fluid w-100 h-50"
            style={{
              minHeight: "60vh",
              aspectRatio: "16/3",
              objectFit: "cover",
              filter: "brightness(50%)",
            }}
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <h1
              className="text-white text-lg text-sm text-xs responsive-text"
              style={{ fontSize: "60px", fontFamily: "satisfya" }}
            >
              About Us
            </h1>
            <p className="text-white mt-4">
              We are a team dedicated to providing the best services to our
              customers.
            </p>
          </div>
        </div>

        <div className=" ">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb ms-4 mt-2">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-warning">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </nav>
        </div>

        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="card h-100 bg-golden animate__animated animate__fadeInLeft">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <h2 className="display-4 text-center text-white">
                    PlayWays Story
                  </h2>
                  <h4 className="m-5 text-muted text-center ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minus voluptatum, sequi quod qui optio dignissimos dolor
                    quos nulla! Architecto facere commodi tempora qui fugit
                    nostrum cupiditate dignissimos quod fugiat tempore.
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <img
                src={require("../imgs/Logo.png")}
                alt=""
                className="img-fluid rounded-5 animate__animated animate__fadeInRight"
              />
            </div>
          </div>
          <div className="row flex-row-reverse mt-5 mb-5">
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="card h-100 bg-golden  animate__animated animate__fadeInRight animate__delay-1s">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <h2 className="display-4 text-center text-white">
                    About Playways
                  </h2>
                  <h4 className="m-5 text-muted text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minus voluptatum, sequi quod qui optio dignissimos dolor
                    quos nulla! Architecto facere commodi tempora qui fugit
                    nostrum cupiditate dignissimos quod fugiat tempore.
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={require("../imgs/Logo.png")}
                alt=""
                className="img-fluid rounded-5 animate__animated animate__fadeInLeft animate__delay-1s"
              />
            </div>
          </div>

          <div
            className="row d-flex justify-content-center p-5 align-items-center animate__animated animate__fadeInDown"
            style={{ minHeight: "80vh" }}
          >
            <div className="text-center">
              <h1 className="display-3 text-dark mb-5">The Team</h1>
            </div>
            <div className="col-md-3">
              <div className="card border-0 text-center">
                <img
                  src={require("../imgs/Profile_avatar4.png")}
                  className="card-img-top img-fluid rounded-circle border"
                  alt=""
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-golden">Person Name</h4>
                  <p className="card-text text-muted">Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 text-center">
                <img
                  src={require("../imgs/Profile_avatar4.png")}
                  className="card-img-top img-fluid rounded-circle border"
                  alt=""
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-golden">Person Name</h4>
                  <p className="card-text text-muted">Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 text-center">
                <img
                  src={require("../imgs/Profile_avatar4.png")}
                  className="card-img-top img-fluid rounded-circle border"
                  alt=""
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-golden">Person Name</h4>
                  <p className="card-text text-muted">Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row d-flex justify-content-center align-items-center mb-5 animate__animated animate__fadeInDown"
            style={{ minHeight: "80vh" }}
          >
            <div className="col-md-8 mb-5">
              <div className="text-center">
                <img
                  src={require("../imgs/cec-logo.webp")}
                  alt="cec"
                  className="img-fluid"
                  width={"150px"}
                  style={{
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-muted">
                  Special thanks to cec.org for their invaluable help and
                  support throughout this project.
                </h4>
                <a
                  href="https://www.cecyours.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-golden mt-3"
                >
                  View More About CEC
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
