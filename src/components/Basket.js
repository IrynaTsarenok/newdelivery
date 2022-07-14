import Food from "./Food";
function Basket({ basket, setBasket }) {
  return (
    <div>
      <Food basket={basket} setBasket={setBasket} />
    </div>
  );
}

export default Basket;
