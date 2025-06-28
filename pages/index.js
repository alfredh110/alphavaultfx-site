import { useState } from 'react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white relative">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-blue-900/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center">
          <img src="/logo.png" alt="AlphaVaultFX" className="w-10 h-10" />
          <span className="ml-2 font-bold text-lg">AlphaVaultFX</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-blue-300">Home</a>
          <a href="#objectives" className="hover:text-blue-300">Objectives</a>
          <a href="#benefits" className="hover:text-blue-300">Benefits</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">☰</button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-blue-900/90 p-4 space-y-2 text-center">
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#objectives" onClick={() => setMenuOpen(false)}>Objectives</a>
          <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero */}
      <section id="hero" className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Grow & Monetize Your Demo Trading</h1>
        <p className="max-w-2xl mx-auto text-blue-100 mb-6">
          Master your trading skills on our funded platform. Up to 90% profit split and capital of up to $200,000.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/challenge" className="bg-white text-blue-900 font-semibold px-6 py-2 rounded hover:bg-blue-100">Get Funded</a>
          <a href="/trial" className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-900">Free Trial</a>
        </div>
      </section>

      {/* Objectives */}
      <section id="objectives" className="py-16 bg-blue-800/70">
        <h2 className="text-3xl font-bold text-center mb-8">Trading Objectives</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Evaluation', details: ['Profit Target: 10%', 'Max Loss: 5%', 'Trading Period: 30 days'] },
            { title: 'Express', details: ['Profit Target: 8%', 'Max Loss: 4%', 'Faster Payouts'] },
            { title: 'Direct Funding', details: ['Instant Access', 'No Evaluation', 'Withdraw Anytime'] }
          ].map((item, idx) => (
            <div key={idx} className="bg-blue-700 p-6 rounded-lg shadow hover:shadow-xl transition transform hover:scale-105">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <ul className="text-sm text-blue-100 space-y-1">
                {item.details.map((d, i) => <li key={i}>✅ {d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 bg-gradient-to-b from-blue-900 to-blue-800">
        <h2 className="text-3xl font-bold text-center mb-8">Why Trade With AlphaVaultFX?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-blue-700 p-6 rounded-lg shadow hover:shadow-xl">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="font-semibold mb-2">Fast Funding</h3>
            <p className="text-blue-100">Achieve objectives & access capital quickly.</p>
          </div>
          <div className="bg-blue-700 p-6 rounded-lg shadow hover:shadow-xl">
            <div className="text-4xl mb-2">🌐</div>
            <h3 className="font-semibold mb-2">Global Support</h3>
            <p className="text-blue-100">Multilingual support 24/7.</p>
          </div>
          <div className="bg-blue-700 p-6 rounded-lg shadow hover:shadow-xl">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="font-semibold mb-2">90% Profit Split</h3>
            <p className="text-blue-100">Keep more of what you earn.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-blue-100 mb-6">We’re here to support your trading journey — contact us anytime.</p>
        <a href="mailto:support@alphavaultfx.com" className="bg-white text-blue-900 font-semibold px-6 py-2 rounded hover:bg-blue-100">Email Us</a>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-blue-200 text-sm">
        © {new Date().getFullYear()} AlphaVaultFX. All rights reserved.
      </footer>
    </div>
  );
}
