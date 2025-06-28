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
