import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Container, Typography, Paper, Box, Button, Stack } from "@mui/material";
import TradeCsvUpload from "./components/TradeCsvUpload";
import TradeTable from "./components/TradeTable";
import { ProfitLossChart } from "./components/ProfitLossChart";
import theme from "./theme";

function App() {
  const [trades, setTrades] = useState([]);
  const [fileName, setFileName] = useState("");
  const [clearFile, setClearFile] = useState(false);

  const handleTradesParsed = (parsedTrades, selectedFileName) => {
    setTrades(parsedTrades);
    setFileName(selectedFileName);
    setClearFile(false);
  };

  const handleRemoveExport = () => {
    setTrades([]);
    setFileName("");
    setClearFile(true);
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
          <Box my={4}>
            <ProfitLossChart trades={trades} />
          </Box>
          <TradeTable trades={trades} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
