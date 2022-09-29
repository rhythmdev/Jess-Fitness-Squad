import React from "react";
import avatar from "../../avatar.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const InfoCart = ({ item }) => {
  //toast message
  const showToastMessage = () => {
    toast.success("Successfully Completed!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
//end of toast message
  let time = 0;
  for (const info of item) {
    time = time + info.time;
  }
  return (
    <div>
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
            <button  className="btn bg-white rounded-circle fw-semibold shadow-sm">
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
            <p className="fw-semibold">Exercise time:</p>
            <p className="fw-semibold">{time} Minutes</p>
          </div>
          <div className="d-flex justify-content-evenly align-items-center  shadow-lg mx-5 common-bg mt-5">
            <p className="fw-semibold">Break time: </p>
            <p className="fw-semibold">Minutes</p>
          </div>
          <div>
            <button onClick={showToastMessage} className="add-cart-btn my-4">
              Activity Completed
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCart;
