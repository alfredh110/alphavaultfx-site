import React, { useState } from "react";
import TradeCsvUpload from "./components/TradeCsvUpload";
import TradeTable from "./components/TradeTable";
import {
  Container,
  Typography,
  Paper,
  Box,
  CssBaseline,
} from "@mui/material";
import { ProfitLossChart } from "./components/ProfitLossChart";

function App() {
  const [trades, setTrades] = useState([]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            AlphaVaultFX Trading Journal
          </Typography>
          <TradeCsvUpload onTradesParsed={setTrades} />
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
