import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PatientList from "./components/PatientList";
import DoctorList from "./components/DoctorList";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/patients" element={<PatientList />} />
      <Route path="/doctors" element={<DoctorList />} />
    </Routes>
  </BrowserRouter>
);

export default App;
