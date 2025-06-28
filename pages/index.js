import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white text-center py-20">
        <div className="container mx-auto">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="AlphaVaultFX Logo" width={80} height={80} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Grow & Monetize Your Demo Trading</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Master your trading skills on our simulated trading platform. Show your skills. Get funded. Join AlphaVaultFX.
          </p>
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold">
            Start Your Challenge
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose AlphaVaultFX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Funded Accounts</h3>
              <p>Prove your skills and get funded with up to $200,000 capital.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Flexible Trading Objectives</h3>
              <p>Transparent rules designed for traders to succeed.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Global Community</h3>
              <p>Join traders from around the world and grow together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What People Say About AlphaVaultFX</h2>
          <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded shadow">
            <p className="italic">"AlphaVaultFX helped me elevate my trading skills. The funded account changed my journey!"</p>
            <p className="mt-2 font-semibold">— Trader from Kenya</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Discover your potential. Become an AlphaVaultFX trader.</h2>
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>
      </section>
    </div>
  );
}
