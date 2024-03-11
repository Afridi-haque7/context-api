import React, { useContext } from 'react'
import {CartContext} from "../context/Cart";

const Cart = () => {
    const cart = useContext(CartContext);
    console.log(cart.items);
    const total = cart.items.reduce((a,b) => a + b.price, 0,);
  return (
    <div className="cart">
    <h1>Cart</h1>
      {
        cart && cart.items.map(item => (
            <li>{item.name} - ${item.price}</li>
      ))}

      <h4>Total Bill: ${total}</h4>
    </div>
  )
};

export default Cart;
