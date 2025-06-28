import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

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
        theme: isDark ? 'dark' : 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: isDark ? '#1f2937' : '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
      });
    };
    document.body.appendChild(script);
  }, [isDark]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-blue-600 dark:text-blue-400">AlphaVaultFX</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          Your trusted proprietary trading firm.
        </p>
      </header>

      <button
        onClick={() => setIsDark(!isDark)}
        className="mb-6 px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded shadow hover:opacity-80 transition"
      >
        Toggle {isDark ? 'Light' : 'Dark'} Mode
      </button>

      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <Link href="/about">
          <a className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 transition text-white font-semibold py-3 px-6 rounded shadow">
            About Us
          </a>
        </Link>
        <Link href="/dashboard">
          <a className="bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-400 transition text-white font-semibold py-3 px-6 rounded shadow">
            Dashboard
          </a>
        </Link>
        <Link href="/contact">
          <a className="bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 transition text-white font-semibold py-3 px-6 rounded shadow">
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
