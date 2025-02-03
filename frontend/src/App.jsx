import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Patients from './pages/Patients';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mx-auto mt-6">
          <Routes>
            <Route path="/" element={<Patients />} />
            <Route path="/patients" element={<Patients />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
