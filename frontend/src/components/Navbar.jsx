import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <div>
      <h1 className="text-xl font-bold">SVD Hospital</h1>
      </div>
      <div className="flex gap-6">
      <Link to="/patients" className="hover:text-gray-300">
        Patients
      </Link>
      <Link to="/doctors" className="hover:text-gray-300">
        Doctors
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
