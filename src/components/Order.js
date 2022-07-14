function Order({ userInfo, foodList, orderNum }) {
  const { name, email, phone, address } = userInfo;
  return (
    <>
      <h3>Order #{orderNum}</h3>
      <div className="shoppingCarts">
        <div className="date">
          <h4>Name: {name}</h4>
          <h4>Email: {email}</h4>
          <h4>Phone: {phone}</h4>
          <h4>Address: {address}</h4>
        </div>

        <div className="shopFoodDiv">
          {foodList.map((food) => (
            <div className="shopFood">
              <img src={food.img} />
              <h3>{food.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Order;
