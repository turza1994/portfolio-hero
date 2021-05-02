import React from "react";
import AboutImg from "../../images/about-img.jpg";
import "../../App.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about py-5" id="about" style={{ background: "#191919" }} >
      <div className="container py-5" >
        <div className="row">
          <div className="col-8 col-sm-4">
            <div className="w-100">
              <img
                className="w-100 rounded-pill border-start border-end border-danger border-4 img-fluid ms-auto"
                src={AboutImg}
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="d-flex flex-column justify-content-center">
              <h2 className="display-5 fw-bolder">About Me</h2>
              <p className="fs-5 text-secondary lead lh-base pt-4">
                Have an incredible design that needs to be transformed into a
                website? Or you have only an idea and need a website
                immediately? Want some cool featured added to your site but
                don’t know where to begin? I’d love to help! <br /><br/> I am Mazba
                Turza from Bangladesh. I have finished my graduation from
                American International University - Bangladesh on Computer
                Science & Software Engineering and I have taken many lessons on
                modern web designing from this famous institution. My education
                background allowed me to thrive in this career and my trainings
                on this have made me a master of this section.
              </p>
              <br/>
              <div>
                <button className="btn rounded btn-outline-danger fw-bold fs-4 me-3 text-white">Get Resume</button>
                <Link to="portfolio"><button className="btn rounded btn-outline-danger fw-bold fs-4 text-white">My Projects</button></Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
