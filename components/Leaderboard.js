export default function Leaderboard() {
  // Sample data
  const leaders = [
    { name: "TraderJoe", profit: 5250 },
    { name: "JaneFX", profit: 4980 },
    { name: "You", profit: 2500 },
  ];
  return (
    <div className="dashboard-card">
      <h3>Leaderboard</h3>
      <ol>
        {leaders.map((l, i) => (
          <li key={i}>{l.name} – ${l.profit.toLocaleString()}</li>
        ))}
      </ol>
    </div>
  );
}
