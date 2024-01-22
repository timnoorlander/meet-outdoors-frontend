import React from "react";
import ReactDOM from "react-dom/client";
import "leaflet/dist/leaflet.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { GlobalStyles } from "./styles/global-styles.ts";
import { AppRoutes } from "./routes/index.tsx";
import "dayjs/locale/da";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthenticationProvider } from "@/features/auth";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { muiTheme } from "./styles/mui-theme.ts";

const queryClient = new QueryClient();

async function setupMocking() {
  if (import.meta.env.MODE !== "development") {
    return;
  }

  const { enableMocking } = await import("../mocks/browser");
  await enableMocking();
}

setupMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="da">
            <QueryClientProvider client={queryClient}>
              <AuthenticationProvider>
                <GlobalStyles />
                <AppRoutes />
              </AuthenticationProvider>
            </QueryClientProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </React.StrictMode>
  );
});
