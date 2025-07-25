import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#151a1e",
      paper: "rgba(23, 26, 33, 0.97)"
    },
    primary: {
      main: "#03dac6"
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
      secondary: "#aaa"
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
          background: "rgba(23, 26, 33, 0.97)",
          borderRadius: 20,
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.40)",
          backdropFilter: "blur(8px)"
        }
      }
    }
  }
});

export default theme;
