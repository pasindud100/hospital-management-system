import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        SVD Hospital
      </div>
      <div>
        <Link to="/patients" className="text-gray-700 hover:text-blue-600 px-4">
          Patients
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
