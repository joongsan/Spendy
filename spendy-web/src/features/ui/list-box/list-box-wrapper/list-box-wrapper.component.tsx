import { ListBoxWrapperProps } from "./list-box-wrapper.types";
import styles from "./list-box-wrapper.module.css";

export const ListBoxWrapper = ({
  children,
  className,
}: ListBoxWrapperProps) => (
  <div className={`${styles.listboxWrapper} ${className}`}>{children}</div>
);
