import { getSession, useSession, signOut } from "next-auth/react";
import AccountOverview from "../components/AccountOverview";
import RiskMetricsCard from "../components/RiskMetricsCard";
import ChallengeProgressCard from "../components/ChallengeProgressCard";
import EquityCurveCard from "../components/EquityCurveCard";
import RecentTradesCard from "../components/RecentTradesCard";
import LeaderboardCard from "../components/LeaderboardCard";
import NewsPanelCard from "../components/NewsPanelCard";
import TradeAnalyticsCard from "../components/TradeAnalyticsCard";

export default function Dashboard() {
  const { data: session } = useSession();

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
      <div style={{ marginTop: 40 }}>
        {session && (
          <button onClick={() => signOut()} style={{ background: "#2186eb", color: "#fff", padding: "8px 22px", borderRadius: 6, border: "none" }}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

// Protect the dashboard route
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: { destination: "/auth/login", permanent: false }
    };
  }
  return { props: { session } };
}
