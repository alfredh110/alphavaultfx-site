import { useEffect, useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      new TradingView.widget({
        container_id: 'tradingview_chart',
        autosize: true,
        symbol: 'US30',
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">AlphaVaultFX</h1>
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900"
        >
          Toggle {isDark ? 'Light' : 'Dark'}
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold mb-2">Dominate the markets</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Your trusted proprietary trading firm. Instant funding. No hidden rules.
        </p>
        <div className="flex space-x-4 mb-6">
          <a
            href="#"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-700 transition"
          >
            Start Trading
          </a>
          <a
            href="#"
            className="border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold py-2 px-4 rounded shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>

        <div id="tradingview_chart" className="w-full max-w-5xl h-96" />
      </main>

      <footer className="text-center p-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} AlphaVaultFX
      </footer>
    </div>
  );
}


