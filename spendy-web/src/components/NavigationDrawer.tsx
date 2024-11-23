import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UploadIcon from "@mui/icons-material/Upload";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

/**
 * NavigationDrawer component to display the navigation links and user details.
 * @param setSelectedPage Function to update the selected page
 * @param mobileOpen Drawer open/close state
 * @param handleDrawerToggle Function to toggle the drawer
 * @returns The NavigationDrawer component
 */
function NavigationDrawer({
  setSelectedPage, // Function to update the selected page
  mobileOpen, // Drawer open/close state
  handleDrawerToggle, // Function to toggle the drawer
}: {
  setSelectedPage: (page: string) => void;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}) {
  const { isAuthenticated, logout, user } = useAuth(); // Access the authentication state
  const navigate = useNavigate(); // Get the navigate function from the router

  const handleMenuClick = (page: string) => {
    setSelectedPage(page); // Update the selected page
    handleDrawerToggle(); // Close drawer after selection in mobile view
  };

  const handleLogout = () => {
    logout(); // Log out the user
    navigate("/login"); // Redirect to the login page
  };

  const drawerWidth = 240;

  const drawerContent = (
    <>
      {/* Conditionally render user details and navigation links */}
      {isAuthenticated && (
        <>
          <Box
            sx={{
              p: 2,
              textAlign: "center",
              borderBottom: "1px solid #ddd",
            }}
          >
            {/* Display user details */}
            <Avatar
              sx={{
                margin: "0 auto",
                mb: 1,
                bgcolor: "primary.main",
                width: 64,
                height: 64,
              }}
            >
              U
            </Avatar>
            <Typography variant="h6">
              {user?.username?.toUpperCase()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user?.email}
            </Typography>
          </Box>
          <List>
            {/* Navigation links */}
            <ListItemButton
              component={Link}
              to="/dashboard"
              sx={{
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "primary.light",
                  color: "white",
                },
              }}
              onClick={() => handleMenuClick("Dashboard")} // Update selected page
            >
              <ListItemIcon>
                <DashboardIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/upload"
              sx={{
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "primary.light",
                  color: "white",
                },
              }}
              onClick={() => handleMenuClick("Upload Transactions")} // Update selected page
            >
              <ListItemIcon>
                <UploadIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Upload Transactions" />
            </ListItemButton>
          </List>
          <Divider sx={{ my: 2 }} />
          <List>
            {/* Logout button */}
            <ListItemButton
              onClick={handleLogout}
              sx={{
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "error.light",
                  color: "white",
                },
              }}
            >
              <ListItemIcon>
                <LogoutIcon color="error" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </List>
        </>
      )}
      {/* Render login link if user is not authenticated */}
      {!isAuthenticated && (
        <List>
          <ListItemButton
            component={Link}
            to="/login"
            sx={{
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "secondary.light",
                color: "white",
              },
            }}
          >
            <ListItemIcon>
              <LoginIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
        </List>
      )}
    </>
  );

  return (
    <>
      {/* Persistent Drawer for desktop */}
      <Drawer
        variant="persistent"
        anchor="left"
        open // Always open for larger screens
        sx={{
          display: { xs: "none", md: "block" }, // Hide on small screens
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "linear-gradient(145deg, #f0f0f0, #e0e0e0)",
            boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Temporary Drawer for mobile */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" }, // Show only on small screens
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "linear-gradient(145deg, #f0f0f0, #e0e0e0)",
            boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default NavigationDrawer;
