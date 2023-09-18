import React from "react";
import ReactDOM from "react-dom/client";
import "leaflet/dist/leaflet.css";
import { GlobalStyles } from "./global-styles.ts";
import { AppRoutes } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </React.StrictMode>
);
