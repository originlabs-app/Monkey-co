import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./animations.css";
import "./i18n/i18n";
// import "./debug.css"; // Uncomment to debug

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
