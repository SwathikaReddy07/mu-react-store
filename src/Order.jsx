import React from "react";
import { useContext } from "react";
import { AppContext } from "./App";
export default function Order() {
  const { orders, email } = useContext(AppContext);
  return (
    <div>
      <h2>My Orders</h2>
      {orders.map((order) => (
        order.email === email &&
        <div key={order.id}>{order.name}-{order.price}-{order.qty}-{order.qty*order.price}</div>
      ))}
    </div>
  );
}