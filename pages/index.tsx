import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to AlphaVaultFX</h1>
      <p className="text-lg mb-6">Your trusted partner in proprietary trading challenges.</p>
      <div className="flex gap-4">
        <Link href="/dashboard">
          <a className="px-4 py-2 bg-blue-600 text-white rounded">Go to Dashboard</a>
        </Link>
        <Link href="/challenge">
          <a className="px-4 py-2 bg-green-600 text-white rounded">View Challenge</a>
        </Link>
      </div>
    </main>
  );
}