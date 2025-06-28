import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [symbol, setSymbol] = useState('US30');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
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
      new TradingView.widget({
        container_id: 'tradingview_chart',
        symbol: symbol,
        autosize: true,
        theme: isDark ? 'dark' : 'light',
        timezone: 'Etc/UTC',
        style: '1',
        toolbar_bg: isDark ? '#191919' : '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
      });
    };
    document.body.appendChild(script);
  }, [isDark, symbol]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col transition-colors duration-500">
      <header className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">AlphaVaultFX</h1>
        <nav className="space-x-4">
          <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">About</Link>
          <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact</Link>
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center space-y-6 p-6">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">Welcome to AlphaVaultFX</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Your trusted proprietary trading firm. Instant funding. No hidden rules.</p>
          <div className="space-x-4">
            <Link href="/learn" className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Learn More</Link>
            <Link href="/start" className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Start Trading</Link>
          </div>
        </section>

        <div className="w-full max-w-4xl">
          <div className="mb-4">
            <label className="text-gray-700 dark:text-gray-300">Choose symbol: </label>
            <select
              className="border rounded p-1 dark:bg-gray-700 dark:text-white"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            >
              <option value="US30">US30</option>
              <option value="NAS100">NAS100</option>
              <option value="SPX500">SPX500</option>
              <option value="EURUSD">EURUSD</option>
              <option value="GBPUSD">GBPUSD</option>
            </select>
          </div>
          <div id="tradingview_chart" className="w-full" style={{ height: 500 }}></div>
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} AlphaVaultFX
      </footer>
    </div>
  );
}
