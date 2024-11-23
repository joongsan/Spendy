import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PatternIcon from "@mui/icons-material/Pattern";
import axios from "axios";
import config from "../config";

/**
 * Login component to authenticate the user.
 * @returns The Login component
 */
function Login() {
  const [username, setUsername] = useState(""); // Track the username input
  const [password, setPassword] = useState(""); // Track the password input
  const [loading, setLoading] = useState(false); // Track the loading state
  const { login } = useAuth(); // Access the login function from the AuthContext
  const navigate = useNavigate(); // Get the navigate function from the router

  const handleLogin = async (event: React.FormEvent) => {
    // Handle form submission
    event.preventDefault(); // Prevent form from refreshing the page
    setLoading(true); // Set loading state to true
    try {
      const response = await axios.post(`${config.apiUrl}/auth/login`, {
        username,
        password,
      }); // Make a POST request to the login endpoint

      // Destructure the username and email from the response data
      const { username: userName, email } = response.data;

      console.log("🚀 ~ handleLogin ~ Login Successful");
      login({ username: userName, email }); // Update auth state with user details
      navigate("/dashboard"); // Navigate to the dashboard
    } catch (error: any) {
      // Handle errors
      const errorMessage = error.response?.data || "Something went wrong!"; // Get the error message from the response data
      console.error("🚀 ~ Login Failed:", errorMessage);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleRegisterRedirect = () => {
    // Redirect to the register page
    navigate("/register");
  };

  return (
    // Render the login form
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 20px",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "secondary.main",
            width: "10vw",
            height: "10vw",
            maxWidth: 56,
            maxHeight: 56,
          }}
        >
          <PatternIcon
            sx={{ width: "7vw", height: "7vw", maxWidth: 40, maxHeight: 40 }}
          />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
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
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update the username state
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update the password state
          />
          <Button
            type="submit" // Ensures the form submission triggers `onSubmit`
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? "Logging In..." : "Sign In"}
          </Button>
          <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
            <Link href="#" variant="body2" onClick={handleRegisterRedirect}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
