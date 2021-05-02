import React from "react";
import HeaderImg from '../../images/header-img.png';
import "../../App.css";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-6 pt-5">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center pt-5 mt-5">
                <p className="fs-4 text-secondary lh-1 text-center">
                Welcome to my world
                </p>
                <h1 className="display-5 lh-sm text-fat text-center">
                Hi, I'm Mazba Turza <br />
                <span className="text-red">Web Developer</span>
                </h1>
                <br/>
                <div>
                    <button className="btn rounded btn-outline-danger fw-bold fs-4 me-3 text-white border-white">Get Resume</button>
                    <Link to="about"><button className="btn rounded btn-outline-danger fw-bold fs-4 text-white border-white">About Me</button></Link>
                </div>
            </div>
          </div>
          <div className="col-sm-6">
              <div className="w-100 d-flex justify-content-center align-items-end">
                <img className="w-50 rounded-pill border-start border-danger border-5 img-fluid" src={HeaderImg} alt=""  />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
