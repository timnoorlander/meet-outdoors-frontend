import React from "react";
import ReactDOM from "react-dom/client";
import "leaflet/dist/leaflet.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { createTheme, ThemeProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { GlobalStyles } from "./global-styles.ts";
import { AppRoutes } from "./routes/index.tsx";
import "dayjs/locale/da";
import { theme } from "./theme.ts";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.color.primary,
      light: theme.color.lightGreen,
      dark: theme.color.darkGreen,
      contrastText: theme.color.grey,
    },
  },
});

async function enableMocking() {
  if (import.meta.env.MODE !== "development") {
    return;
  }

  const { worker } = await import("../mocks/browser");
  return worker.start({
    onUnhandledRequest(request, print) {
      // Ignore any requests containing "cdn.com" in their URL.
      if (request.url.includes("openstreetmap.org")) {
        return;
      }

      // Otherwise, print an unhandled request warning.
      print.warning();
    },
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ThemeProvider theme={muiTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="da">
          <GlobalStyles />
          <AppRoutes />
        </LocalizationProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
});
