import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UploadTransactions from "./pages/UploadTransactions";
import { CssBaseline, Container } from "@mui/material";
import Register from "./pages/Register";
import NavigationDrawer from "./components/NavigationDrawer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div style={styles.container}>
      <AuthProvider>
        <NavigationDrawer />
        <Container style={styles.mainContent}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<UploadTransactions />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Container>
      </AuthProvider>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  mainContent: {
    marginLeft: "250px", // Adjust based on drawer width
    padding: "20px",
    width: "100%",
  },
};

export default App;
