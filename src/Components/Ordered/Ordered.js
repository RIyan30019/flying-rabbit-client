import React from 'react';
import tick from '../../images/images.png'
import '../Ordered/Ordered.css';


const Ordered = () => {
    return (
        <div className="container">
            <div className="order">
                <h3>Your order has been confirmed</h3>
                <img src={tick} alt="" />
                <h1>Thank you for your order </h1>
            </div>
        </div>

    );
};

export default Ordered;
