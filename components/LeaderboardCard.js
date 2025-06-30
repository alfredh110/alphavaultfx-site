export default function LeaderboardCard() {
  const leaders = [
    { name: "TraderJoe", profit: 5250 },
    { name: "JaneFX", profit: 4980 },
    { name: "You", profit: 2500 },
  ];
  return (
    <div className="av-card av-card-small">
      <div className="av-card-title">Leaderboard</div>
      <ol className="av-leaderboard-list">
        {leaders.map((l, i) => (
          <li key={i}>
            <span className="av-leaderboard-rank">#{i + 1}</span>
            <span className="av-leaderboard-name">{l.name}</span>
            <span className="av-leaderboard-profit">${l.profit.toLocaleString()}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
