import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import config from "../config";
import ToastMessage from "../components/ToastMessage";
import validator from "validator";

/**
 * Register component to register a new user.
 * @returns The Register component
 */
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent) => {
    // Handle form submission
    event.preventDefault(); // Prevent form from refreshing the page

    if (!validator.isEmail(email)) {
      // Validate email
      setMessage("Please enter a valid email.");
      return;
    }

    if (password.length < 8) {
      // Validate password
      setMessage("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true); // Set loading state to true
    try {
      await axios.post(`${config.apiUrl}/auth/register`, {
        // Make a POST request to the register endpoint
        username,
        email,
        password,
      });
      setMessage("Registration successful! Click OK to go to login."); // Set success message
    } catch (error: any) {
      // Handle errors
      const errorMessage = error.response?.data || "Something went wrong!";
      setMessage(errorMessage);
      console.error("🚀 ~ Register Failed:", errorMessage);
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  const handleCancel = () => {
    // Handle cancel button click
    navigate("/login");
  };

  return (
    // Render the Register component
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {/* Register form */}
      <Paper
        elevation={6}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 3,
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "primary.main",
            width: 64,
            height: 64,
          }}
        >
          <PersonAddIcon sx={{ fontSize: 36 }} />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleRegister}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update the username state
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update the email state
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update the password state
          />
          {/* Register and Cancel buttons */}
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={6}>
              <Button
                type="button"
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={handleCancel}
                disabled={loading}
                sx={{ fontWeight: "bold", fontSize: "1rem", py: 1 }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  py: 1,
                }}
              >
                {loading ? "Registering..." : "Register"}
              </Button>
            </Grid>
          </Grid>
        </Box>
        {/* Display toast message */}
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
      </Paper>
    </Container>
  );
}

export default Register;
