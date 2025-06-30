import AccountOverview from '../components/AccountOverview';
import ChallengeRules from '../components/ChallengeRules';
import OpenTrades from '../components/OpenTrades';
import Leaderboard from '../components/Leaderboard';
import Payouts from '../components/Payouts';
import NewsPanel from '../components/NewsPanel';
import TradeAnalytics from '../components/TradeAnalytics';

// ...import other existing widgets like EquityCurve, ChallengeProgress, RecentTrades, etc.

export default function Dashboard() {
  return (
    <div className="dashboard-grid">
      <AccountOverview />
      <ChallengeRules />
      <OpenTrades />
      <Leaderboard />
      <Payouts />
      <NewsPanel />
      <TradeAnalytics />
      {/* Place other widgets/components here as you wish */}
    </div>
  );
}
