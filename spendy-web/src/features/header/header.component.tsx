import { ListboxItem, Listbox } from "@nextui-org/react";
import { useState } from "react";
import { Menu, LogOut } from "lucide-react";

import { useAuth } from "@/features/auth";

import styles from "./header.module.css";

export const Header = () => {
  const { logout } = useAuth();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    console.log("🚀 ~ Logging Out ~");
    try {
      logout();
      console.log("🚀 ~ Logging Out Success ~");
    } catch (error) {
      console.log("🚀 ~ Logging Out Failed ~", error);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Menu Icon */}
      <Menu
        className={styles.menuIcon}
        onClick={toggleDrawer}
        aria-label="Toggle Drawer"
      />

      {/* Header */}

      {/* Drawer */}
      <div
        className={`${styles.drawer} ${isDrawerOpen ? styles.drawerOpen : ""}`}
      >
        <Listbox aria-label="Menu List Box">
          <ListboxItem
            className={styles.listboxItem}
            key="dashBoard"
            aria-label="Dashboard"
          >
            Dashboard
          </ListboxItem>
          <ListboxItem
            className={styles.listboxItem}
            key="uploadTransaction"
            aria-label="Upload Transaction"
          >
            Upload Transaction
          </ListboxItem>
          <ListboxItem
            className={`${styles.listboxItem} ${styles.danger}`}
            key="logOut"
            aria-label="Log Out"
          >
            <button className={styles.logoutButton} onClick={handleLogout}>
              <LogOut size={24} aria-label="Log Out" />
              <span className={styles.logoutText}>Log Out</span>
            </button>
          </ListboxItem>
        </Listbox>
      </div>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div className={styles.backdrop} onClick={toggleDrawer}></div>
      )}
    </>
  );
};
