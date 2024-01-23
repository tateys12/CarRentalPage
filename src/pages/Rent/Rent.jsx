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
          <p>Welcome to our premier car rental service, where convenience meets affordability! At car rental for you, 
          we take pride in providing an extensive fleet of well-maintained vehicles to suit your travel needs. Whether you're planning a weekend getaway, 
          a business trip, or an extended vacation, our diverse range of cars ensures you find the perfect vehicle for your journey.
          With a user-friendly online platform, you can effortlessly browse through our catalog, featuring a variety of makes and models. 
          Our commitment to transparency means no hidden fees, making the rental process straightforward and stress-free. Our vehicles come 
          equipped with modern amenities, ensuring a comfortable and enjoyable driving experience.
          At Car Rental for you, we understand the value of your time and budget. That's why we offer competitive rental rates and flexible 
          booking options. Our customer-centric approach extends to exceptional customer service, ensuring your satisfaction at every step.
          Experience the freedom of the open road with Car Rental for you. Your journey begins here!</p>
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
