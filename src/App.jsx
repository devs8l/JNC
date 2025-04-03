import React, { useEffect } from 'react';
import Lenis from 'lenis'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Med from './pages/Med'; // Import your Med component
import Footer from './components/Footer';
import TallyForm from './components/TallyForm';
import Services from './pages/Services';

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
      duration:1.5
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      // console.log(e);
    });
  })
  return (
    <Router>
      <div className=''>
        <Navbar />
        {/* <TallyForm/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medcopilot" element={<Med />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;