import { useEffect, useState } from "react";
import axios from "axios";

const PatientList = () => {
  const [patients, setPatients] = useState([]);//this for storing patients data when fetch

  useEffect(() => {
    axios.get("http://localhost:8080/patient/all")// call the api to get all patients from BE
      .then(response => setPatients(response.data)) //successfull responses with data
      .catch(error => console.error("Error fetching patients:", error));
  }, []);

  return (
    <div className="p-4"> //
      <h2 className="text-2xl font-bold">Patient Details</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">First Name</th>
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Diagnosis</th>
            <th className="p-2 border">Telephone</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;


