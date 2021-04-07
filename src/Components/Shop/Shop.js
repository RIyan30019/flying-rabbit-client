import React from 'react';

import { useState, useEffect } from 'react';
import Admin from '../Admin/Admin';
import { useContext } from 'react';
import { UserContext } from '../../App';

import Header from '../Header/Header';
import Product from "../Product/Product"
import Banner from '../Banner/Banner';
import { Spinner } from 'react-bootstrap';


const Shop = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://gentle-spire-40515.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (

        <div className="container">
            {
                products.length === 0 && 
                <Spinner animation="border" variant="info" className="justify-content-center"/>
            }

            <Banner></Banner>
            <div className="row">
                {products.map(pd => <Product
                    key={pd._id}

                    product={pd}
                ></Product>)
                }
            </div>




        </div>
    );
};

export default Shop;
