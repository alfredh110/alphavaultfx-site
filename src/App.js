import React, { useState } from "react";
import {
  ThemeProvider, CssBaseline, Container, Typography, Paper, Box, Button, Stack, TextField
} from "@mui/material";
import TradeCsvUpload from "./components/TradeCsvUpload";
import TradeTable from "./components/TradeTable";
import { ProfitLossChart } from "./components/ProfitLossChart";
import theme from "./theme";

const INITIAL_INVESTMENT = 5000;

function App() {
  const [trades, setTrades] = useState([]);
  const [fileName, setFileName] = useState("");
  const [clearFile, setClearFile] = useState(false);
  const [capitalEvents, setCapitalEvents] = useState([{ amount: INITIAL_INVESTMENT, atIndex: 0 }]);
  const [capitalAmount, setCapitalAmount] = useState("");

  // Simple nav state for smooth scrolling
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleTradesParsed = (parsedTrades, selectedFileName) => {
    setTrades(parsedTrades);
    setFileName(selectedFileName);
    setClearFile(false);
  };

  const handleRemoveExport = () => {
    setTrades([]);
    setFileName("");
    setClearFile(true);
    setCapitalEvents([{ amount: INITIAL_INVESTMENT, atIndex: 0 }]);
  };

  const handleAddCapital = () => {
    const amt = parseFloat(capitalAmount);
    if (!isNaN(amt) && amt > 0) {
      setCapitalEvents(prev => [
        ...prev,
        { amount: amt, atIndex: trades.length }
      ]);
      setCapitalAmount("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header style={{
        background: "var(--color-navy-light, #183661)",
        padding: "1.5em 0 1em 0",
        textAlign: "center"
      }}>
        <img
          src="/alphavaultfx-logo.svg"
          alt="AlphaVaultFX Logo"
          className="logo"
          style={{ height: 72, verticalAlign: "middle", marginRight: 32 }}
        />
        <nav className="nav-links" style={{ display: "inline-block", verticalAlign: "middle" }}>
          <Button
            className="nav-link"
            variant="text"
            color="secondary"
            onClick={() => scrollTo("home")}
            sx={{ fontWeight: "bold", mx: 1.5 }}
          >
            Home
          </Button>
          <Button
            className="nav-link"
            variant="text"
            color="secondary"
            onClick={() => scrollTo("trading-journal")}
            sx={{ fontWeight: "bold", mx: 1.5 }}
          >
            Trading Journal
          </Button>
        </nav>
      </header>
      <Container maxWidth="md" sx={{ my: 4 }}>
        {/* Welcome Section */}
        <section className="card" id="home">
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{
            color: "secondary.main",
            textShadow: "0 0 16px #ffd70055"
          }}>
            Welcome to AlphaVaultFX
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Your trusted platform for secure, elegant financial solutions.
          </Typography>
          <Button
            className="btn-primary"
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => scrollTo("trading-journal")}
            sx={{ fontWeight: "bold", mt: 2 }}
          >
            Get Started
          </Button>
        </section>

        {/* Trading Journal Section */}
        <section className="card" id="trading-journal">
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{
            color: "secondary.main",
            textShadow: "0 0 16px #ffd70055"
          }}>
            AlphaVaultFX Trading Journal
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <TradeCsvUpload onTradesParsed={handleTradesParsed} clearFile={clearFile} />
            {fileName && (
              <>
                <Button variant="outlined" color="error" onClick={handleRemoveExport}>
                  Remove Export
                </Button>
                <Typography variant="body2" color="secondary" sx={{ fontFamily: "monospace" }}>
                  {fileName}
                </Typography>
              </>
            )}
          </Stack>
          <Box my={2}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <TextField
                size="small"
                type="number"
                label="Add Capital (USD)"
                value={capitalAmount}
                onChange={e => setCapitalAmount(e.target.value)}
                sx={{ maxWidth: 160 }}
                inputProps={{ min: 1, step: 1 }}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={handleAddCapital}
                disabled={!capitalAmount || isNaN(parseFloat(capitalAmount)) || parseFloat(capitalAmount) <= 0}
              >
                Add Capital
              </Button>
              <Typography variant="body2" color="secondary" sx={{ ml: 2 }}>
                Initial Investment: ${INITIAL_INVESTMENT.toLocaleString()}
              </Typography>
            </Stack>
          </Box>
          <Box my={4}>
            <ProfitLossChart trades={trades} capitalEvents={capitalEvents} />
          </Box>
          <TradeTable trades={trades} />
        </section>
      </Container>
    </ThemeProvider>
  );
}

export default App;
