export default function handler(req, res) {
  res.status(200).json({
    equity: [
      { date: '2025-06-01', balance: 24000 },
      { date: '2025-06-05', balance: 24500 },
      { date: '2025-06-10', balance: 24650 },
      { date: '2025-06-15', balance: 24900 },
      { date: '2025-06-20', balance: 25100 },
      { date: '2025-06-25', balance: 25300 },
      { date: '2025-06-30', balance: 25500 }
    ],
    change: 6.25
  });
}
