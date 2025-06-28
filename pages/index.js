import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Image src="/logo.png" alt="AlphaVaultFX Logo" width={200} height={200} />
      <h1 className="text-3xl font-bold text-blue-900 mt-4">Welcome to AlphaVaultFX</h1>
      <p className="text-blue-500">Grow & Monetize Your Trading</p>
      <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}
