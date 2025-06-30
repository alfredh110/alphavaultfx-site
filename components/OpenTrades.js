export default function OpenTrades() {
  // Sample data
  const trades = [
    { pair: "EUR/USD", type: "Buy", lots: 1.0, pnl: 120, open: "2025-06-29 10:12" },
    { pair: "GBP/JPY", type: "Sell", lots: 0.5, pnl: -60, open: "2025-06-28 09:22" },
  ];
  return (
    <div className="dashboard-card">
      <h3>Open Trades</h3>
      <table>
        <thead>
          <tr>
            <th>Pair</th><th>Type</th><th>Lots</th><th>P&L</th><th>Opened</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((t, i) => (
            <tr key={i}>
              <td>{t.pair}</td>
              <td>{t.type}</td>
              <td>{t.lots}</td>
              <td style={{color: t.pnl >= 0 ? "limegreen" : "red"}}>{t.pnl >= 0 ? "+" : ""}{t.pnl}</td>
              <td>{t.open}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
