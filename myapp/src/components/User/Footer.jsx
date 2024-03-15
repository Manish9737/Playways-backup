import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer py-9 mt-5">
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
                <span className="text-lg ">
                  <FaFacebook />
                </span>
              </a>
              <a
                href="/"
                target="_blank"
                className="text-secondary me-xl-4 me-3"
              >
                <span className="text-lg">
                  <FaTwitter />
                </span>
              </a>
              <a
                href="/"
                target="_blank"
                className="text-secondary me-xl-4 me-3"
              >
                <span className="text-lg">
                  <FaInstagram />
                </span>
              </a>
              <a
                href="/"
                target="_blank"
                className="text-secondary me-xl-4 me-3"
              >
                <span className="text-lg">
                  <FaGithub />
                </span>
              </a>
            </div>
            <div className="col-md-2 col-6 ms-lg-auto mb-md-0 mb-4">
              <h6 className="text-sm">Company</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/aboutUs"}
                    target="_blank"
                  >
                    About Us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/"}
                    target="_blank"
                  >
                    Careers
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/contactUs"}
                    target="_blank"
                  >
                    Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/"}
                    target="_blank"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm">Legal</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/T&C"}
                    target="_blank"
                  >
                    Terms
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/FAQs"}
                    target="_blank"
                  >
                    FAQS
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/aboutUs"}
                    target="_blank"
                  >
                    Team
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/FAQs"}
                    target="_blank"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm">Resources</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/"}
                    target="_blank"
                  >
                    Blog
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/"}
                    target="_blank"
                  >
                    Service
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/"}
                    target="_blank"
                  >
                    Games
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to={"/"}
                    target="_blank"
                  >
                    Pricing
                  </Link>
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
      </footer>
    </>
  );
};

export default Footer;
