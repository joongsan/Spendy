import {
  Box,
  Button as MuiButton,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { ToastMessageProps } from "../interfaces/ToastMessageProps";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

/**
 * ToastMessage component. Displays a dialog with message and severity.
 * @param param0  message, severity, onClose
 * @returns  Dialog with message, severity, onClose
 */
function ToastMessage({ message, severity, onClose }: ToastMessageProps) {
  const icon =
    severity === "success" ? (
      <CheckCircleIcon sx={{ color: "success.main", fontSize: 48 }} />
    ) : (
      <ErrorIcon sx={{ color: "error.main", fontSize: 48 }} />
    );

  const title =
    severity === "success" ? "Success!" : severity === "error" ? "Error!" : "";

  return (
    <Dialog
      open={!!message} // Open dialog if message is present
      onClose={onClose}
      disableEscapeKeyDown
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 3,
          padding: 3,
          minWidth: "300px",
        },
      }}
    >
      <DialogContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          {icon}
          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 2, fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              color: severity === "success" ? "success.main" : "error.main",
            }}
          >
            {message}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", mt: 2 }}>
        <MuiButton
          onClick={onClose}
          variant={severity === "success" ? "contained" : "outlined"}
          color={severity === "success" ? "success" : "error"}
          sx={{
            px: 3,
            py: 1,
            fontWeight: "bold",
          }}
        >
          OK
        </MuiButton>
      </DialogActions>
    </Dialog>
  );
}

export default ToastMessage;
