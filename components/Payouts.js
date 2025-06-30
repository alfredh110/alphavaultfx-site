export default function Payouts() {
  // Sample data
  const payouts = [
    { amount: 2500, date: "2025-06-15", status: "Paid" },
    { amount: 2000, date: "2025-05-15", status: "Paid" },
  ];
  return (
    <div className="dashboard-card">
      <h3>Payouts / Withdrawals</h3>
      <ul>
        {payouts.map((p, i) => (
          <li key={i}>${p.amount} – {p.date} ({p.status})</li>
        ))}
      </ul>
    </div>
  );
}
