import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Features from './pages/Features';
import Training from './pages/Training';
import ReliabilityConditionMonitoring from './pages/ReliabilityConditionMonitoring';
import RailwayTrackInspection from './pages/RailwayTrackInspection';
import PowerLineInspection from './pages/PowerLineInspection';
import SolarPanelInspection from './pages/SolarPanelInspection';
import WaterLineInspection from './pages/WaterLineInspection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/training" element={<Training />} />
        <Route path="/services/reliability-condition-monitoring" element={<ReliabilityConditionMonitoring />} />
        <Route path="/services/railway-track-inspection" element={<RailwayTrackInspection />} />
        <Route path="/services/power-line-inspection" element={<PowerLineInspection />} />
        <Route path="/services/solar-panel-inspection" element={<SolarPanelInspection />} />
        <Route path="/services/water-line-inspection" element={<WaterLineInspection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
