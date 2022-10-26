import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import profile from "../Assets/profile_icon.png";

const NavBar = () => {
  const [user, setUser] = useState([]);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img src={logo} alt="Logo" width="50" height="50" className="" />
          <h3 className="mx-3 fw-bold">Web Learning</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" className="nav-link">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link">
                  FAQ
                </Link>
              </li>
            </ul>
            <>
              {user?.photoUrl ? (
                <img src={profile} alt="" width="50" height="50" className="rounded-circle" />
              ) : (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link" aria-current="page">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" aria-current="page">
                      Log In
                    </Link>
                  </li>
                </ul>
              )}
            </>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
