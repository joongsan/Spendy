import React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to your dashboard. Here you can view your transactions and
        summaries.
      </Typography>
      <Link to="/upload">Upload Transactions</Link>
    </Container>
  );
}

export default Dashboard;
