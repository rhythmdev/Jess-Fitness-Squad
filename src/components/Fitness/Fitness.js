import React from 'react';
// import './Fitness.css'

const Fitness = (props) => {
  const {name, img, details, age, time} = props.info;
    return (
        <div className='info'>
            <div className='card h-100'>
            <img src={img} className='card-img-top img-thumbnail'  alt=''/>
            <div className="card-body">
                <h4>{name}</h4>
            </div>
            </div>
       
        </div>
    );
};

export default Fitness;