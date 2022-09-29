import React, { useEffect, useState } from "react";
import Fitness from "../Fitness/Fitness";
import "./Information.css";
import avatar from "../../avatar.png";

const Information = () => {
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    fetch("informations.json")
      .then((res) => res.json())
      .then((data) => setInformations(data));
  }, []);

  const handelAddToCart = (info) => {
    console.log(info);
  };
  return (
    <div className="row main">
      <div className="col-lg-8">
        <h4 className="mt-4">Select Today's Fitness Track</h4>
        <div className=" mx-4 mt-3">
          <div className="card-area row row-cols-1 row-cols-md-3 g-4">
            {informations.map((info) => (
              <Fitness
                key={info.id}
                info={info}
                handelAddToCart={handelAddToCart}
              ></Fitness>
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="info-area shadow-lg">
          <div className="">
            <img src={avatar} alt="" className="img-fluid" />
            <h6>John Deo</h6>
          </div>
          <div className="d-flex justify-content-around align-items-center shadow-lg mx-5 common-bg mt-4">
            <div>
              <h6>60kg</h6>
              <p>Weight</p>
            </div>
            <div>
              <h6>5.8</h6>
              <p>Height</p>
            </div>
            <div>
              <h6>24yrs</h6>
              <p>Age</p>
            </div>
          </div>
          <div>
            <h6 className="my-5">Add A break</h6>
            <div className="d-flex justify-content-evenly">
              <button className="btn bg-white rounded-circle fw-semibold shadow-sm">
                10s
              </button>
              <button className="btn bg-white rounded-circle fw-semibold shadow-sm">
                20s
              </button>
              <button className="btn bg-white rounded-circle fw-semibold shadow-sm">
                30s
              </button>
              <button className="btn bg-white rounded-circle fw-semibold shadow-sm">
                40s
              </button>
            </div>
          </div>
          <div>
            <h6 className="my-5">Fitness Details</h6>
            <div className="d-flex justify-content-evenly align-items-center  shadow-lg mx-5 common-bg">
              <p className="fw-semibold">Exercise time: </p>
              <p className="fw-semibold">Minutes</p>
            </div>
            <div className="d-flex justify-content-evenly align-items-center  shadow-lg mx-5 common-bg mt-5">
              <p className="fw-semibold">Break time: </p>
              <p className="fw-semibold">Minutes</p>
            </div>
            <div>
              <button className="add-cart-btn mt-4">Activity Completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
