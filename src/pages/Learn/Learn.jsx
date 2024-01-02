import React from "react";
import Navbar from "./src/components";
import { Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "/components/Home"

const Learn = () =>{
    return (
    <div className="learn">
    <Router>
      <Navbar>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/rent" element={<Rent/>}/>
          <Route path="/rentalrate" element={<RentalRate/>}/>
          <Route path="/share" element={<Share/>}/>
          <Route path="/learn" element={<Learn/>}/>
        </Routes>
      </Navbar>
    </Router>
        <div className="page-title">
        <h1>Learn more about us!</h1>
        </div>
    </div>
    )
}

export default Learn;