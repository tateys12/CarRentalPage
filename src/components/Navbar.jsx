import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
            <div className="navbar">
            <div className="links">
                <Link to="/rent">Rent</Link>
                <Link to="/rentalrate">Rental Rate</Link>
                <Link to="/share">Share</Link>
                <Link to="/learn">Learn</Link>
            </div>
            </div>
        
    )
}

export default Navbar;