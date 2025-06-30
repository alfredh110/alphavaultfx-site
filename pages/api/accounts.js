export default function handler(req, res) {
  res.status(200).json({
    balance: 25000,
    status: "Active",
    profitSplit: 90,
    nextPayout: "Jul 15, 2025"
  });
}
