import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [symbol, setSymbol] = useState('US30');

  useEffect(() => {
    // Load saved dark mode preference
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line no-undef
      new TradingView.widget({
        container_id: 'tradingview_chart',
        autosize: true,
        symbol,
        interval: '60',
        timezone: 'Etc/UTC',
        theme: isDark ? 'dark' : 'light',
        style: '1',
        toolbar_bg: isDark ? '#191919' : '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
      });
    };
    document.body.appendChild(script);
  }, [isDark, symbol]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-500">
      <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-2xl font-bold">AlphaVaultFX</h1>
        <div className="space-x-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="py-2 px-4 rounded bg-blue-600 dark:bg-blue-400 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition"
          >
            {isDark ? 'Light' : 'Dark'} Mode
          </button>
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="py-2 px-3 rounded border dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="US30">US30</option>
            <option value="NASDAQ:GOOGL">GOOGL</option>
            <option value="NASDAQ:AAPL">AAPL</option>
            <option value="NASDAQ:MSFT">MSFT</option>
            <option value="EURUSD">EURUSD</option>
          </select>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <p className="mb-4 text-center">Your trusted proprietary trading firm. Instant funding. No hidden rules.</p>
        <div id="tradingview_chart" className="w-full max-w-4xl h-96 mb-6"></div>
        <div className="space-x-4">
          <Link href="/about">
            <a className="bg-blue-600 dark:bg-blue-400 text-white py-2 px-4 rounded shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition">
              Learn More
            </a>
          </Link>
          <Link href="/start">
            <a className="bg-blue-600 dark:bg-blue-400 text-white py-2 px-4 rounded shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition">
              Start Trading
            </a>
          </Link>
        </div>
      </main>

      <footer className="text-center py-4 text-gray-700 dark:text-gray-400">
        &copy; {new Date().getFullYear()} AlphaVaultFX
      </footer>
    </div>
  );
}
