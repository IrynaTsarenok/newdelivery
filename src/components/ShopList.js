import Shop from "./Shop";
import { shops } from "../constants";

function ShopList({ setSelectedShop }) {
  return (
    <div className="shopListDiv">
      {shops.map((s) => (
        <Shop key={s.id} shopsData={s} setSelectedShop={setSelectedShop} />
      ))}
    </div>
  );
}

export default ShopList;
