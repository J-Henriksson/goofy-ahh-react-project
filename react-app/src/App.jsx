import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PracticeMode from './pages/PracticeMode';
import ViewPastTests from './pages/ViewPastTests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<PracticeMode />} />
        <Route path="/past-tests" element={<ViewPastTests />} />
      </Routes>
    </Router>
  );
}

export default App;
