import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        setMenuOpen(false); // Close menu on click
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-70 z-0"></div>

      {/* Nav */}
      <nav className="relative z-10 flex justify-between items-center p-4 sticky top-0 bg-blue-900/80 backdrop-blur-md">
        <div className="flex items-center">
          <img src="/logo.png" alt="AlphaVaultFX" className="w-10 h-10" />
          <span className="ml-2 font-bold text-lg">AlphaVaultFX</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-blue-300">Home</a>
          <a href="#features" className="hover:text-blue-300">Features</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
          <a href="/client" className="hover:text-blue-300 font-semibold">Client Area</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900/90 backdrop-blur-md p-4 space-y-4 text-center z-10 relative">
          <a href="#hero" className="block">Home</a>
          <a href="#features" className="block">Features</a>
          <a href="#contact" className="block">Contact</a>
          <a href="/client" className="block font-semibold">Client Area</a>
        </div>
      )}

      {/* Hero */}
      <section id="hero" className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Grow & Monetize Your Demo Trading</h1>
        <p className="max-w-2xl text-blue-100 mb-6">Master your trading skills on our platform. Meet trading objectives, and get funded with up to 90% profit share.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded hover:bg-blue-100 transition">Get Started</button>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-900 transition">Learn More</button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why AlphaVaultFX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-blue-700 rounded-lg p-6 shadow hover:shadow-xl transition transform hover:scale-105">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="font-semibold mb-2">Fast Funding</h3>
            <p className="text-blue-100">Achieve objectives and get funded quickly with no hidden fees.</p>
          </div>
          <div className="bg-blue-700 rounded-lg p-6 shadow hover:shadow-xl transition transform hover:scale-105">
            <div className="text-4xl mb-2">🌐</div>
            <h3 className="font-semibold mb-2">Global Support</h3>
            <p className="text-blue-100">24/7 multilingual support to assist you anytime.</p>
          </div>
          <div className="bg-blue-700 rounded-lg p-6 shadow hover:shadow-xl transition transform hover:scale-105">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="font-semibold mb-2">90% Profit Split</h3>
            <p className="text-blue-100">Keep more of what you earn with our profit share model.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-blue-100 max-w-lg mx-auto mb-6">Ready to start your trading journey? Contact us today and let's grow together.</p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded hover:bg-blue-100 transition">Contact Us</button>
      </section>

      <footer className="relative z-10 py-4 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} AlphaVaultFX. All rights reserved.
      </footer>
    </div>
  );
}

{/* Talent and Be Rewarded Section */}
<section className="relative z-10 py-16 bg-blue-800/30">
  <h2 className="text-3xl font-bold text-center mb-10 text-white">Show Us Your Talent and Be Rewarded</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    <div className="bg-blue-900 rounded-lg p-6 shadow hover:shadow-xl transition transform hover:scale-105">
      <h3 className="text-white font-bold mb-2">Evaluation Process</h3>
      <p className="text-blue-100 mb-4 text-sm">✔ FTMO Challenge<br />✔ Verification</p>
      <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition">Learn More</button>
    </div>
    <div className="bg-teal-700 rounded-lg p-6 shadow hover:shadow-xl transition transform hover:scale-105">
      <h3 className="text-white font-bold mb-2">AlphaVaultFX Account</h3>
      <p className="text-blue-100 mb-4 text-sm">✔ Funded account<br />✔ Performance coaching<br />✔ Premium trading tools</p>
      <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded hover:bg-teal-100 transition">Learn More</button>
    </div>
    <div className="bg-orange-700 rounded-lg p-6 shadow hover:shadow-xl transition transform hover:scale-105">
      <h3 className="text-white font-bold mb-2">Pro Trader</h3>
      <p className="text-blue-100 mb-4 text-sm">✔ Direct funding<br />✔ Instant withdrawal<br />✔ Custom platform tools</p>
      <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded hover:bg-orange-100 transition">Learn More</button>
    </div>
  </div>
</section>

{/* Trading Objectives */}
<section className="relative z-10 py-16 bg-white text-blue-900">
  <h2 className="text-3xl font-bold text-center mb-8">Trading Objectives</h2>
  <div className="max-w-4xl mx-auto text-center mb-6">
    <p className="text-gray-700">Meet our trading objectives to unlock funding. Choose your plan and show your trading discipline!</p>
  </div>
  <div className="overflow-auto">
    <table className="w-full max-w-4xl mx-auto text-sm border-collapse">
      <thead>
        <tr className="bg-blue-900 text-white">
          <th className="p-2 border">Objective</th>
          <th className="p-2 border">Challenge</th>
          <th className="p-2 border">Verification</th>
          <th className="p-2 border">Trader</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-50">
          <td className="p-2 border">Trading Period</td>
          <td className="p-2 border">30 days</td>
          <td className="p-2 border">60 days</td>
          <td className="p-2 border">Unlimited</td>
        </tr>
        <tr>
          <td className="p-2 border">Profit Target</td>
          <td className="p-2 border">10%</td>
          <td className="p-2 border">5%</td>
          <td className="p-2 border">N/A</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="p-2 border">Max Loss</td>
          <td className="p-2 border">10%</td>
          <td className="p-2 border">10%</td>
          <td className="p-2 border">10%</td>
        </tr>
        <tr>
          <td className="p-2 border">Daily Loss</td>
          <td className="p-2 border">5%</td>
          <td className="p-2 border">5%</td>
          <td className="p-2 border">5%</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="text-center mt-6">
    <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Start Challenge</button>
  </div>
</section>

