import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

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
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">AlphaVaultFX</h1>
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 hover:opacity-80 transition"
        >
          Toggle {isDark ? 'Light' : 'Dark'}
        </button>
      </header>

      <main className="flex-grow">
        <section className="text-center py-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Dominate the Markets with <span className="text-blue-600 dark:text-blue-400">AlphaVaultFX</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Transparent funded trading challenges. No hidden rules. Instant funding.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard">
              <a className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded shadow">
                Start Trading
              </a>
            </Link>
            <Link href="/about">
              <a className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold py-3 px-6 rounded shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                Learn More
              </a>
            </Link>
          </div>
        </section>

        <section className="py-10 bg-gray-100 dark:bg-gray-800">
          <h3 className="text-2xl font-bold text-center mb-6">Why AlphaVaultFX?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-4 bg-white dark:bg-gray-700 rounded shadow text-center">
              <h4 className="font-semibold m

