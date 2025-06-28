export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src="/logo.png" alt="AlphaVaultFX Logo" className="w-48 h-48 mb-4" />
      <h1 className="text-3xl font-bold text-blue-900">Welcome to AlphaVaultFX</h1>
      <p className="text-blue-600">Grow & Monetize Your Trading</p>
      <button className="bg-blue-900 text-white px-4 py-2 rounded mt-4">Get Started</button>

      {/* About Section */}
      <section className="my-16 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Enhance Your Trading Skills</h2>
        <p className="text-gray-600">
          AlphaVaultFX is committed to helping traders succeed by providing a funded account platform with fair rules and excellent conditions.
          Show your talent, meet our trading objectives, and we’ll fund your trading journey!
        </p>
      </section>
    </div>
  );
}
