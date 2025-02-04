import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">SVD Hospital</h1>
      <Link to="/patients" className="hover:text-gray-300">
        Patients
      </Link>
    </nav>
  );
};

export default Navbar;
