import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Trader Dashboard</h2>
        <p>Welcome to your dashboard. Track your challenge progress and stats here.</p>
        {/* Placeholder for analytics/stats */}
      </main>
    </>
  );
}
