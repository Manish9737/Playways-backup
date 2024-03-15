import "animate.css";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaStar,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    document.title = "Play Ways - Home"; 
  }, []);
  return (
    <>
      <header>
        <Carousel fade>
          <Carousel.Item>
            <div
              className="page-header min-vh-100"
              id="header-img-home"
              loading="lazy"
            >
              <span className="mask bg-gradient-dark opacity-4"></span>
              <div className="container">
                <div className="row justify-content-center vh-100 align-items-center">
                  <div className="col-lg-6 col-sm-9 text-center mx-auto position-absolute">
                    <h1 className="display-4 mb-4">Work with an Choice</h1>
                    <p className="lead text-white mb-sm-6 mb-4">
                      We’re constantly trying to express ourselves and actualize
                      our dreams. If you have the opportunity to play this game.
                      If you have the opportunity to play this game.
                    </p>
                    <p className="text-white h6 text-uppercase mb-4">
                      connect with us on:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="page-header min-vh-100"
              id="header-img-home"
              loading="lazy"
            >
              <span className="mask bg-gradient-dark opacity-4"></span>
              <div className="container">
                <div className="row justify-content-center vh-100 align-items-center">
                  <div className="col-lg-6 col-sm-9 text-center mx-auto position-absolute">
                    <h1 className="display-4 mb-4">Work with an amazing</h1>
                    <p className="lead text-white mb-sm-6 mb-4">
                      We’re constantly trying to express ourselves and actualize
                      our dreams. If you have the opportunity to play this game.
                      If you have the opportunity to play this game.
                    </p>
                    <p className="text-white h6 text-uppercase mb-4">
                      connect with us on:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Items for additional slides */}
        </Carousel>
      </header>

      <div
        className="container-fluid  position-relative "
        style={{ top: "-150px", zIndex: "9999" }}
      >
        <div className="card m-lg-3 m-3">
          <div className="card-body shadow">
            {/* row-1 */}
            <div className="row justify-content-center text-center mt-5">
              <div className="col-md-3">
                <h1
                  className="text-gradient text-warning"
                  id="state1"
                  countTo="300"
                >
                  300
                </h1>
                <h5 className="mt-3">Players</h5>
                <p>
                  Of “high-performing” level are led by a certified project
                  manager
                </p>
              </div>
              <div className="col-md-3">
                <h1
                  className="text-gradient text-warning"
                  id="state2"
                  countTo="70"
                >
                  70
                </h1>
                <h5 className="mt-3">Games</h5>
                <p>That meets quality standards required by our users</p>
              </div>
              <div className="col-md-3">
                <h1
                  className="text-gradient text-warning"
                  id="state3"
                  countTo="30"
                >
                  30
                </h1>
                <h5 className="mt-3">Game Stations</h5>
                <p>Actively engage team members that finishes on time</p>
              </div>
            </div>

            {/* row-2 */}
            <div className="row align-items-center mt-5 m-lg-5 p-lg-5 mb-5">
              <div className="col-md-6 mb-md-0 mb-4">
                <h3 className="text-warning display-3 fw-bold">Play Ways</h3>
                <p className="lead mb-md-5 mb-4">
                  Change the color to match your brand or vision, add your logo,
                  choose the perfect thumbnail, remove the playbar, add controls
                  and more.
                </p>
                <p>
                  <span className="me-2">&#9679;</span> Showcase and embed your
                  work with
                </p>
                <p>
                  <span className="me-2">&#9679;</span> Publish across social
                  channels in a click
                </p>
                <p>
                  <span className="me-2">&#9679;</span> Sell your videos
                  worldwide
                </p>
                <p>
                  <span className="me-2">&#9679;</span> Make more profit
                </p>
              </div>
              <div className="col-md-6">
                <div className="blur-shadow-image text-center">
                  <div className="card shadow-lg bg-light">
                    <div className="card-body ">
                      <img
                        src={require("../imgs/Logo.png")}
                        alt="img-shadow"
                        className="img-fluid shadow-xl border-radius-lg max-height-500 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* row-3 cards*/}
            <div className="mb-5">
              <div className="row">
                <div className="col-lg-8 text-center mx-auto">
                  <p className="mb-1 text-gradient text-warning font-weight-bold text-uppercase display-3 ">
                    Our Work
                  </p>
                  <h3>Best of Game Stations</h3>
                </div>
              </div>
              <div className="row mt-4 m-lg-5 p-lg-5 ">
                <div className="col-lg-4 col-md-6">
                  <a href="/">
                    <div className="card card-background card-background-mask-dark h-100">
                      <div
                        className="full-background"
                        id="cardImg"
                        // style={{backgroundImage: "url(&#39;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg&#39;)"}}
                      ></div>
                      <div className="card-body pt-7 text-center">
                        <p className="text-uppercase font-weight-bold text-sm opacity-6">
                          Various Games
                        </p>
                        <h3 className="">Search and Discover!</h3>
                        <p className="opacity-8">
                          Don&#39;t be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design.
                        </p>
                        <button
                          type="button"
                          className="btn btn-warning btn-sm mt-3"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6">
                  <a href="/">
                    <div className="card card-background card-background-mask-dark mt-md-0 mt-4 h-100">
                      <div
                        className="full-background"
                        // style="background-image: url(&#39;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/toboshar.jpg&#39;)"
                      ></div>
                      <div className="card-body pt-7 text-center ">
                        <p className="text-uppercase font-weight-bold text-sm  opacity-6">
                          Game Stations
                        </p>
                        <h3 className="">Find music and play it!</h3>
                        <p className=" opacity-8">
                          As we live, our hearts turn colder. Cause pain is what
                          we go through as we become older. We get insulted by
                          others, lose trust for those others.
                        </p>
                        <button
                          type="button"
                          className="btn btn-warning btn-sm mt-3"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 mx-md-auto">
                  <a href="/">
                    <div className="card card-background card-background-mask-dark mt-lg-0 mt-5 h-100">
                      <div
                        className="full-background"
                        // style="background-image: url(&#39;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/umbrellas.jpg&#39;)"
                      ></div>
                      <div className="card-body pt-7 text-center">
                        <p className="text-uppercase font-weight-bold text-sm  opacity-6">
                          24x7 Support
                        </p>
                        <h3 className="">Check bugs and fix!</h3>
                        <p className=" opacity-8">
                          If you have the opportunity to play this game of life
                          you need to appreciate every moment. A lot of people
                          don’t appreciate the moment until it’s passed.
                        </p>
                        <button
                          type="button"
                          className="btn btn-warning btn-sm mt-3"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* row-4 team */}
            {/* <div className="m-lg-5 m-lg-5 mt-5 mb-5">
              <div className="row m-lg-5 p-lg-5 p-2 ">
                <div className="col-md-8 mx-auto text-center">
                  <h3 className="text-gradient text-warning display-4">
                    The Executive Team
                  </h3>
                </div>
              </div>
              <div className="row mt-5 mb-lg-5 m-5">
                <div className="col-lg col-6 mb-lg-0 mb-4 ">
                  <div className="card shadow-lg ">
                    <div className="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                      <a className="d-block blur-shadow-image" href="/">
                        <img
                          src="https://images.unsplash.com/photo-1536321115970-5dfa13356211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                          alt="img-blur-shadow"
                          className="img-fluid shadow border-radius-lg"
                        />
                      </a>
                    </div>
                    <div className="card-body text-center bg-white border-radius-lg p-3 pt-0">
                      <h5 className="mt-3 mb-1 d-md-block d-none">
                        Vivek Rathod
                      </h5>
                      <p className="mb-1 d-md-none d-block text-sm font-weight-bold text-darker">
                        Vivek Rathod
                      </p>
                      <p className="mb-0 text-xs font-weight-bolder text-warning text-gradient text-uppercase">
                        Frotend Developer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg col-6 mb-lg-0 mb-4">
                  <div className="card shadow-lg">
                    <div className="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                      <a className="d-block blur-shadow-image" href="/">
                        <img
                          src="https://images.unsplash.com/photo-1536321115970-5dfa13356211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                          alt="img-blur-shadow"
                          className="img-fluid shadow border-radius-lg"
                        />
                      </a>
                    </div>
                    <div className="card-body text-center bg-white border-radius-lg p-3 pt-0">
                      <h5 className="mt-3 mb-1 d-md-block d-none">
                        Manish Kumavat
                      </h5>
                      <p className="mb-1 d-md-none d-block text-sm font-weight-bold text-darker">
                        Manish Kumavat
                      </p>
                      <p className="mb-0 text-xs font-weight-bolder text-warning text-gradient text-uppercase">
                        Backend Developer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg col-6 mb-lg-0 mb-4">
                  <div className="card shadow-lg">
                    <div className="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                      <a className="d-block blur-shadow-image" href="/">
                        <img
                          src="https://images.unsplash.com/photo-1536321115970-5dfa13356211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                          alt="img-blur-shadow"
                          className="img-fluid shadow border-radius-lg"
                        />
                      </a>
                    </div>
                    <div className="card-body text-center bg-white border-radius-lg p-3 pt-0">
                      <h5 className="mt-3 mb-1 d-md-block d-none">
                        Kuldeep Rathod
                      </h5>
                      <p className="mb-1 d-md-none d-block text-sm font-weight-bold text-darker">
                        Kuldeep Rathod
                      </p>
                      <p className="mb-0 text-xs font-weight-bolder text-warning text-gradient text-uppercase">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div> */}

            {/* row-5 about*/}
            <div className="mt-lg-5 mb-lg-5 p-lg-5">
              <div className="row">
                <div className="col-lg-6 mx-auto text-center">
                  <h2 className="mb-3">Think about us</h2>
                  <p>
                    That’s the main thing people are controlled by! Thoughts -
                    their perception of themselves!{" "}
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-4 col-md-8">
                  <div className="card m-1">
                    <div className="card-body bg-golden">
                      <img
                        src={require("../imgs/footballavif.avif")}
                        alt="..."
                        className="avatar avatar-lg border-radius-lg object-fit-cover ratio shadow mt-n4"
                      />
                      <div className="author">
                        <div className="name">
                          <span>Mathew Glock</span>
                          <div className="stats">
                            <small>
                              <i className="far fa-clock"></i> 5 min read
                            </small>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4">
                        "If you have the opportunity to play this game of life
                        you need to appreciate every moment."
                      </p>
                      <div className="rating mt-3">
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-8 ms-md-auto">
                  <div className="card bg-gradient-primary m-1">
                    <div className="card-body bg-golden">
                      <img
                        src={require("../imgs/footballavif.avif")}
                        alt="..."
                        className="avatar avatar-lg border-radius-lg object-fit-cover ratio shadow mt-n4"
                      />
                      <div className="author align-items-center">
                        <div className="name">
                          <span className="">Mathew Glock</span>
                          <div className="stats">
                            <small className="">Posted on 28 February</small>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4">
                        "If you have the opportunity to play this game of life
                        you need to appreciate every moment."
                      </p>
                      <div className="rating mt-3">
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-8">
                  <div className="card m-1">
                    <div className="card-body bg-golden">
                      <img
                        src={require("../imgs/footballavif.avif")}
                        alt="..."
                        className="avatar avatar-lg border-radius-lg object-fit-cover ratio shadow mt-n4"
                      />
                      <div className="author">
                        <div className="name">
                          <span>Mathew Glock</span>
                          <div className="stats">
                            <small>
                              <i className="far fa-clock"></i> 5 min read
                            </small>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4">
                        "If you have the opportunity to play this game of life
                        you need to appreciate every moment."
                      </p>
                      <div className="rating mt-3">
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="horizontal dark my-5" />
              <div className="row justify-content-center text-center">
                <div className="col">
                  <FaInstagram className="fs-1 text-center" />
                </div>
                <div className="col">
                  <FaFacebook className="fs-1 text-center" />
                </div>
                <div className="col">
                  <FaTwitter className="fs-1 text-center" />
                </div>
                <div className="col">
                  <FaGithub className="fs-1 text-center" />
                </div>
                {/* <img
                    className="w-25 opacity-6 img-fluid m-1"
                    src={require("../imgs/facebook.png")}
                    alt="Logo"
                  />
                </div>
                <div className="col-lg-2 col-6 align-items-center ">
                  <img
                    className="w-25 opacity-6 img-fluid m-1"
                    src={require("../imgs/facebook.png")}
                    alt="Logo"
                  />
                </div>
                <div className="col-lg-2 col-6 align-items-center ">
                  <img
                    className="w-25 opacity-6 img-fluid m-1"
                    src={require("../imgs/facebook.png")}
                    alt="Logo"
                  />
                </div>
                <div className="col-lg-2 col-6 align-items-center ">
                  <img
                    className="w-25 opacity-6 img-fluid m-1"
                    src={require("../imgs/facebook.png")}
                    alt="Logo"
                  />
                </div>
                <div className="col-lg-2 col-6 align-items-center ">
                  <img
                    className="w-25 opacity-6 img-fluid m-1"
                    src={require("../imgs/facebook.png")}
                    alt="Logo"
                  /> */}
                {/* </div> */}
              </div>
            </div>

            {/* footer */}
            {/* <footer className="footer py-9 mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 mb-5 mb-lg-0">
                    <h6 className="text-uppercase mb-2">Play Ways</h6>
                    <p className="mb-4 pb-2">The next generation of Gaming.</p>
                    <a
                      href="/"
                      target="_blank"
                      className="text-secondary me-xl-4 me-3"
                    >
                      <span className="text-lg fab fa-facebook"></span>
                    </a>
                    <a
                      href="/"
                      target="_blank"
                      className="text-secondary me-xl-4 me-3"
                    >
                      <span className="text-lg fab fa-twitter"></span>
                    </a>
                    <a
                      href="/"
                      target="_blank"
                      className="text-secondary me-xl-4 me-3"
                    >
                      <span className="text-lg fab fa-instagram"></span>
                    </a>
                    <a
                      href="/"
                      target="_blank"
                      className="text-secondary me-xl-4 me-3"
                    >
                      <span className="text-lg fab fa-pinterest"></span>
                    </a>
                    <a
                      href="/"
                      target="_blank"
                      className="text-secondary me-xl-4 me-3"
                    >
                      <span className="text-lg fab fa-github"></span>
                    </a>
                  </div>
                  <div className="col-md-2 col-6 ms-lg-auto mb-md-0 mb-4">
                    <h6 className="text-sm">Company</h6>
                    <ul className="flex-column ms-n3 nav">
                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Careers
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Press
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-2 col-6 mb-md-0 mb-4">
                    <h6 className="text-sm">Pages</h6>
                    <ul className="flex-column ms-n3 nav">
                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Login
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Register
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Add list
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-2 col-6 mb-md-0 mb-4">
                    <h6 className="text-sm">Legal</h6>
                    <ul className="flex-column ms-n3 nav">
                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Terms
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Team
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Privacy
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-2 col-6 mb-md-0 mb-4">
                    <h6 className="text-sm">Resources</h6>
                    <ul className="flex-column ms-n3 nav">
                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Service
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Product
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link text-secondary"
                          href="/"
                          target="_blank"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr className="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1" />
                <div className="row">
                  <div className="col-8 mx-lg-auto text-lg-center">
                    <p className="text-sm text-secondary">
                      Copyright ©{" "}
                      <script>document.write(new Date().getFullYear())</script>{" "}
                      PlayWays Team.
                    </p>
                  </div>
                </div>
              </div>
            </footer> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
