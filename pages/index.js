export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Welcome to AlphaVaultFX</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your trusted proprietary trading firm.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
