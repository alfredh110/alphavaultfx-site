import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
        Welcome to <span className="text-blue-600">AlphaVaultFX</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        Your trusted proprietary trading firm. Explore our platform and start your trading journey today.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/about">
          <a className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-6 rounded shadow">
            About Us
          </a>
        </Link>

        <Link href="/dashboard">
          <a className="bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-3 px-6 rounded shadow">
            Dashboard
          </a>
        </Link>

        <Link href="/contact">
          <a className="bg-gray-800 hover:bg-gray-900 transition-colors text-white font-semibold py-3 px-6 rounded shadow">
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
}
