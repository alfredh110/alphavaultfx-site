export default function handler(req, res) {
  res.status(200).json({
    trades: [
      { id: 1, pair: 'EUR/USD', type: 'Buy', result: 320, date: '2025-06-29' },
      { id: 2, pair: 'GBP/JPY', type: 'Sell', result: -150, date: '2025-06-28' },
      { id: 3, pair: 'AUD/CAD', type: 'Buy', result: 210, date: '2025-06-27' },
      { id: 4, pair: 'BTC/USD', type: 'Sell', result: 560, date: '2025-06-26' }
    ]
  });
}
