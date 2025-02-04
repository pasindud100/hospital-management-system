import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PatientList from "./components/PatientList";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/patients" element={<PatientList />} />
    </Routes>
  </BrowserRouter>
);

export default App;
