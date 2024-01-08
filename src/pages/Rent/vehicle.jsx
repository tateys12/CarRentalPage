import React, { useState, useEffect } from 'react';
import './Vehicle.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleRentClick = () => {
    // Handle the logic for renting a vehicle
    // For example, redirect to the rental page
    navigate("/rentalrate");
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
      <button className="rent-vehicle-bttn" onClick={handleRentClick}>
        Check Rates
      </button>
    </div>
  );
};

export default Vehicle;