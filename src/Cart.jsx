import React from "react";
import { AppContext } from "./App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const Navigate = useNavigate();
  const { cart, setCart, email, orders, setOrders } = useContext(AppContext);
  const increment = () => {
    setCart({ ...cart, qty: cart.qty + 1 });
  };

  const decrement = () => {
    cart.qty > 0 && setCart({ ...cart, qty: cart.qty - 1 });
  };

  const handleLogin = () => {
    Navigate("/login");
  };

  const placeOrder = () => {
    setOrders([...orders, cart]);
    setCart({});
    Navigate("/order");
  };
  return (
    <div>
      <h2>My Cart</h2>
      {Object.keys(cart).length > 0 ? (
        <>
          <h3>{cart.name}</h3>
          <p>{cart.desc}</p>
          <h3>Price:{cart.price}</h3>
          <p>
            <button onClick={decrement}>-</button>
            {cart.qty}
            <button onClick={increment}>+</button>
          </p>
          <hr />
          <h2>Order Value:{cart.price * cart.qty}</h2>
          <hr />
          <p>
            {email ? (
              <button onClick={placeOrder}>Place Order</button>
            ) : (
              <button onClick={handleLogin}>Login to Order</button>
            )}
          </p>
        </>
      ) : (
        <h3>Your cart is empty</h3>
      )}
    </div>
  );
}