import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new TradingView.widget({
        container_id: 'tradingview_chart',
        autosize: true,
        symbol: 'US30',
        interval: '60',
        timezone: 'Etc/UTC',
        theme: isDark ? 'dark' : 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: isDark ? '#191919' : '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
      });
    };
    document.body.appendChild(script);
  }, [isDark]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">AlphaVaultFX</h1>
        <button
          className="mt-4 py-2 px-4 rounded bg-blue-600 dark:bg-blue-400 text-white"
          onClick={() => setIsDark(!isDark)}
        >
          Toggle {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center">
        <p className="mb-4">Your trusted proprietary trading firm. Instant funding. No hidden rules.</p>
        <div id="tradingview_chart" className="w-full max-w-4xl h-96"></div>
        <div className="mt-6 flex space-x-4">
          <Link href="/about">
            <a className="bg-blue-600 dark:bg-blue-400 text-white py-2 px-4 rounded shadow">Learn More</a>
          </Link>
          <Link href="/start">
            <a className="bg-blue-600 dark:bg-blue-400 text-white py-2 px-4 rounded shadow">Start Trading</a>
          </Link>
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} AlphaVaultFX
      </footer>
    </div>
  );
}
