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

  {/* Trading Objectives Section */}
      <section className="my-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Trading Objectives</h2>
        <p className="text-gray-600 mb-6">
          Meet our trading objectives and unlock the opportunity to manage funded accounts. 
          Choose your preferred account size and targets!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-bold text-blue-900">10K Account</h3>
            <ul className="text-sm text-gray-600 mt-2">
              <li>✔ Profit target: 10%</li>
              <li>✔ Max loss: 5%</li>
              <li>✔ Trading period: 30 days</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-bold text-blue-900">50K Account</h3>
            <ul className="text-sm text-gray-600 mt-2">
              <li>✔ Profit target: 10%</li>
              <li>✔ Max loss: 5%</li>
              <li>✔ Trading period: 30 days</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-bold text-blue-900">100K Account</h3>
            <ul className="text-sm text-gray-600 mt-2">
              <li>✔ Profit target: 10%</li>
              <li>✔ Max loss: 5%</li>
              <li>✔ Trading period: 30 days</li>
            </ul>
          </div>
        </div>
      </section>
      
  {/* Trading Objectives Section */}
<section className="my-16 text-center">
  <h2 className="text-2xl font-bold text-blue-900 mb-4">Trading Objectives</h2>
  <p className="text-gray-600 max-w-xl mx-auto mb-6">
    Choose a trading objective that fits your style. Whether you're looking for a standard evaluation or direct funding, we provide the tools you need to succeed.
  </p>
  <div className="flex flex-col md:flex-row justify-center gap-6">
    <div className="border rounded p-4 shadow w-64">
      <h3 className="font-semibold text-blue-900 mb-2">Standard</h3>
      <ul className="text-left text-gray-700">
        <li>✅ Two-step evaluation</li>
        <li>✅ Profit target 10%</li>
        <li>✅ Max daily loss 5%</li>
      </ul>
    </div>
    <div className="border rounded p-4 shadow w-64">
      <h3 className="font-semibold text-blue-900 mb-2">Express</h3>
      <ul className="text-left text-gray-700">
        <li>✅ One-step evaluation</li>
        <li>✅ Profit target 8%</li>
        <li>✅ Max daily loss 4%</li>
      </ul>
    </div>
    <div className="border rounded p-4 shadow w-64">
      <h3 className="font-semibold text-blue-900 mb-2">Direct Funding</h3>
      <ul className="text-left text-gray-700">
        <li>✅ No evaluation</li>
        <li>✅ Instant funding</li>
        <li>✅ Withdraw anytime</li>
      </ul>
    </div>
  </div>
</section>

   {/* How You Benefit Section */}
<section className="my-16 py-12 bg-blue-50">
  <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
    Find Out How You Can Benefit with AlphaVaultFX
  </h2>
  <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
    
    <div className="bg-white rounded-lg shadow-lg p-6 w-72 text-center hover:shadow-xl transition">
      <div className="text-blue-900 text-4xl mb-4">
        🚀
      </div>
      <h3 className="font-semibold text-blue-900 mb-2">Advanced Tools</h3>
      <p className="text-gray-600">Get access to our premium trading tools and analytics to elevate your performance.</p>
    </div>
    
    <div className="bg-white rounded-lg shadow-lg p-6 w-72 text-center hover:shadow-xl transition">
      <div className="text-blue-900 text-4xl mb-4">
        🌐
      </div>
      <h3 className="font-semibold text-blue-900 mb-2">Global Support</h3>
      <p className="text-gray-600">Multilingual support team ready to assist you 24/7 in your trading journey.</p>
    </div>
    
    <div className="bg-white rounded-lg shadow-lg p-6 w-72 text-center hover:shadow-xl transition">
      <div className="text-blue-900 text-4xl mb-4">
        💰
      </div>
      <h3 className="font-semibold text-blue-900 mb-2">90% Profit Split</h3>
      <p className="text-gray-600">Keep more of what you earn with our industry-leading profit share model.</p>
    </div>

  </div>
</section>
