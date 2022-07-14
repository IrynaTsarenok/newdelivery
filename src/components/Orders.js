import { useEffect, useState } from "react";
import Order from "./Order";

function Orders({ orders }) {
  return (
    <div className="orders-container">
      {orders.map((o, i) => (
        <Order userInfo={o.user} foodList={o.foodList} orderNum={i + 1} />
      ))}
    </div>
  );
}

export default Orders;
