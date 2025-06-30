export default function NewsPanelCard() {
  const news = [
    { date: "2025-06-25", title: "New challenge phase announced!" },
    { date: "2025-06-20", title: "Scheduled maintenance July 1." },
  ];
  return (
    <div className="av-card av-card-small">
      <div className="av-card-title">News & Updates</div>
      <ul className="av-news-list">
        {news.map((n, i) => (
          <li key={i}>
            <span className="av-news-date">{n.date}:</span>{" "}
            <span className="av-news-title">{n.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
