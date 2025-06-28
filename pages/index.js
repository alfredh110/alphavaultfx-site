import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        setMenuOpen(false);
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white relative">
      <div className="absolute inset-0 bg-blue-900 opacity-70 z-0"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex justify-between items-center p-4 sticky top-0 bg-blue-900/80 backdrop-blur-md shadow">
        <div className="flex items-center">
          <img src="/logo.png" alt="AlphaVaultFX" className="w-10 h-10" />
          <span className="ml-2 font-bold text-lg">AlphaVaultFX</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-blue-300 transition">Home</a>
          <a href="#features" className="hover:text-blue-300 transition">Features</a>
          <a href="#talent" className="hover:text-blue-300 transition">Talent</a>
          <a href="#objectives" className="hover:text-blue-300 transition">Objectives</a>
          <a href="#faq" className="hover:text-blue-300 transition">FAQ</a>
          <a href="#contact" className="hover:text-blue-300 transition">Contact</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-blue-900/90 backdrop-blur-md p-4 space-y-4 text-center z-10 relative">
          <a href="#hero" className="block">Home</a>
          <a href="#features" className="block">Features</a>
          <a href="#talent" className="block">Talent</a>
          <a href="#objectives" className="block">Objectives</a>
          <a href="#faq" className="block">FAQ</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Grow & Monetize Your Demo Trading</h1>
        <p className="max-w-2xl text-blue-100 mb-6">Master trading on our platform. Hit objectives and get funded with up to 90% profit share.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded hover:bg-blue-100 transition">Get Started</button>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-900 transition">Learn More</button>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative z-10 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why AlphaVaultFX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-blue-700 rounded-lg p-6 shadow hover:shadow-xl transition transform hover:scale-105">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="font-semibold mb-2">Fast Funding</h3>
            <p className="text-blue-100">Achieve objectives, get funded fast, no hidden fees.</p>
          </div>
          <div className="bg-blue-700 rounded-lg p-6 shadow hover:shadow-xl transition transform hover:scale-105">
            <div className="text-4xl mb-2">🌐</div>
            <h3 className="font-semibold mb-2">Global Support</h3>
            <p className="text-blue-100">24/7 multilingual support for traders worldwide.</p>
          </div>
          <div className="bg-blue-700 rounded-lg p-6 shadow hover:shadow-xl transition transform hover:scale-105">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="font-semibold mb-2">90% Profit Split</h3>
            <p className="text-blue-100">Keep more of your profits with our top-tier model.</p>
          </div>
        </div>
      </section>

      {/* TALENT / OBJECTIVES - (Same as before, insert your sections here or keep existing ones) */}

      {/* FAQ */}
      <section id="faq" className="relative z-10 py-16 bg-blue-800/30">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "How do I get funded?", a: "Meet our trading objectives in the challenge and verification to qualify." },
            { q: "What platforms can I use?", a: "We support MetaTrader, cTrader, and more — choose what fits you best." },
            { q: "How fast is the payout?", a: "Withdrawals are processed within 1-2 business days after approval." }
          ].map((item, index) => (
            <div key={index} className="bg-blue-900 rounded p-4">
              <button onClick={() => toggleFaq(index)} className="w-full text-left font-semibold">
                {item.q}
              </button>
              {faqOpen === index && (
                <p className="mt-2 text-blue-100">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative z-10 py-16 bg-blue-900/20">
        <h2 className="text-3xl font-bold text-center mb-8">What Traders Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            { name: "Alex", text: "AlphaVaultFX helped me scale my trading and the support is top-notch!" },
            { name: "Maria", text: "I love the fast funding process and transparency of rules." },
            { name: "Lee", text: "Highly recommend for any trader looking for real growth." }
          ].map((t, i) => (
            <div key={i} className="bg-blue-800 rounded p-4 shadow hover:shadow-lg transition">
              <p className="italic">“{t.text}”</p>
              <p className="mt-2 text-sm text-blue-200">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section id="contact" className="relative z-10 py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-blue-100 max-w-lg mx-auto mb-6">Start your journey. Reach out today!</p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded hover:bg-blue-100 transition">Contact Us</button>
      </section>

      <footer className="relative z-10 py-6 text-center text-sm text-blue-200 space-y-2">
        <div>
          <a href="#hero" className="hover:text-white mx-2">Home</a>|
          <a href="#features" className="hover:text-white mx-2">Features</a>|
          <a href="#talent" className="hover:text-white mx-2">Talent</a>|
          <a href="#objectives" className="hover:text-white mx-2">Objectives</a>|
          <a href="#faq" className="hover:text-white mx-2">FAQ</a>|
          <a href="#contact" className="hover:text-white mx-2">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} AlphaVaultFX. All rights reserved.</div>
      </footer>
    </div>
  );
}
