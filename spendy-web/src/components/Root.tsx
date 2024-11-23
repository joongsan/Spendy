import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import App from "../App";

/**
 * Root component to wrap the App component with the AuthProvider and Router.
 * @returns The Root component
 */
function Root() {
  return (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  );
}

export default Root;
