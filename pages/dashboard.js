import AccountOverview from '../components/dashboard/AccountOverview';
import EquityChart from '../components/dashboard/EquityChart';
import RecentTrades from '../components/dashboard/RecentTrades';
import ChallengeStatus from '../components/dashboard/ChallengeStatus';
import PayoutsTimeline from '../components/dashboard/PayoutsTimeline';
import RiskMetrics from '../components/dashboard/RiskMetrics';
import Notifications from '../components/dashboard/Notifications';

export default function Dashboard() {
  return (
    <div className="dashboard-root">
      <Notifications />
      <div className="dashboard-top">
        <AccountOverview />
        <RiskMetrics />
      </div>
      <EquityChart />
      <div className="dashboard-bottom">
        <RecentTrades />
        <ChallengeStatus />
        <PayoutsTimeline />
      </div>
      {/* Add responsive grid/flex styles */}
    </div>
  );
}
