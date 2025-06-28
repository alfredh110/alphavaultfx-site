import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold">Welcome to AlphaVaultFX</h1>
      <p className="mt-2">Your trusted proprietary trading firm. Instant funding. No hidden rules.</p>

      <nav className="mt-6 space-x-4">
        <Link href="/about" className="text-blue-600 hover:underline">About</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
        <Link href="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
      </nav>
    </div>
  );
}