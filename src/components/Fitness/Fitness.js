import React from "react";
import "./Fitness.css";

const Fitness = ({info, handelAddToCart}) => {
  const { name, img, details, age, time } = info;
 
  return (
    <div className="info">
      <div className="card h-100 border-0 shadow-lg">
        <img src={img} className="img-thumbnail" alt="" />
        <div className="card-body">
          <h4>{name}</h4>
          <p>{details}</p>
          <p className="fw-semibold">For Age: {age}</p>
          <p className="fw-semibold">Time required: {time}m</p>
        </div>
        <div className="card-footer">
          <button onClick={ ()=> handelAddToCart(info)} className="add-cart-btn">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
