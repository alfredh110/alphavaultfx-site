import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [symbol, setSymbol] = useState('US30');

  // Load saved dark mode preference
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
    }
  }, []);

  // Apply dark mode + save preference
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

  // Load TradingView widget
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new TradingView.widget({
        container_id: 'tradingview_chart',
        autosize: true,
        symbol: symbol,
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
      <header className="text-center py-6 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">AlphaVaultFX</h1>
        <div className="space-x-2 mt-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition"
          >
            {isDark ? 'Light' : 'Dark'} Mode
          </button>
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="text-black p-2 rounded"
          >
            <option value="US30">US30</option>
            <option value="NAS100">NAS100</option>
            <option value="SPX500">SPX500</option>
          </select>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center space-y-6 p-4">
        <p>Your trusted proprietary trading firm. Instant funding. No hidden rules.</p>
        <div id="tradingview_chart" className="w-full max-w-5xl h-96"></div>

        <div className="space-x-4">
          <Link href="/about">
            <a className="py-2 px-4 rounded shadow bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition">Learn More</a>
          </Link>
          <Link href="/start">
            <a className="py-2 px-4 rounded shadow bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition">Start Trading</a>
          </Link>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-600 dark:text-gray-400 p-4">
        &copy; {new Date().getFullYear()} AlphaVaultFX
      </footer>
    </div>
  );
}
