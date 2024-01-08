import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { VEHICLES } from "../../vehicles";
import { Link } from "react-router-dom";
import './RentalRate.css'

const RentalRate = () => {
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [rentalDays, setRentalDays] = useState(1);

    const handleRentClick = (vehicle) =>{
        setSelectedVehicle(vehicle);
    };

    const handleCloseModal = () => {
        setSelectedVehicle(null);
      };

      const handleRentConfirm = () => {
        alert(`Rental confirmed for ${rentalDays} days. Total fee: $${(rentalDays * selectedVehicle.rentalRate).toFixed(2)}`);
        setSelectedVehicle(null);
      };

    return (
        <div className="rental-rate">
          <div className="page-title">
            <h1>Our Rental Rates</h1>
          </div>
          <div className="vehicle-list">
            {VEHICLES.map((vehicle) => (
              <div key={vehicle.id} className="vehicle-item">
                <img src={vehicle.vehicleImage} alt={vehicle.vehicleName} />
                <h2>{vehicle.vehicleName}</h2>
                <p>Rental Rate: ${vehicle.rentalRate.toFixed(2)}/day</p>
                {/* You can add more details about each vehicle here */}
                <button onClick={() => handleRentClick(vehicle)}>Rent Now</button>
              </div>
            ))}
          </div>
          {selectedVehicle && (
            <div className="modal-overlay">
              <div className="modal">
                <h2>Rent {selectedVehicle.vehicleName}</h2>
                <p>Enter the number of days:</p>
                <input
                  type="number"
                  value={rentalDays}
                  onChange={(e) => setRentalDays(e.target.value)}
                />
                <div className="modal-buttons">
                  <button onClick={handleRentConfirm}>Confirm</button>
                  <button onClick={handleCloseModal}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };

export default RentalRate;
