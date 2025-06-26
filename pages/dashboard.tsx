export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-gold text-center mb-6">Trader Dashboard</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Challenge Status</h2>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>📊 Account: $50,000</li>
            <li>✅ Phase: Evaluation</li>
            <li>📅 Days Remaining: 22</li>
            <li>💰 Current Profit: +3.2%</li>
            <li>📉 Max Daily Drawdown: 2.1%</li>
            <li>💣 Max Drawdown: 4.3%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}