import React, { useState, useEffect } from 'react';
import TradeCsvUpload from './components/TradeCsvUpload';
import TradeTable from './components/TradeTable';
import axios from 'axios';

function App() {
  const [trades, setTrades] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/trades')
      .then(res => setTrades(res.data))
      .catch(() => setTrades([]));
  }, [refresh]);

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>AlphaVaultFX Trading Journal</h1>
      <TradeCsvUpload onUpload={() => setRefresh(r => !r)} />
      <TradeTable trades={trades} />
    </div>
  );
}

export default App;
