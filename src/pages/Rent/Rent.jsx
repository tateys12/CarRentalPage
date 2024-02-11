import React from "react";
import Navbar from "../../components/Navbar";
import { VEHICLES } from "../../vehicles";
import "./Rent.css";
import { useNavigate } from "react-router-dom";

const Rent = () => {
  const navigate = useNavigate();

  const handleRentClick = () => {
    // Handle the logic for renting a vehicle
    // For example, redirect to the rental page
    navigate("/rentalrate");
  };

  return (
    <div className="Rent">
      <div className="shop">
        <div className="shoptitle">
          <h1>Browse our Catalog</h1>
        </div>

        <div className="information">
          <h1>Value-Driven Vehicle Rental Services</h1>
        </div>

        <div className="about">
          <h1>Welcome to Car rental for you!</h1>
          <p>Welcome to our premier car rental service, where convenience meets affordability!</p>
        </div>

        <div className="vehicles">
          {VEHICLES.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-item">
              <img src={vehicle.vehicleImage} alt={vehicle.vehicleName} />
              <h2>{vehicle.vehicleName}</h2>
              <button onClick={handleRentClick}>Check Rates</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rent;
