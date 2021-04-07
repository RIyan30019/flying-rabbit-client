import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";


const Product = (props) => {
    const { title, id, price, description, image } = props.product

    return (

        <div className='col-md-4 mb-3 '>
            
                <div className="card h-100">
                    <img src={image} className='w-50 text-center mx-auto' alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Price:{price}$</p>
                        <Link to={`/products/${id}`}>
                            <button className="main-button btn btn-info">Review Order</button>
                        </Link>
                    </div>
                </div>
           
        </div>




    );
};

export default Product;
