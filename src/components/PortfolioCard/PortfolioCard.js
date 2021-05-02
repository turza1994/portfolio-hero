import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioCard.css";

const PortfolioCard = ({ portfolio }) => {
  const { id, name, category, details, thumbImage, liveLink } = portfolio;
  return (
    <div className="col-8 col-sm-4 d-flex justify-content-center align-items-center">
      <div className="card w-100 d-flex flex-column justify-content-center align-items-center p-3">
        <img
          className="img-fluid border border-danger border-2 rounded"
          src={thumbImage}
          alt=""
        />
        <h3>{name}</h3>
        <p className="text-light fw-bold text-center lead">{category}</p>
        <p className="text-secondary text-center lead">{details}</p>
        <div className="">
          <a href={liveLink} aria-current="page" target="_blank" rel="noreferrer" >
            <button className="btn btn-outline-danger text-white fw-bold me-3">
              See Live
            </button>
          </a>
          <Link
            to={`/porjectDetails/${id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn btn-outline-danger text-white fw-bold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
