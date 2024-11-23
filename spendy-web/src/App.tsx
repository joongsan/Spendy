import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UploadTransactions from "./pages/UploadTransactions";
import { CssBaseline, Container } from "@mui/material";
import Register from "./pages/Register";

function App() {
  return (
    <Container>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadTransactions />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Container>
  );
}

export default App;
