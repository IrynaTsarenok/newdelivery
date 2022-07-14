function Shop({ shopsData, setSelectedShop }) {
  return (
    <>
      <a
        onClick={() => {
          setSelectedShop(shopsData);
        }}
      >
        <div>
          <button className="ButtonShop">{shopsData.name}</button>
        </div>
      </a>
    </>
  );
}

export default Shop;
