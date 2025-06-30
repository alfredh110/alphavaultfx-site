import useSWR from "swr";
const fetcher = url => fetch(url).then(res => res.json());

export default function RecentTrades() {
  const { data, error } = useSWR('/api/trades', fetcher, { refreshInterval: 60000 });
  if (error) return <div className="dash-card">Failed to load trades.</div>;
  if (!data) return <div className="dash-card">Loading...</div>;
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
          {data.trades.map(t => (
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
