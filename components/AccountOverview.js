import { FaWallet, FaChartLine, FaLockOpen, FaExchangeAlt } from "react-icons/fa";

export default function AccountOverview() {
  return (
    <div className="av-card">
      <div className="av-card-title">
        <FaWallet /> Account Overview
      </div>
      <div className="av-metrics">
        <div>
          <span className="av-metric-label">Balance</span>
          <span className="av-metric-value">$10,000</span>
        </div>
        <div>
          <span className="av-metric-label">Equity</span>
          <span className="av-metric-value">$10,250</span>
        </div>
        <div>
          <span className="av-metric-label">Free Margin</span>
          <span className="av-metric-value">$8,500</span>
        </div>
        <div>
          <span className="av-metric-label">Open Trades</span>
          <span className="av-metric-value">2</span>
        </div>
      </div>
    </div>
  );
}
