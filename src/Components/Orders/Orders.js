import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css';
const Orders = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://gentle-spire-40515.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])
    console.log(order)
    return (
        <div className="orderDetails">
            <h3 id="name">Hi {loggedInUser.name}</h3>
            <h3 id="order">You have: {order.length} Orders</h3>
         
            {
                order.map(Ordered => <div className="orderList"> 
                {Ordered.title}  ${Ordered.price}  <img src={Ordered.image} alt='' /> </div>)
            }

        </div>
    );
};

export default Orders;