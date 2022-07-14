import Form from "./Form";
import Basket from "./Basket";
import { useEffect, useState } from "react";

function ShopingCarts({ basket, setBasket, orders, setOrders }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderer, setOrderer] = useState({});

  useEffect(() => {
    let newPrice = 0;
    for (let i = 0; i < basket.length; i++) {
      const foodElement = basket[i];
      newPrice += foodElement.price;
    }
    setTotalPrice(newPrice);
  }, [basket]);

  const handlePurchaseClick = () => {
    if (basket.length < 1 || Object.keys(orderer) < 1) {
      return;
    }

    const newOrder = { user: orderer, foodList: basket };
    const newOrders = [...orders, newOrder];

    setOrders(newOrders);
    localStorage.setItem("orders", JSON.stringify(newOrders));

    setBasket([]);
    localStorage.removeItem("basket", JSON.stringify([]));
  };

  return (
    <div>
      <div className="shoppingCarts">
        <Form orderer={orderer} setOrderer={setOrderer} />
        <Basket basket={basket} setBasket={setBasket} />
      </div>
      <div>
        <div className="totalPrice">
          <h2>Total price: {totalPrice}</h2>
          <button className="buttonFood" onClick={handlePurchaseClick}>
            buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopingCarts;
