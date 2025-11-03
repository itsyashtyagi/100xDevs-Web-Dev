import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Linkedin from "./linkedin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Linkedin />
  </StrictMode>
);
