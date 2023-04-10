import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route index element={<AdminDashboard />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </Router></>
  );
}

export default App;
