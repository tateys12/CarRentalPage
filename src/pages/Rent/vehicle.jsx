import React, { useState, useEffect } from 'react';

const Vehicle = (props) => {
  const { vehicleName, rentalRate, vehicleImage } = props.data;
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = () => {
    const updatedCartItems = [...cartItems, { vehicleName, rentalRate, vehicleImage }];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="product">
      <img src={vehicleImage} alt={vehicleName} />
      <div className="description">
        <p>
          <b>{vehicleName}</b>
        </p>
        <p>${rentalRate}</p>
      </div>
      <button className="addToCartBttn" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default Vehicle;