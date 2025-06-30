export default function NewsPanel() {
  const news = [
    { date: "2025-06-25", title: "New challenge phase announced!" },
    { date: "2025-06-20", title: "Scheduled maintenance July 1." },
  ];
  return (
    <div className="dashboard-card">
      <h3>News & Updates</h3>
      <ul>
        {news.map((n, i) => (
          <li key={i}><strong>{n.date}:</strong> {n.title}</li>
        ))}
      </ul>
    </div>
  );
}
