import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post(`${config.apiUrl}/auth/login`, {
        username,
        password,
      });
      // Handle successful login
      console.log("🚀 ~ handleLogin ~ Login Successful");
      login(); // Set the user as authenticated
      navigate("/dashboard"); // Navigate to dashboard on success
    } catch (error: any) {
      const errorMessage = error.response?.data || "Something went wrong!";
      console.error("🚀 ~ Login Failed:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Logging In..." : "Login"}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={handleRegisterRedirect}
        style={{ marginTop: "10px" }}
        disabled={loading}
      >
        Register
      </Button>
    </Container>
  );
}

export default Login;
