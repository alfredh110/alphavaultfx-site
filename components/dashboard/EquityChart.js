import useSWR from "swr";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const fetcher = url => fetch(url).then(res => res.json());

export default function EquityChart() {
  const { data, error } = useSWR('/api/equity', fetcher, { refreshInterval: 60000 });
  if (error) return <div className="dash-card">Failed to load chart.</div>;
  if (!data) return <div className="dash-card">Loading...</div>;
  return (
    <div className="dash-card equity-chart">
      <div className="eq-title">Equity Curve</div>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data.equity}>
          <XAxis dataKey="date" hide />
          <YAxis domain={['dataMin', 'dataMax']} hide />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#2186eb" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <div className="eq-labels">
        <span>Last 30 Days</span>
        <span style={{color: "#22e06d"}}>{data.change >= 0 ? '+' : ''}{data.change}%</span>
      </div>
      <style jsx>{`
        .equity-chart {
          flex: 3 1 480px;
          min-width: 320px;
        }
        .eq-title {
          color: #2186eb;
          font-weight: 700;
          font-size: 1.13rem;
          margin-bottom: 10px;
        }
        .eq-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 2px;
          color: #b3c7e6;
          font-size: 0.97rem;
        }
      `}</style>
    </div>
  );
}
