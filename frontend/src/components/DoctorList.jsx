import { useState, useEffect } from "react";
import axios from "axios";
import DoctorModal from "./DoctorModal";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const getAllDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:8080/doctor/all");
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors from server..", error);
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  const deleteDoctor = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/doctor/delete/${id}`);
      getAllDoctors();
    } catch (error) {
      console.error("Error deleting doctor from server..", error);
    }
  };

  const handleAddNewDoctor = () => {
    setSelectedDoctor(null);
    setShowModal(true);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Doctor List</h2>
        <button
          onClick={handleAddNewDoctor}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          + Create New Doctor
        </button>
      </div>

      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Specialization</th>
            <th className="p-2 border">Government Hospital</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Address</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id} className="border">
              <td className="p-2 border">{doctor.id}</td>
              <td className="p-2 border">{doctor.name}</td>
              <td className="p-2 border">{doctor.specialization}</td>
              <td className="p-2 border">{doctor.govermentHospital}</td>
              <td className="p-2 border">{doctor.phone}</td>
              <td className="p-2 border">{doctor.address}</td>
              <td>
                <button
                  onClick={() => {
                    setSelectedDoctor(doctor);
                    setShowModal(true);
                  }}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteDoctor(doctor.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <DoctorModal
          closeModal={() => {
            setShowModal(false);
            getAllDoctors();
          }}
          doctor={selectedDoctor}
        />
      )}
    </div>
  );
};

export default DoctorList;