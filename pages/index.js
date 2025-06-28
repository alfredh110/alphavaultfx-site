export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="AlphaVaultFX Logo" className="w-12 h-12" />
          <span className="ml-2 font-bold text-lg">AlphaVaultFX</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-blue-300">How it works</a>
          <a href="#" className="hover:text-blue-300">FAQ</a>
          <a href="#" className="hover:text-blue-300">Testimonials</a>
          <a href="#" className="hover:text-blue-300">About</a>
          <a href="#" className="hover:text-blue-300">Client Area</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <p className="text-blue-300 font-semibold mb-2">SINCE 2025</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          GROW & MONETIZE <br /> YOUR DEMO TRADING
        </h1>
        <p className="max-w-xl text-gray-300 mb-6">
          Master your trading skills on our platform. Improve your trading on a demo account 
          and earn up to 90% of your simulated profits!
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            AlphaVault Challenge
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-6 py-2 rounded">
            Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
