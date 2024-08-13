import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product', error);
      });
  }, []);

  const add = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let prod = cart.find(item => item.id === product.id);
  
    if (prod) {
      prod.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart)); 
  };
  

  return (
    <div>
      <div className='product'>
        {product.map(product => (
          <div className='productlist' key={product.id}> 
            <h1>{product.title}</h1>
            <div className='image'><img src={product.image} /></div>
            <p>Rs.{product.price}</p>
            <button onClick={() => add(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
