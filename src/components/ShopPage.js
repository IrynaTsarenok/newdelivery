import { useState } from "react";
import ShopsFood from "./ShopsFood";
import ShopList from "./ShopList";

function ShopPage({ handleFoodAddClick }) {
  const [selectedShop, setSelectedShop] = useState(null);

  return (
    <div className="shopPage">
      <ShopList setSelectedShop={setSelectedShop} />
      <ShopsFood
        selectedShop={selectedShop}
        handleFoodAddClick={handleFoodAddClick}
      />
    </div>
  );
}

export default ShopPage;
