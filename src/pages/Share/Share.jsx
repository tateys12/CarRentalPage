import React from "react";
import Navbar from "../../components/Navbar";
import { Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Rent from "../Rent/Rent";
import RentalRate from "../RentalRate/RentalRate";
import Learn from "../Learn/Learn";

const Share = () =>{
    return (
    <div className="share">
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
        <h1>Share our page!</h1>
        </div>
    </div>
    )
}

export default Share;