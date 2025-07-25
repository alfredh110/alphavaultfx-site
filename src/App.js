import React, { useState } from "react";
import TradeCsvUpload from "./components/TradeCsvUpload";
import TradeTable from "./components/TradeTable";
import { ProfitLossChart } from "./components/ProfitLossChart";
import {
  Container,
  Typography,
  Paper,
  Box,
  CssBaseline,
  Button,
  Stack
} from "@mui/material";

function App() {
  const [trades, setTrades] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleTradesParsed = (parsedTrades, selectedFileName) => {
    setTrades(parsedTrades);
    setFileName(selectedFileName);
  };

  const handleRemoveExport = () => {
    setTrades([]);
    setFileName("");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            AlphaVaultFX Trading Journal
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <TradeCsvUpload onTradesParsed={handleTradesParsed} />
            {fileName && (
              <Button
                variant="outlined"
                color="error"
                onClick={handleRemoveExport}
              >
                Remove Export
              </Button>
            )}
            {fileName && (
              <Typography variant="body2" color="textSecondary">
                {fileName}
              </Typography>
            )}
          </Stack>
          <Box my={4}>
            <ProfitLossChart trades={trades} />
          </Box>
          <TradeTable trades={trades} />
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default App;
