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
    </div>
  );
}