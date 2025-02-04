import { useState, useEffect } from "react";
import axios from "axios";
import PatientModal from "./PatientModal";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const getAllPatients = async () => {
    try {
      const response = await axios.get("http://localhost:8080/patient/all");
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching patients from server..", error);
    }
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  const deletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/patient/delete/${id}`);
      getAllPatients();
    } catch (error) {
      console.error("Error deleting patient from server..", error);
    }
  };

  const updatePatient = async (patientData) => {
    try {
      await axios.put(
        `http://localhost:8080/patient/update/${patientData.id}`,
        patientData
      );
      getAllPatients();
      setShowModal(false);
    } catch (error) {
      console.error("Error updating patient data..", error);
    }
  };

  const handleAddNewPatient = () => {
    setSelectedPatient(null);
    setShowModal(true);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Patient List</h2>
        <button
          onClick={handleAddNewPatient}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          + Create New Patient
        </button>
      </div>

      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">First Name</th>
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Diagnosis</th>
            <th className="p-2 border">Telephone</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="border">
              <td className="p-2 border">{patient.id}</td>
              <td className="p-2 border">{patient.fname}</td>
              <td className="p-2 border">{patient.gender}</td>
              <td className="p-2 border">{patient.age}</td>
              <td className="p-2 border">{patient.address}</td>
              <td className="p-2 border">{patient.currentDiagnosis}</td>
              <td className="p-2 border">{patient.telephone}</td>
              <td>
                <button
                  onClick={() => {
                    setSelectedPatient(patient);
                    setShowModal(true);
                  }}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePatient(patient.id)}
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
        <PatientModal
          closeModal={() => {
            setShowModal(false);
            getAllPatients();
          }}
          patient={selectedPatient}
        />
      )}
    </div>
  );
};

export default PatientList;
