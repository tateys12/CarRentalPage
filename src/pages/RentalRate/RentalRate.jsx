import React from "react";
import Navbar from "../../components/Navbar";
import { Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Rent from "../Rent/Rent";
import Share from "../Share/Share";
import Learn from "../Learn/Learn";

const RentalRate = () =>{
    return (
    <div className="rental-rate">
    <Router>
      <Navbar>
        <Routes>
          <Route path="/rent" element={<Rent/>}/>
          <Route path="/rentalrate" element={<RentalRate/>}/>
          <Route path="/share" element={<Share/>}/>
          <Route path="/learn" element={<Learn/>}/>
        </Routes>
      </Navbar>
    </Router>
        <div className="page-title">
        <h1>Rental Rate</h1>
        </div>
    </div>
    )
}

export default RentalRate;