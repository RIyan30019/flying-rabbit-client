import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  { createContext, useState ,useEffect} from 'react';
import { UserContext } from '../../App';
import './Order.css';

const Order = (props) => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    

    const {title,image,price,id}=props.product
    const handleOrder=()=>{
        const newOrder={...loggedInUser,id,title,price,image}
       
        fetch('https://gentle-spire-40515.herokuapp.com/orders', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', },
                body:JSON.stringify(newOrder)
        })
       
    
            


}
    return (
        <div className="placeOrder">
        <h1>Item Name : {title}</h1>
       <img src={image} alt=""/>
       <h3>Price :{price}</h3>
       
       <Link to='/orderCofirmed'>
                        <button onClick={handleOrder} className="main-button btn btn-info">Place Order</button>
                    </Link>
        </div>
    );
};

export default Order;
