import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Med from './pages/Med'; // Import your Med component
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className=''>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/medcopilot" element={<Med/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;