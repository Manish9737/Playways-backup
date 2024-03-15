import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-dark ms-5" href="/">
            PlayWays
          </a>
          <button
            className="navbar-toggler me-3"
            type="button"
            onClick={() => setIsOpen(!isOpen)} 
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {isLoggedIn ? (
                <>
                  <li className="nav-item ">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contactUs">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/aboutUs">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/feedback">
                      Feedack
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-golden" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ">
                    <Link className="nav-link activeL" to="/signup">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
