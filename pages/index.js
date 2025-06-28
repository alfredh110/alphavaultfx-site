'use client';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Trustpilot
    const trustScript = document.createElement('script');
    trustScript.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    trustScript.async = true;
    document.body.appendChild(trustScript);

    // TradingView
    const tvScript = document.createElement('script');
    tvScript.src = 'https://s3.tradingview.com/tv.js';
    tvScript.async = true;
    tvScript.onload = () => {
      new window.TradingView.widget({
        container_id: 'tradingview_alpha',
        width: '100%',
        height: 500,
        symbol: 'US30',
        interval: '1',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true
      });
    };
    document.body.appendChild(tvScript);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-blue-900/80 sticky top-0 z-50">
        <div className="flex items-center">
          <img src="/logo.png" alt="AlphaVaultFX" className="w-10 h-10" />
          <span className="ml-2 font-bold text-lg">AlphaVaultFX</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#hero" className="hover:text-blue-300">Home</a>
          <a href="#objectives" className="hover:text-blue-300">Objectives</a>
          <a href="#benefits" className="hover:text-blue-300">Benefits</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-blue-800 p-4 text-center space-y-2">
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#objectives" onClick={() => setMenuOpen(false)}>Objectives</a>
          <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero */}
      <section id="hero" className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Grow & Monetize Your Demo Trading</h1>
        <p className="max-w-xl mx-auto text-blue-100 mb-6">Master trading on our funded platform. 90% profit split and up to $200,000 capital.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/challenge" className="bg-white text-blue-900 font-bold px-6 py-2 rounded hover:bg-blue-100">Get Funded</a>
          <a href="/trial" className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-900">Free Trial</a>
        </div>
      </section>

      {/* TradingView */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-4">Live Market Chart</h2>
        <div id="tradingview_alpha" className="max-w-5xl mx-auto"></div>
      </section>

      {/* Objectives */}
      <section id="objectives" className="py-16 bg-blue-800">
        <h2 className="text-3xl font-bold text-center mb-8">Trading Objectives</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Evaluation', details: ['Profit Target: 10%', 'Max Loss: 5%', '30 days'] },
            { title: 'Express', details: ['Profit Target: 8%', 'Max Loss: 4%', 'Fast Payouts'] },
            { title: 'Direct', details: ['No Evaluation', 'Instant Access', 'Withdraw Anytime'] }
          ].map((obj, idx) => (
            <div key={idx} className="bg-blue-700 p-6 rounded shadow hover:shadow-lg">
              <h3 className="font-bold text-lg mb-2">{obj.title}</h3>
              <ul className="text-sm space-y-1">
                {obj.details.map((d, i) => <li key={i}>✅ {d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why AlphaVaultFX?</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-700 p-6 rounded shadow">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="font-semibold mb-2">Fast Funding</h3>
            <p>Get funded fast, access capital quickly.</p>
          </div>
          <div className="bg-blue-700 p-6 rounded shadow">
            <div className="text-4xl mb-2">🌐</div>
            <h3 className="font-semibold mb-2">Global Support</h3>
            <p>24/7 multilingual support.</p>
          </div>
          <div className="bg-blue-700 p-6 rounded shadow">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="font-semibold mb-2">90% Split</h3>
            <p>Keep more of your profits.</p>
          </div>
        </div>
      </section>

      {/* Trustpilot */}
      <section className="py-12 text-center bg-blue-900">
        <h2 className="text-3xl font-bold mb-4">What Traders Say</h2>
        <div className="trustpilot-widget"
             data-locale="en-US"
             data-template-id="539adbd6dec7e10e686debee"
             data-businessunit-id="YOUR_TRUSTPILOT_ID"
             data-style-height="500px"
             data-style-width="100%"
             data-theme="dark">
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-6">Questions? Contact our team anytime.</p>
        <a href="mailto:support@alphavaultfx.com" className="bg-white text-blue-900 font-bold px-6 py-2 rounded hover:bg-blue-100">Email Us</a>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} AlphaVaultFX. All rights reserved.
      </footer>
    </div>
  );
}
