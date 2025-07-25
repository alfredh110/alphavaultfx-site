import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#151a1e",
      paper: "rgba(24, 54, 97, 0.97)"
    },
    primary: {
      main: "#4FC3F7"
    },
    secondary: {
      main: "#ffd700"
    },
    success: {
      main: "#00ff00"
    },
    error: {
      main: "#ff1744"
    },
    text: {
      primary: "#fff",
      secondary: "#4FC3F7"
    }
  },
  typography: {
    fontFamily: "'IBM Plex Mono', 'Roboto Mono', monospace",
    h3: {
      fontWeight: 700,
      letterSpacing: 2,
      textTransform: "uppercase"
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "rgba(24, 54, 97, 0.97)",
          borderRadius: 20,
          boxShadow: "0 8px 32px 0 rgba(10,35,66,0.40)",
          backdropFilter: "blur(8px)"
        }
      }
    }
  }
});

export default theme;
