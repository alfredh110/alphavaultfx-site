// pages/index.tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to AlphaVaultFX</h1>
      <p className="text-gray-600 mb-6">Your trusted proprietary trading firm.</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  )
}
