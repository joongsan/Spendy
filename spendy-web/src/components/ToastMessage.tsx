import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button as MuiButton,
  Typography,
} from "@mui/material";

interface ToastMessageProps {
  message: string;
  severity: "success" | "error";
  onClose: () => void;
}

function ToastMessage({ message, severity, onClose }: ToastMessageProps) {
  return (
    <Dialog
      open={!!message}
      onClose={onClose}
      slotProps={{ backdrop: { style: { pointerEvents: "none" } } }}
      disableEscapeKeyDown
    >
      <DialogContent>
        <Typography color={severity === "success" ? "green" : "red"}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions>
        <MuiButton onClick={onClose} color="primary">
          OK
        </MuiButton>
      </DialogActions>
    </Dialog>
  );
}

export default ToastMessage;
