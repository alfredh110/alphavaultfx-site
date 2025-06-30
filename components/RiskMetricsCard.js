export default function RiskMetricsCard() {
  return (
    <div className="av-card av-card-small">
      <div className="av-card-title">Risk Metrics</div>
      <div className="av-risk-metrics-row">
        <div>
          <span className="av-metric-label">Daily Loss</span>
          <span className="av-risk-value">2%</span>
        </div>
        <div>
          <span className="av-metric-label">Max Loss</span>
          <span className="av-risk-value">8%</span>
        </div>
        <div>
          <span className="av-metric-label">Drawdown</span>
          <span className="av-risk-value av-red">4.3%</span>
        </div>
      </div>
    </div>
  );
}
