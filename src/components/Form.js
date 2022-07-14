function Form({ orderer, setOrderer }) {
  const handleInputChange = (field, input) => {
    setOrderer({ ...orderer, [field]: input });
  };

  return (
    <div className="date">
      <h4>Name:</h4>
      <input onChange={(e) => handleInputChange("name", e.target.value)} />
      <h4>Email:</h4>
      <input onChange={(e) => handleInputChange("email", e.target.value)} />
      <h4>Phone:</h4>
      <input onChange={(e) => handleInputChange("phone", e.target.value)} />
      <h4>Address:</h4>
      <input onChange={(e) => handleInputChange("address", e.target.value)} />
    </div>
  );
}

export default Form;
