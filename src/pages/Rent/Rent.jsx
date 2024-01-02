import React from "react";
import Navbar from "./src/components";

const Rent = () => {
    return(
        <div className="Rent">
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
        </div>
    )
}

export default Rent;