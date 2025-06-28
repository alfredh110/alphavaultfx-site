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
      // eslint-disable-next-line no-undef
      new TradingView.widget({
        container_id: 'tradingview_chart',
        autosize: true,
        symbol: 'US30',
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
  }, [isDark]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold mb-2">AlphaVaultFX</h1>
        <button
          className="py-2 px-4 rounded bg-blue-600 dark:bg-blue-400 text-white"
          onClick={() => setIsDark(!isDark)}
        >
          Toggle {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center">
        <p className="mb-4">Your trusted proprietary trading firm. Instant funding. No hidden rules.</p>
        <div id="tradingview_chart" className="w-full max-w-4xl h-96 mb-4"></div>
        <div className="space-x-4">
          <Link href="/about">
            <a className="bg-blue-600 dark:bg-blue-400 text-white py-2 px-4 rounded shadow hover:bg-blue-700 dark:hover:bg-blue-500">
              Learn More
            </a>
          </Link>
          <Link href="/start">
            <a className="bg-blue-600 dark:bg-blue-400 text-white py-2 px-4 rounded shadow hover:bg-blue-700 dark:hover:bg-blue-500">
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
