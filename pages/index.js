export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between p-4 bg-blue-950 bg-opacity-50 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center">
          <img src="/logo.png" alt="AlphaVaultFX Logo" className="w-10 h-10" />
          <span className="ml-2 font-bold text-lg">AlphaVaultFX</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-blue-300 transition">How it works</a>
          <a href="#" className="hover:text-blue-300 transition">FAQ</a>
          <a href="#" className="hover:text-blue-300 transition">Testimonials</a>
          <a href="#" className="hover:text-blue-300 transition">About</a>
          <a href="#" className="hover:text-blue-300 transition">Client Area</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-30 pointer-events-none"></div>
        <p className="text-blue-300 font-semibold mb-2 animate-fadeIn">SINCE 2025</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight animate-slideInDown">
          GROW & MONETIZE <br /> YOUR DEMO TRADING
        </h1>
        <p className="max-w-xl text-gray-300 mb-6 animate-fadeIn">
          Master your trading skills on our platform. Improve your trading on a demo account 
          and earn up to 90% of your simulated profits!
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition">
            AlphaVault Challenge
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-6 py-2 rounded transition">
            Free Trial
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 bg-blue-800 bg-opacity-50 backdrop-blur">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: '📈', title: '4 Trading Platforms', desc: 'MetaTrader, cTrader & more supported.' },
            { icon: '🎓', title: 'Academy Access', desc: 'Boost your skills with exclusive training.' },
            { icon: '💡', title: 'Performance Coach', desc: 'Guidance from our trading experts.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-blue-700 rounded-lg p-6 hover:bg-blue-600 transition transform hover:scale-105">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Global Customer Support</h2>
        <p className="text-gray-300 mb-6">Available in 18 languages, 24/7 assistance</p>
        <div className="flex flex-wrap justify-center gap-3 text-xl">
          {['🇺🇸','🇬🇧','🇪🇸','🇫🇷','🇩🇪','🇮🇹','🇯🇵','🇧🇷'].map((flag, i) => (
            <span key={i} className="animate-pulse">{flag}</span>
          ))}
          <span>+ more</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 bg-opacity-50 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AlphaVaultFX. All rights reserved.
      </footer>
    </div>
  );
}
