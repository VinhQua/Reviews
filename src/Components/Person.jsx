import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
const Person = ({
  id,
  name,
  job,
  image,
  text,
  handleNext,
  handlePrev,
  handleSurprise,
}) => {
  return (
    <div className="review">
      <div className="img-container">
        <img className="person-img img" src={image} alt={name} />{" "}
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h4 className="author">{name}</h4>
      <h5 className="job">{job}</h5>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button type="button" onClick={handlePrev} className="prev-btn">
          <FcPrevious />
        </button>
        <button type="button" onClick={handleNext} className="next-btn">
          <FcNext />
        </button>
      </div>
      <button className="btn" onClick={handleSurprise}>
        surprise me
      </button>
    </div>
  );
};

export default Person;
