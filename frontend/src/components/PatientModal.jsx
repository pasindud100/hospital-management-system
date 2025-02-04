import { useState, useEffect } from "react";
import axios from "axios";

const PatientModal = ({ closeModal, patient }) => {
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [currentDiagnosis, setCurrentDiagnosis] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    if (patient) {
      setId(patient.id);
      setFname(patient.fname);
      setGender(patient.gender);
      setAge(patient.age);
      setAddress(patient.address);
      setCurrentDiagnosis(patient.currentDiagnosis);
      setTelephone(patient.telephone);
    } else {
      setId("");
      setFname("");
      setGender("");
      setAge("");
      setAddress("");
      setCurrentDiagnosis("");
      setTelephone("");
    }
  }, [patient]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      id,
      fname,
      gender,
      age,
      address,
      currentDiagnosis,
      telephone,
    };
    try {
      if (id) {
        await axios.put(`http://localhost:8080/patient/update/${id}`, formData);
      } else {
        await axios.post("http://localhost:8080/patient/add", formData);
      }
      closeModal();
    } catch (error) {
      console.error("Error saving patient:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold">
          {patient ? "Edit Patient" : "Add New Patient"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="First Name"
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Gender"
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={currentDiagnosis}
            onChange={(e) => setCurrentDiagnosis(e.target.value)}
            placeholder="Current Diagnosis"
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Telephone"
            required
            className="border p-2 w-full mb-2"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientModal;
