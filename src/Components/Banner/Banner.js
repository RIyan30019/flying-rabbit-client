import React from 'react';
import img from '../Images/3255317.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <img src={img} className="headerImg" alt=""></img>
        </div>
    );
};

export default Banner;
