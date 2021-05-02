import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#000000" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Mazba Turza
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ps-5">
            <li className="nav-item">
              <a className="nav-link active  me-3 fs-5 text-light" aria-current="page" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mazba-turza-1810aa155/">
                <FontAwesomeIcon className="icon active-icon fs-2" icon={faLinkedin} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active  me-3 fs-5 text-light" aria-current="page" target="_blank" rel="noreferrer" href="https://github.com/turza1994/">
                <FontAwesomeIcon className="icon active-icon fs-2" icon={faGithub} />
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active  me-3 fs-5 text-light" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active  me-3 fs-5 text-light" aria-current="page" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active  me-3 fs-5 text-light" aria-current="page" to="#">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active  me-3 fs-5 text-light" aria-current="page" to="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active  me-3 fs-5 text-light" aria-current="page" to="#">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;