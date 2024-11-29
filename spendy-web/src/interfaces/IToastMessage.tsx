/**
 * Interface for the ToastMessage component
 * @param message - The message to display
 * @param severity - The severity of the message
 * @param onClose - Function to close the message
 * @returns The ToastMessage component
 */
export interface IToastMessage {
  message: string;
  severity: "success" | "error";
  onClose: () => void;
}
