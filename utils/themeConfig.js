import { createTheme } from "@material-ui/core/styles";

const fontFamily = [
  "Arial",
  "Meiryo",
  // Fonts can be used by writing below
].join(",");

export const theme = createTheme({
  palette: {
    black: "#000000",
    white: "#ffffff",
  },
  typography: {
    fontFamily: fontFamily,
    h1: {
      fontSize: 32,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 20,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
  },
});
