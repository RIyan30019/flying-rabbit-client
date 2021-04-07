import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from '../Data/data1.json'
import { useForm } from "react-hook-form";

const Admin = () => {

  const [products, setProducts] = useState([]);
  const [id, setId] = useState()
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null)
  // const url = ('http://localhost:5000/delete/' + id)
 
 
  const handleDelete = (id,e) => {
    fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                  e.target.parentNode.remove()
                }
            })
    console.log(e.target.parentNode);
   
  }




  const onSubmit = data => {
    console.log(data)
    const eventData = {
      title: data.name,
      image: imageURL,
      price: data.price
    }
    const url = `http://localhost:5000/addProduct`;

    if (imageURL) {
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
      })
        .then(res => console.log('server side response', res))

    };
  }
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))

  }, [])
  console.log(data[1])
  // const handleAddProduct = () => {

  //     fetch('http://localhost:5000/addProduct', {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(data)
  //     })
  // }
  const handleImageUpload = event => {

    const imageData = new FormData()
    imageData.set('key', 'fbd1416d438c89d23bee863f150962a0')
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log(products);
  return (
    <div>
      <h1>Add Your Products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input name="name" defaultValue="Enter Product Title" ref={register} />
        <input name="price" ref={register({ required: true })} />
        <input name="key" ref={register({ required: true })} />


        <input name="exampleRequired" type='file' onChange={handleImageUpload} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
      
      <h1>Manage Product</h1>

      {
        products.map(pd => <li> {pd.title} {pd.price} $  <button className="btn btn-danger"onClick={
          (e) => handleDelete(pd._id,e)}>Delete</button></li>)
      }

    </div>
  );
};

export default Admin;
