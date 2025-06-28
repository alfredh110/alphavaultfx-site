export default function Home() {
  return (
    <div className="bg-blue-900 min-h-screen text-white">
      
      {/* Header with logo */}
      <header className="flex items-center p-4">
        <img src="/logo.png" alt="AlphaVaultFX Logo" className="w-12 h-12" />
        <span className="ml-2 text-xl font-bold">AlphaVaultFX</span>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Grow & Monetize Your Demo Trading
        </h1>
        <p className="max-w-2xl text-blue-100 mb-6">
          Master your trading skills on our platform. Meet trading objectives, and get funded with up to 90% profit share.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded hover:bg-blue-100 transition">
            Get Started
          </button>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-900 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-blue-800">
        <h2 className="text-3xl font-bold text-center mb-8">Why AlphaVaultFX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-blue-700 rounded-lg p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="font-semibold mb-2">Fast Funding</h3>
            <p className="text-blue-100">Achieve your objectives and get funded quickly with no hidden fees.</p>
          </div>
          <div className="bg-blue-700 rounded-lg p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-2">🌐</div>
            <h3 className="font-semibold mb-2">Global Support</h3>
            <p className="text-blue-100">Our team is here 24/7 to support you on your trading journey.</p>
          </div>
          <div className="bg-blue-700 rounded-lg p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="font-semibold mb-2">90% Profit Split</h3>
            <p className="text-blue-100">Keep more of what you earn with our high profit share model.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} AlphaVaultFX. All rights reserved.
      </footer>

    </div>
  )
}
