import React, { useEffect, useState } from 'react';
import Fitness from '../Fitness/Fitness';

const Information = () => {
    const [informations, setInformations] = useState([]);

    useEffect( ()=>{
        fetch('informations.json')
        .then(res=> res.json())
        .then(data=> setInformations(data))
    }, [])
    return (
        <div className='row'>
            <div className="col-lg-8">
            <h4>Select Today's Fitness Track</h4>
            <div className="card-area row row-cols-1 row-cols-md-3 g-4">
                
                         
                 
                   
                {
                   informations.map(info=> <Fitness key ={info.id} info ={info}></Fitness>)
                }
               </div>
            </div>
            <div className="col-lg-4">
            <div className="info-area ">
             <h2>Info area</h2>
            </div>
            </div>
            
        </div>
    );
};

export default Information;