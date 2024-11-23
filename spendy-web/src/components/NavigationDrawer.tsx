import { Drawer, ListItemButton, List, ListItemText } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavigationDrawer() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 250, boxSizing: "border-box" },
      }}
    >
      <List>
        <ListItemButton component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/upload">
          <ListItemText primary="Upload Transactions" />
        </ListItemButton>
        {!isAuthenticated && (
          <ListItemButton component={Link} to="/login">
            <ListItemText primary="Login" />
          </ListItemButton>
        )}
        {isAuthenticated && (
          <ListItemButton onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItemButton>
        )}
      </List>
    </Drawer>
  );
}

export default NavigationDrawer;
