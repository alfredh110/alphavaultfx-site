import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      new TradingView.widget({
        container_id: 'tradingview_chart',
        autosize: true,
        symbol: 'NASDAQ:AAPL',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
          Welcome to <span className="text-blue-600">AlphaVaultFX</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Your trusted proprietary trading firm. Explore our platform and start your trading journey today.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <Link href="/about">
          <a className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-6 rounded shadow">
            About Us
          </a>
        </Link>
        <Link href="/dashboard">
          <a className="bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 px-6 rounded shadow">
            Dashboard
          </a>
        </Link>
        <Link href="/contact">
          <a className="bg-gray-800 hover:bg-gray-900 transition text-white font-semibold py-3 px-6 rounded shadow">
            Contact
          </a>
        </Link>
      </div>

      <div className="w-full max-w-4xl h-96">
        <div id="tradingview_chart" className="w-full h-full rounded shadow" />
      </div>
    </div>
  );
}
