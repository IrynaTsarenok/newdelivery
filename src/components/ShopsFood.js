import { food } from "../constants";

function ShopsFood({ selectedShop, handleFoodAddClick }) {
  if (!selectedShop) {
    return null;
  }

  const foodFilterd = food.filter((f) => f.shopId === selectedShop.id);

  return (
    <div className="shopFoodDiv">
      {foodFilterd.map((f) => (
        <div className="shopFood">
          <img src={f.img}></img>

          <h3>{f.name}</h3>

          <button
            onClick={() => {
              handleFoodAddClick(f);
            }}
            className="buttonFood"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShopsFood;
