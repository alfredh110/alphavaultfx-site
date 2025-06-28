import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [symbol, setSymbol] = useState('USD');

  // Apply saved dark mode preference
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  // Apply dark mode class
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

  // TradingView chart
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
      <header className="flex justify-between items-center p-4 shadow-md dark:shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">AlphaVaultFX</h1>
        <button
          className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center space-y-6 p-4">
        <nav className="space-x-4">
          <Link href="/about"><a className="text-blue-600 dark:text-blue-400 hover:underline">About</a></Link>
          <Link href="/contact"><a className="text-blue-600 dark:text-blue-400 hover:underline">Contact</a></Link>
          <Link href="/learn"><a className="text-blue-600 dark:text-blue-400 hover:underline">Learn</a></Link>
          <Link href="/start"><a className="text-blue-600 dark:text-blue-400 hover:underline">Start Trading</a></Link>
        </nav>

        <div>
          <label className="mr-2">Choose symbol:</label>
          <select
            className="border rounded p-2 dark:bg-gray-800 dark:border-white"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EURUSD">EURUSD</option>
            <option value="AAPL">AAPL</option>
            <option value="TSLA">TSLA</option>
          </select>
        </div>

        <div id="tradingview_chart" className="w-full" style={{ height: 500 }}></div>
      </main>

      <footer className="p-4 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} AlphaVaultFX
      </footer>
    </div>
  );
}
