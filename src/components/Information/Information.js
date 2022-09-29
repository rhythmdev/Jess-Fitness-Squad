import React, { useEffect, useState } from "react";
import Fitness from "../Fitness/Fitness";
import "./Information.css";

import InfoCart from "../InfoCart/InfoCart";

const Information = () => {
  const [informations, setInformations] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("informations.json")
      .then((res) => res.json())
      .then((data) => setInformations(data));
  }, []);

  const handelAddToCart = (info) => {
    const newItem = [...item, info];
    setItem(newItem);
  };

  return (
    <div className="row main">
      <div className="col-lg-8">
        <h4 className="my-5">Select Today's Fitness equipment</h4>
        <div className=" mx-4 mt-3">
          <div className="card-area row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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
          <InfoCart item={item}></InfoCart>
        </div>
      </div>
    </div>
  );
};

export default Information;
