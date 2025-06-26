export default function Challenge() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gold mb-8">Challenge Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { size: '$10,000', price: '$99' },
          { size: '$50,000', price: '$299' },
          { size: '$100,000', price: '$499' },
          { size: '$200,000', price: '$999' },
        ].map((plan) => (
          <div key={plan.size} className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-gold">
            <h2 className="text-xl font-bold text-white mb-2">{plan.size} Account</h2>
            <p className="text-lg text-gold mb-4">{plan.price}</p>
            <ul className="text-gray-400 text-sm space-y-1 mb-4">
              <li>🎯 Profit Target: 10%</li>
              <li>📉 Max Daily Loss: 5%</li>
              <li>💣 Max Total Loss: 10%</li>
              <li>📅 Phase 1: 30 Days</li>
              <li>🔁 Phase 2: 60 Days, 5% Target</li>
              <li>💼 Profit Split: 80%</li>
              <li>💰 Refund after first payout</li>
            </ul>
            <a href="/checkout" className="block text-center bg-gold text-black py-2 rounded hover:opacity-90">Start Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}