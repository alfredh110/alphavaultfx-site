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
      
  {/* Account Types Section */}
<section className="my-16 max-w-5xl mx-auto px-4">
  <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
    Show Us Your Talent and Be Rewarded
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="font-bold text-blue-900">Evaluation</h3>
      <ul className="text-sm text-gray-600 mt-2">
        <li>✔ Flexible rules</li>
        <li>✔ Real market conditions</li>
        <li>✔ Profit target 10%</li>
      </ul>
    </div>
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="font-bold text-blue-900">Express</h3>
      <ul className="text-sm text-gray-600 mt-2">
        <li>✔ Fast track funding</li>
        <li>✔ Simple objectives</li>
        <li>✔ Profit target 8%</li>
      </ul>
    </div>
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="font-bold text-blue-900">Direct Funding</h3>
      <ul className="text-sm text-gray-600 mt-2">
        <li>✔ No evaluation</li>
        <li>✔ Instant funding</li>
        <li>✔ Withdraw anytime</li>
      </ul>
    </div>
  </div>
</section>

    </div>
  );
}
