import React, { useState, useEffect } from 'react';
import './cart.css';
import { getCart, removeFromCart } from '../data/cartData';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    setCart(getCart());
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <span>{product.name}</span>
              <span>${product.price}</span>
              <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;