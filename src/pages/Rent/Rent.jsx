import React from "react";
import Navbar from "../../components/Navbar";
import { VEHICLES } from "../../vehicles";
import "./Rent.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import RentalRate from "../RentalRate/RentalRate";
import Share from "../Share/Share";
import Learn from "../Learn/Learn";
import Vehicle from "./vehicle"; // Assuming Vehicle is a component

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
          <h1>Browse Catalog</h1>
        </div>
        <div className="vehicles">
          {VEHICLES.map((vehicle) => (
            <Vehicle key={vehicle.id} data={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rent;
