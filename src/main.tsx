import React from "react";
import ReactDOM from "react-dom/client";
import "leaflet/dist/leaflet.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { GlobalStyles } from "./global-styles.ts";
import { AppRoutes } from "./routes/index.tsx";
import "dayjs/locale/da";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="da">
      <GlobalStyles />
      <AppRoutes />
    </LocalizationProvider>
  </React.StrictMode>
);
