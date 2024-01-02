import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rent from './pages/Rent/Rent';
import RentalRate from './pages/RentalRate/RentalRate';
import Share from './pages/Share/Share';
import Learn from './pages/Learn/Learn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rent />} />
        <Route path="/rentalrate" element={<RentalRate />} />
        <Route path="/share" element={<Share />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  );
}

export default App;