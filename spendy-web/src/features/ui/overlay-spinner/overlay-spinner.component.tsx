import { Spinner } from "@nextui-org/react";
import styles from "./overlay-spinner.module.css";

export const OverlaySpinner = () => (
  <div>
    <Spinner className={styles.spinner} size="lg" />
  </div>
);
