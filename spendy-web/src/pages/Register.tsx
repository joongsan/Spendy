import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import config from "../config";
import ToastMessage from "../components/ToastMessage";
import { useNavigate } from "react-router-dom";
import validator from "validator";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validator.isEmail(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${config.apiUrl}/auth/register`, {
        username,
        email,
        password,
      });
      setMessage("Registration successful! Click OK to go to login.");
    } catch (error: any) {
      const errorMessage = error.response?.data || "Something went wrong!";
      setMessage(errorMessage);
      console.error("🚀 ~ Register Failed:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleRegister}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>
      {message && (
        <ToastMessage
          message={message}
          severity={message.includes("successful") ? "success" : "error"}
          onClose={() => {
            setMessage("");
            if (
              message === "Registration successful! Click OK to go to login."
            ) {
              navigate("/login");
            }
          }}
        />
      )}
    </Container>
  );
}

export default Register;
