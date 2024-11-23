import {
  Alert,
  Box,
  Button,
  Container,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

/**
 * UploadTransactions component to upload transaction files.
 * @returns The UploadTransactions component
 */
function UploadTransactions() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  // Handle file change event
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    // Check if a file is selected
    if (!file) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    // Create a new FormData object
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Make a POST request to the upload endpoint
      const response = await axios.post("/api/transactions/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("🚀 ~ handleUpload ~ File Uploaded");
      setUploadStatus("File uploaded successfully!");
    } catch (error: any) {
      // Handle errors
      const errorMessage = error.response?.data || "Something went wrong!"; // Get the error message from the response data
      console.error("🚀 ~ handleUpload Failed", errorMessage);
      setUploadStatus("Failed to upload the file. Please try again.");
    }
  };

  return (
    // Render the UploadTransactions component
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        mt: { xs: 6, md: 8 }, // Adjust spacing for mobile
        mb: { xs: 3, md: 4 },
        px: { xs: 2, md: 3 }, // Padding for smaller screens
      }}
    >
      {/* Upload Transactions Paper */}
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 4, // Softer corner radius
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "linear-gradient(145deg, #f7f7f7, #e8e8e8)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Upload Transactions
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 3,
            color: "text.secondary",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Upload your transaction file to update your ledger. Supported formats
          include CSV and Excel.
        </Typography>

        <Box
          sx={{
            textAlign: "center",
            mb: 3,
            width: "100%",
          }}
        >
          <Input
            type="file"
            onChange={handleFileChange}
            sx={{
              mb: 2,
              display: "block",
              width: "100%", // Full-width to stretch to container
              padding: "10px", // Add some padding for better visual appeal
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px", // Rounded corners for a modern look
              fontSize: "0.9rem", // Slightly larger font for readability
            }}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleUpload}
            sx={{
              mt: 2,
              px: { xs: 3, md: 4 }, // Adjust padding
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            Upload
          </Button>
        </Box>
        {/* Display the upload status */}
        {uploadStatus && (
          <Alert
            severity={
              uploadStatus === "File uploaded successfully!"
                ? "success"
                : "error"
            }
            sx={{
              mt: 2,
              width: "100%",
              maxWidth: 400, // Limit width of the alert
            }}
          >
            {uploadStatus}
          </Alert>
        )}
      </Paper>
    </Container>
  );
}

export default UploadTransactions;
