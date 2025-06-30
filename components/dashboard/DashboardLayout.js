import AccountOverview from './AccountOverview';
import EquityChart from './EquityChart';
import RecentTrades from './RecentTrades';
import ChallengeStatus from './ChallengeStatus';
import RiskMetrics from './RiskMetrics';

export default function DashboardLayout() {
  return (
    <section className="avfx-dashboard">
      <div className="dashboard-row top">
        <AccountOverview />
        <RiskMetrics />
      </div>
      <div className="dashboard-row mid">
        <EquityChart />
        <ChallengeStatus />
      </div>
      <div className="dashboard-row bottom">
        <RecentTrades />
      </div>
      <style jsx>{`
        .avfx-dashboard {
          max-width: 1160px;
          margin: 0 auto;
          padding: 44px 0 60px 0;
          min-height: 80vh;
        }
        .dashboard-row {
          display: flex;
          gap: 36px;
          margin-bottom: 36px;
        }
        .dashboard-row.top {
          align-items: flex-start;
        }
        .dashboard-row.mid {
          align-items: stretch;
        }
        .dashboard-row.bottom {
          flex-direction: column;
        }
        @media (max-width: 1000px) {
          .dashboard-row {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
