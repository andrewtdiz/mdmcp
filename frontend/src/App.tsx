"use client";

import "./index.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Display from "./Display";

export function App() {
  return (
    <Router>
      <div className="mx-auto h-full w-full flex flex-col text-center relative z-10">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/*" element={<Display />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
