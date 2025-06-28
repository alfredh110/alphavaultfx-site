import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Logo */}
      <Image src="/logo.png" alt="AlphaVaultFX Logo" width={200} height={200} />

      {/* Heading */}
      <h1 className="text-3xl font-bold mt-4 text-blue-900">Welcome to AlphaVaultFX</h1>

      {/* Subheading */}
      <p className="text-blue-600 mt-2">Grow & Monetize Your Trading</p>

      {/* Call to Action */}
      <button className="mt-6 px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  );
}
