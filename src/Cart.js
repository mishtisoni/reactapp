import React, { useState, useEffect } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('cart'));
      if (Array.isArray(data)) {
        setCart(data); 
      } else {
        setCart([]); 
      }
    } catch (error) {
      console.error('Error loading cart data', error);
      setCart([]); 
    }
  }, []);
  

  const total = cart.reduce((sum, stuff) => sum + stuff.price, 0);

  return (
    <div>
      <h2 className='bag'>Shopping Bag</h2>
      <p className='total'>
        {cart.map((stuff, index) => (
          <p key={index}>{stuff.title} - Rs.{stuff.price}</p>
        )
        )}
      </p>
      <h3 className='price'>Total: Rs.{total}</h3>
    </div>
  );
}

export default Cart;