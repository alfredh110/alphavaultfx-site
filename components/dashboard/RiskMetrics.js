export default function RiskMetrics() {
  return (
    <div className="dash-card risk-metrics">
      <div className="rm-title">Risk Metrics</div>
      <div className="rm-row">
        <div>
          <div className="rm-label">Daily Loss</div>
          <div className="rm-value">2%</div>
        </div>
        <div>
          <div className="rm-label">Max Loss</div>
          <div className="rm-value">8%</div>
        </div>
        <div>
          <div className="rm-label">Drawdown</div>
          <div className="rm-value">4.3%</div>
        </div>
      </div>
      <style jsx>{`
        .risk-metrics {
          flex: 1 1 200px;
        }
        .rm-title {
          color: #2186eb;
          font-weight: 700;
          font-size: 1.13rem;
          margin-bottom: 10px;
        }
        .rm-row {
          display: flex;
          gap: 30px;
          margin-top: 10px;
        }
        .rm-label {
          color: #b3c7e6;
          font-size: 0.97rem;
        }
        .rm-value {
          color: #fff;
          font-size: 1.09rem;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
