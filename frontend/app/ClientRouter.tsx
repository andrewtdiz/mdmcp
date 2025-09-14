'use client'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Display from '../src/components/Display'

export default function ClientRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/*" element={<Display />} />
      </Routes>
    </Router>
  )
}