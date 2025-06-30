// You can use a library like recharts, chart.js, or apexcharts for a real chart.
// Here is a placeholder with SVG for demo.

export default function EquityChart() {
  return (
    <div className="dash-card equity-chart">
      <div className="eq-title">Equity Curve</div>
      <svg width="100%" height="88" viewBox="0 0 340 88">
        <polyline
          fill="none"
          stroke="#2186eb"
          strokeWidth="4"
          points="0,80 20,70 60,72 80,54 110,58 150,22 190,38 220,18 270,54 340,12"
        />
        <circle cx="340" cy="12" r="5" fill="#22e06d" />
      </svg>
      <div className="eq-labels">
        <span>Last 30 Days</span>
        <span style={{color: "#22e06d"}}>+12.3%</span>
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
