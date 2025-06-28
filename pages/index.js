'use client';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Trustpilot widget
    const trustpilot = document.createElement('script');
    trustpilot.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    trustpilot.async = true;
    document.body.appendChild(trustpilot);

    // TradingView widget
    const tvScript = document.createElement('script');
    tvScript.src = 'https://s3.tradingview.com/tv.js';
    tvScript.async = true;
    document.body.appendChild(tvScript);

    tvScript.onload = () => {
      if (window.TradingView) {
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
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
      <nav className="flex justify-between items-center p-4 bg-blue-900/80 sticky top-0 z-10">
        <div className="flex items-center">
          <img src="/logo.png" alt="AlphaVaultFX" className="w-10 h-10" />
          <span className="ml-2 font-bold text-lg">AlphaVaultFX</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#hero">Home</a>
          <a href="#objectives">Objectives</a>
          <a href="#benefits">Benefits</a>
          <a href="#contact">Contact</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">☰</button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-blue-800 p-4 text-center space-y-2">
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#objectives" onClick={() => setMenuOpen(false)}>Objectives</a>
          <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      <section id="hero" className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Grow & Monetize Your Demo Trading</h1>
        <p className="text-blue-100 mb-6">Up to 90% profit split and $200,000 capital funding.</p>
        <div className="flex justify-center gap-4">
          <a href="/challenge" className="bg-white text-blue-900 px-6 py-2 rounded">Get Funded</a>
          <a href="/trial" className="border border-white px-6 py-2 rounded">Free Trial</a>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-4">Live Market Chart</h2>
        <div id="tradingview_alpha" className="mx-auto" style={{ maxWidth: '1000px' }}></div>
      </section>

      <section id="objectives" className="py-16 bg-blue-800/70">
        <h2 className="text-3xl font-bold text-center mb-8">Trading Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: 'Evaluation', details: ['Profit Target: 10%', 'Max Loss: 5%', '30 Days'] },
            { title: 'Express', details: ['Profit Target: 8%', 'Max Loss: 4%', 'Faster Payouts'] },
            { title: 'Direct Funding', details: ['Instant Access', 'No Evaluation', 'Withdraw Anytime'] }
          ].map((obj, i) => (
            <div key={i} className="bg-blue-700 p-6 rounded shadow">
              <h3 className="font-bold mb-2">{obj.title}</h3>
              <ul className="text-sm text-blue-100 space-y-1">
                {obj.details.map((d, j) => <li key={j}>✅ {d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Trade With AlphaVaultFX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-blue-700 p-6 rounded shadow">🚀 <h3>Fast Funding</h3><p>Quick capital access.</p></div>
          <div className="bg-blue-700 p-6 rounded shadow">🌐 <h3>Global Support</h3><p>24/7 multilingual support.</p></div>
          <div className="bg-blue-700 p-6 rounded shadow">💰 <h3>90% Profit Split</h3><p>Keep more of what you earn.</p></div>
        </div>
      </section>

      <section className="py-12 bg-blue-900 text-center">
        <h2 className="text-3xl font-bold mb-4">What Traders Say</h2>
        <div className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="539adbd6dec7e10e686debee"
          data-businessunit-id="YOUR_TRUSTPILOT_BUSINESS_UNIT_ID"
          data-style-height="500px"
          data-style-width="100%"
          data-theme="dark">
        </div>
      </section>

      <section id="contact" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-blue-100 mb-4">We’re here to help — email us anytime.</p>
        <a href="mailto:support@alphavaultfx.com" className="bg-white text-blue-900 px-6 py-2 rounded">Email Us</a>
      </section>

      <footer className="py-4 text-center text-blue-200 text-sm">
        © {new Date().getFullYear()} AlphaVaultFX. All rights reserved.
      </footer>
    </div>
  );
}
