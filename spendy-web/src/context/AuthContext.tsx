import { AuthContextProps } from "../interfaces/AuthContextProps";
import { createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

/**
 * AuthProvider component to provide authentication context to the application
 * @param param0 children - The child components to render
 * @returns The AuthProvider component
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
  const [user, setUser] = useState<{ username: string; email: string } | null>( // Track user details
    null
  );

  const login = (user: { username: string; email: string }) => {
    setIsAuthenticated(true); // Set authentication state to true
    setUser(user); // Set user details
  };

  const logout = () => {
    setIsAuthenticated(false); // Set authentication state to false
    setUser(null); // Reset user details
  };

  return (
    // Provide the authentication context to the child components
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook to access the authentication context
 * @returns The authentication context
 */
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
