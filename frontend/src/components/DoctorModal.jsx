import { useState, useEffect } from "react";
import axios from "axios";

const DoctorModal = ({ closeModal, doctor }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [govermentHospital, setGovermentHospital] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (doctor) {
      setId(doctor.id);
      setName(doctor.name);
      setSpecialization(doctor.specialization);
      setGovermentHospital(doctor.govermentHospital);
      setPhone(doctor.phone);
      setAddress(doctor.address);
    } else {
      setId("");
      setName("");
      setSpecialization("");
      setGovermentHospital("");
      setPhone("");
      setAddress("");
    }
  }, [doctor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      id,
      name,
      specialization,
      govermentHospital,
      phone,
      address,
    };
    try {
      if (id) {
        await axios.put(`http://localhost:8080/doctor/update/${id}`, formData);
      } else {
        await axios.post("http://localhost:8080/doctor/add", formData);
      }
      closeModal();
    } catch (error) {
      console.error("Error saving doctor:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold">
          {doctor ? "Edit Doctor" : "Add New Doctor"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            placeholder="Specialization"
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={govermentHospital}
            onChange={(e) => setGovermentHospital(e.target.value)}
            placeholder="Government Hospital"
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
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

export default DoctorModal;