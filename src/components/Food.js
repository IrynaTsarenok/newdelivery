import React, { useEffect, useState } from "react";
function Food({ basket, setBasket }) {
  const removeClick = (b) => {
    const newBasket = basket.filter((food) => food.id !== b.id);
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };
  return (
    <div className="shopFoodDiv">
      {basket.map((b) => (
        <div key={b.id} className="shopFood">
          <img src={b.img}></img>

          <h3>{b.name}</h3>

          <button
            onClick={() => {
              removeClick(b);
            }}
          >
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Food;
