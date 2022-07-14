import ShopPage from "./components/ShopPage";
import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import ShopingCarts from "./components/ShopingCarts";
import Orders from "./components/Orders";

import "./App.css";

function App() {
  const [selectedPage, setSelectedPage] = useState(1);
  const [basket, setBasket] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let restoredBasket = JSON.parse(localStorage.getItem("basket"));
    if (restoredBasket) {
      setBasket(restoredBasket);
    }

    let restoredOrders = JSON.parse(localStorage.getItem("orders"));
    if (restoredOrders) {
      setOrders(restoredOrders);
    }
  }, []);
  const handleFoodAddClick = (food) => {
    const newId = v4();
    const newbasket = [...basket, { ...food, id: newId }];

    setBasket(newbasket);
    localStorage.setItem("basket", JSON.stringify(newbasket));
  };

  return (
    <div className="app">
      <button
        className="buttonMenu"
        onClick={() => {
          setSelectedPage(1);
        }}
      >
        Shop
      </button>
      <button
        className="buttonMenu"
        onClick={() => {
          setSelectedPage(2);
        }}
      >
        Shopping Cart
      </button>
      <button
        className="buttonMenu"
        onClick={() => {
          setSelectedPage(3);
        }}
      >
        Orders
      </button>

      <div>
        {selectedPage === 1 && (
          <ShopPage handleFoodAddClick={handleFoodAddClick} />
        )}
        {selectedPage === 2 && (
          <ShopingCarts
            basket={basket}
            setBasket={setBasket}
            orders={orders}
            setOrders={setOrders}
          />
        )}
        {selectedPage === 3 && <Orders orders={orders} />}
      </div>
    </div>
  );
}

export default App;
