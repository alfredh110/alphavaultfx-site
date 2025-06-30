import { LineChart, Line, ResponsiveContainer } from "recharts";
import { FaChartLine } from "react-icons/fa";

const data = [
  { day: 1, equity: 10000 },
  { day: 5, equity: 10300 },
  { day: 10, equity: 10400 },
  { day: 15, equity: 10600 },
  { day: 20, equity: 10800 },
  { day: 25, equity: 10950 },
  { day: 30, equity: 11025 }
];

export default function EquityCurveCard() {
  return (
    <div className="av-card">
      <div className="av-card-title">
        <FaChartLine /> Equity Curve
      </div>
      <div style={{ width: "100%", height: 160 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="equity"
              stroke="#27f0d9"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="av-curve-footer">
        <span>Last 30 Days</span>
        <span className="av-green">+6.25%</span>
      </div>
    </div>
  );
}
