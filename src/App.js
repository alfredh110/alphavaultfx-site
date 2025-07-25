import React, { useState } from "react";
import TradeCsvUpload from "./components/TradeCsvUpload";
import TradeTable from "./components/TradeTable";

function App() {
  const [trades, setTrades] = useState([]);

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>AlphaVaultFX Trading Journal</h1>
      <TradeCsvUpload onTradesParsed={setTrades} />
      <TradeTable trades={trades} />
    </div>
  );
}

export default App;
