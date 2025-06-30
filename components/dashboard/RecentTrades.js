export default function RecentTrades() {
  // Demo data
  const trades = [
    { id: 1, pair: 'EUR/USD', type: 'Buy', result: 320, date: '2025-06-29' },
    { id: 2, pair: 'GBP/JPY', type: 'Sell', result: -150, date: '2025-06-28' },
    { id: 3, pair: 'AUD/CAD', type: 'Buy', result: 210, date: '2025-06-27' },
    { id: 4, pair: 'BTC/USD', type: 'Sell', result: 560, date: '2025-06-26' }
  ];
  return (
    <div className="dash-card recent-trades">
      <div className="rt-title">Recent Trades</div>
      <table>
        <thead>
          <tr>
            <th>Pair</th>
            <th>Type</th>
            <th>P&L</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trades.map(t => (
            <tr key={t.id}>
              <td>{t.pair}</td>
              <td>{t.type}</td>
              <td style={{color: t.result >= 0 ? '#22e06d' : '#f44336', fontWeight:600}}>{t.result >= 0 ? '+' : ''}{t.result}</td>
              <td>{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .recent-trades {
          width: 100%;
          overflow-x: auto;
        }
        .rt-title {
          color: #2186eb;
          font-weight: 700;
          font-size: 1.13rem;
          margin-bottom: 10px;
        }
        table {
          width: 100%;
          border-spacing: 0;
          background: none;
        }
        th, td {
          padding: 9px 14px;
          text-align: left;
          font-size: 1.02rem;
        }
        th {
          color: #b3c7e6;
          font-weight: 700;
          background: none;
        }
        td {
          color: #e0e6ed;
          background: none;
        }
        tr {
          border-bottom: 1px solid #172132;
        }
        tr:last-child {
          border-bottom: none;
        }
      `}</style>
    </div>
  );
}
