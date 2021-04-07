import React from 'react';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Order from '../Order/Order';


const PlaceOrder = () => {
    const {id} = useParams();
    console.log(id)
   
    const [product, setProduct] = useState({});
  
    
    useEffect(() => {
        fetch('https://gentle-spire-40515.herokuapp.com/products/'+id)
        .then(res => res.json())
        .then(data =>{ 
            
            setProduct(data)});
    }, [id])
    console.log(product)
    return (
       
      <div>
      <h1>place a order</h1>

            <Order product={product}></Order>
</div>
    );
};

export default PlaceOrder;
