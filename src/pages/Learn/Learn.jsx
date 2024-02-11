import React from "react";
import Navbar from "../../components/Navbar";
import { Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Rent from "../Rent/Rent";
import RentalRate from "../RentalRate/RentalRate";
import Share from "../Share/Share";
import "./Learn.css";

const Learn = () =>{
    return (
    <div className="learn">
        <div className="page-title">
        <h1>Learn more about us!</h1>
        </div>

        <div className="about-us">
            <p>At car rental for you, 
          we take pride in providing an extensive fleet of well-maintained vehicles to suit your travel needs. Whether you're planning a weekend getaway, 
          a business trip, or an extended vacation, our diverse range of cars ensures you find the perfect vehicle for your journey.
          With a user-friendly online platform, you can effortlessly browse through our catalog, featuring a variety of makes and models. 
          Our commitment to transparency means no hidden fees, making the rental process straightforward and stress-free. Our vehicles come 
          equipped with modern amenities, ensuring a comfortable and enjoyable driving experience.
          At Car Rental for you, we understand the value of your time and budget. That's why we offer competitive rental rates and flexible 
          booking options. Our customer-centric approach extends to exceptional customer service, ensuring your satisfaction at every step.
          Experience the freedom of the open road with Car Rental for you. Your journey begins here!</p>
        </div>
    </div>
    )
}

export default Learn;