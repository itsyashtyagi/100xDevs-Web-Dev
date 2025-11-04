import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ScrollBottom from "./ScrollBottom.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollBottom />
  </StrictMode>
);
