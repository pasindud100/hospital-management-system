import { useState } from "react";
import axios from "axios";

const PatientModal = ({ closeModal, patient })=>{
  const [formData, setFormData] = useState({
    fname: patient?.fname || "",
    gender: patient?.gender || "",
    age: patient?.age || "",
    address: patient?.address || "",
    currentDiagnosis: patient?.currentDiagnosis || "",
    telephone: patient?.telephone || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8080/patient/add", formData);
      closeModal();
    }catch(error){
      console.error("Error saving patient:", error);
    }
  };

  return(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold">
          {patient ? "Edit Patient" : "Add New Patient"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-2 w-full mb-2"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="border p-2 w-full mb-2"
            min="0"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            name="currentDiagnosis"
            value={formData.currentDiagnosis}
            onChange={handleChange}
            placeholder="Current Diagnosis"
            className="border p-2 w-full mb-2"
          />
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Telephone"
            className="border p-2 w-full mb-2"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
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
