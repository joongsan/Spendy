import React, { useState } from "react";
import { Container, Typography, Button, Input } from "@mui/material";
import axios from "axios";

function UploadTransactions() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/transactions/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("🚀 ~ handleUpload ~ response:", response);
      // Handle successful upload
    } catch (error) {
      console.log("🚀 ~ handleUpload ~ error:", error);
      // Handle upload error
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Upload Transactions
      </Typography>
      <Input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
    </Container>
  );
}

export default UploadTransactions;
