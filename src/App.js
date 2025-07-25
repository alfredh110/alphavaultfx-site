import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Container, Typography, Paper, Box, Button, Stack, TextField } from "@mui/material";
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
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
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
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
