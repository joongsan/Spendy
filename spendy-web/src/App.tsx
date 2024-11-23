import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UploadTransactions from "./pages/UploadTransactions";
import Register from "./pages/Register";
import MenuIcon from "@mui/icons-material/Menu";
import NavigationDrawer from "./components/NavigationDrawer";

/**
 * Main application component. Renders the NavigationDrawer, AppBar, and main content area.
 * @returns  The main application component
 */
function App() {
  const [selectedPage, setSelectedPage] = useState("Dashboard"); // Track the active page
  const [mobileOpen, setMobileOpen] = useState(false); // Track drawer open/close state

  const { isAuthenticated } = useAuth(); // Access the authentication state

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); // Toggle the drawer state
  };

  return (
    <div style={styles.container}>
      {/* Conditionally render NavigationDrawer and AppBar based on authentication */}
      {isAuthenticated && (
        <>
          <NavigationDrawer
            setSelectedPage={setSelectedPage} // Pass function to update selected page
            mobileOpen={mobileOpen} // Pass drawer state
            handleDrawerToggle={handleDrawerToggle} // Pass toggle function to the drawer
          />
          {/* AppBar only for mobile view */}
          {!mobileOpen && ( // Hide the AppBar when the drawer is open
            <AppBar
              position="fixed"
              sx={{
                display: { xs: "block", md: "none" }, // Show AppBar only on small screens
                zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it's above the drawer
              }}
            >
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle} // Toggle drawer on click
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  {selectedPage} {/* Display the active page */}
                </Typography>
              </Toolbar>
            </AppBar>
          )}
          ;
        </>
      )}
      {/* Main Content Area */}
      <div style={styles.mainContentWrapper}>
        <CssBaseline />
        <Box sx={{ flex: 1, mt: { xs: isAuthenticated ? 8 : 0, md: 0 } }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<UploadTransactions />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Box>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  mainContentWrapper: {
    flex: 1, // Ensures content takes up available space
    display: "flex",
    justifyContent: "center", // Horizontally center content
    alignItems: "center", // Vertically center content
    padding: "20px",
  },
};

export default App;
