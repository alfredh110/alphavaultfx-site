export default function TradeAnalyticsCard() {
  return (
    <div className="av-card av-card-small">
      <div className="av-card-title">Trade Analytics</div>
      <ul className="av-analytics-list">
        <li>
          <span>Win Rate:</span> <span className="av-green">68%</span>
        </li>
        <li>
          <span>Avg Risk/Reward:</span> <span>1:2.1</span>
        </li>
        <li>
          <span>Best Trade:</span> <span className="av-green">+$560</span>
        </li>
        <li>
          <span>Worst Trade:</span> <span className="av-red">-$150</span>
        </li>
      </ul>
    </div>
  );
}
