import React from 'react';
import logo from '../../logo.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className=' header  d-flex justify-content-center align-items-center '>
            <img src ={logo} alt= "logo" className='logo'/>
            <h3 className='brand-name'>Jess-Fitness-Squad</h3>
            </div>
           
            
        </div>
    );
};

export default Header;