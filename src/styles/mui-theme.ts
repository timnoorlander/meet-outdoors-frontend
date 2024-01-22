import { createTheme } from "@mui/material";
import { theme } from "./theme";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
      light: theme.colors.lightGreen,
      dark: theme.colors.darkGreen,
      contrastText: theme.colors.grey,
    },
  },
});
