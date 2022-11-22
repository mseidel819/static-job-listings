import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#172339",
      light: "#0079ff",
      dark: "#0079ff",
    },
    secondary: {
      main: "#5CA5A5",
    },
    background: {
      default: "#ffffff",
      paper: "#FFFFFF",
    },
    text: {
      secondary: "#faf8f6",
      primary: "#172339",
      disabled: "#5CA5A5",
    },
  },
  typography: {
    fontFamily: '"League Spartan" , sans-serif',
    h1: {
      fontWeight: 400,
      fontSize: 26,
      lineHeight: 1.08,
    },
    h2: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1.09,
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 0.99,
    },
    h4: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.01,
    },
    body1: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.32,
    },
    button: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: "-0.123077px",
    },
    body2: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 5,
  },
});
