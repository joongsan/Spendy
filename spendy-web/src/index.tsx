import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root";

/**
 * Create a root React element and render the Root component.
 */
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
