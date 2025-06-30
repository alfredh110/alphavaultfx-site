import AccountOverview from "../components/AccountOverview";
import RiskMetricsCard from "../components/RiskMetricsCard";
import ChallengeProgressCard from "../components/ChallengeProgressCard";
import EquityCurveCard from "../components/EquityCurveCard";
import RecentTradesCard from "../components/RecentTradesCard";
import LeaderboardCard from "../components/LeaderboardCard";
import NewsPanelCard from "../components/NewsPanelCard";
import TradeAnalyticsCard from "../components/TradeAnalyticsCard";

export default function Dashboard() {
  return (
    <div className="av-dashboard-wrap">
      <h1 className="av-dashboard-title">Welcome to AlphavaultFX Dashboard</h1>
      <div className="av-dashboard-grid">
        <div className="av-dashboard-column">
          <AccountOverview />
          <RiskMetricsCard />
          <ChallengeProgressCard />
          <EquityCurveCard />
        </div>
        <div className="av-dashboard-column">
          <RecentTradesCard />
          <LeaderboardCard />
          <NewsPanelCard />
          <TradeAnalyticsCard />
        </div>
      </div>
    </div>
  );
}
