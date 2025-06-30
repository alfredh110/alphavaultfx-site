export default function AccountOverview() {
  return (
    <div className="dash-card account-overview">
      <div className="ao-title">Account Overview</div>
      <div className="ao-balance-row">
        <div className="ao-balance-label">Balance</div>
        <div className="ao-balance-amt">$25,000.00</div>
      </div>
      <div className="ao-row">
        <div>
          <div className="ao-label">Account Status</div>
          <div className="ao-value active">Active</div>
        </div>
        <div>
          <div className="ao-label">Profit Split</div>
          <div className="ao-value">90%</div>
        </div>
        <div>
          <div className="ao-label">Next Payout</div>
          <div className="ao-value">Jul 15, 2025</div>
        </div>
      </div>
      <style jsx>{`
        .account-overview {
          flex: 2 1 320px;
        }
        .ao-title {
          color: #2186eb;
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 10px;
        }
        .ao-balance-row {
          display: flex;
          align-items: baseline;
          gap: 14px;
          margin-bottom: 16px;
        }
        .ao-balance-label {
          color: #b3c7e6;
          font-size: 1.07rem;
          font-weight: 500;
        }
        .ao-balance-amt {
          color: #fff;
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-shadow: 0 3px 16px #2186eb22;
          transition: color 0.2s;
        }
        .ao-row {
          display: flex;
          gap: 34px;
          margin-top: 12px;
        }
        .ao-label {
          color: #b3c7e6;
          font-size: 0.97rem;
        }
        .ao-value {
          color: #fff;
          font-size: 1.09rem;
          font-weight: 700;
        }
        .ao-value.active {
          color: #22e06d;
        }
      `}</style>
    </div>
  );
}
