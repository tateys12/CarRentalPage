import './App.css';
import { Navbar } from './components/Navbar';
import { Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Rent } from './pages/Rent/Rent';
import { RentalRate } from './pages/RentalRate/RentalRate';
import { Share } from './pages/Share/Share';
import { Learn } from './pages/Learn/Learn';

function App(){
  return(
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
  );
}

export default App;