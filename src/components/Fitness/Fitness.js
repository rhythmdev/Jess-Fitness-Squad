import React from "react";
import "./Fitness.css";

const Fitness = (props) => {
  const { name, img, details, age, time } = props.info;
  return (
    <div className="info">
      <div className="card h-100 border-none shadow-sm">
        <img src={img} className="card-img-top img-thumbnail" alt="" />
        <div className="card-body">
          <h4>{name}</h4>
          <p>{details}</p>
          <p className="fw-semibold">For Age: {age}</p>
          <p className="fw-semibold">Time required: {time}m</p>
        </div>
        <div className="card-footer">
          <button className="add-cart-btn">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
