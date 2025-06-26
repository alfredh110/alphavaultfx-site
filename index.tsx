// /pages/index.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-serif text-gold">AlphaVaultFX</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:text-gold">Home</a>
          <a href="/challenge" className="hover:text-gold">Plans</a>
          <a href="/dashboard" className="hover:text-gold">Dashboard</a>
          <a href="mailto:support@alphavaultfx.com" className="hover:text-gold">Support</a>
        </nav>
      </header>

      <main className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Unlock Elite Funding. Dominate the Markets.</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          AlphaVaultFX is built for serious traders tired of shady firms. 100% transparency. Real payouts. Real opportunity.
        </p>
        <a href="/challenge" className="bg-gold text-black px-6 py-3 rounded hover:opacity-90">Start Your Challenge</a>
      </main>

      <section className="p-10 text-center border-t border-gray-800">
        <h3 className="text-3xl font-semibold mb-4">Choose Your Challenge</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[10000, 50000, 100000, 200000].map((amount) => (
            <div key={amount} className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-bold mb-2">${amount.toLocaleString()} Challenge</h4>
              <ul className="text-left text-gray-400 text-sm space-y-1">
                <li>✅ Profit Target: 10%</li>
                <li>📉 Max Daily Loss: 5%</li>
                <li>💣 Max Total Loss: 10%</li>
                <li>📅 Time Limit: 30 Days (Phase 1)</li>
                <li>💼 Phase 2: 60 Days / 5% Target</li>
                <li>💰 Profit Split: 80%</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center p-4 border-t border-gray-800 text-gray-600">
        &copy; {new Date().getFullYear()} AlphaVaultFX. All rights reserved.
      </footer>
    </div>
  );
}