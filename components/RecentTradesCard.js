export default function RecentTradesCard() {
  const trades = [
    { pair: "EUR/USD", type: "Buy", pnl: 320, date: "2025-06-29" },
    { pair: "GBP/JPY", type: "Sell", pnl: -150, date: "2025-06-28" },
    { pair: "AUD/CAD", type: "Buy", pnl: 210, date: "2025-06-27" },
    { pair: "BTC/USD", type: "Sell", pnl: 560, date: "2025-06-26" },
  ];
  return (
    <div className="av-card">
      <div className="av-card-title">Recent Trades</div>
      <table className="av-table">
        <thead>
          <tr>
            <th>Pair</th>
            <th>Type</th>
            <th>P&amp;L</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((t, i) => (
            <tr key={i}>
              <td>{t.pair}</td>
              <td>{t.type}</td>
              <td className={t.pnl >= 0 ? "av-green" : "av-red"}>
                {t.pnl >= 0 ? "+" : ""}
                {t.pnl}
              </td>
              <td>{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
