import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PracticeMode from './pages/PracticeMode';
import ViewPastTests from './pages/ViewPastTests';
import AboutUs from './pages/AboutUs';
import AllmantProv from './pages/AllmantProv';
import './index.css'; // Global styles

function App() {
  return (
    <Router>
      <Navbar />
      {/* Content container with top padding so that pages appear below the fixed navbar */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<PracticeMode />} />
          <Route path="/practice/:subject/:year" element={<PracticeMode />} />
          <Route path="/past-tests" element={<ViewPastTests />} />
          <Route path="/allmant-prov" element={<AllmantProv />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
