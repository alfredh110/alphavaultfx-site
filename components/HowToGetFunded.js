import React from "react";

export default function HowToGetFunded() {
  return (
    <section className="avfx-funded-section">
      <h2 className="avfx-funded-title">
        <span className="avfx-funded-blue">How To Get Funded</span>
      </h2>
      <div className="avfx-funded-cards">
        {/* Step 1 */}
        <div className="avfx-funded-card">
          <div className="avfx-funded-card-title">Select a Challenge</div>
          <div className="avfx-funded-card-desc">
            Choose a funding program that suits your goals and demonstrate your skills through our straightforward evaluation process.
          </div>
        </div>
        {/* Step 2 */}
        <div className="avfx-funded-card">
          <div className="avfx-funded-card-title">Prove Your Skills</div>
          <div className="avfx-funded-progressbar">
            <span>Profit Target</span>
            <div className="bar-bg">
              <div className="bar-fill" />
            </div>
            <span className="bar-val">50%</span>
          </div>
          <div className="avfx-funded-card-desc">
            Trade consistently and achieve the profit target while adhering to risk management rules. Show your edge in the market.
          </div>
        </div>
        {/* Step 3 */}
        <div className="avfx-funded-card">
          <div className="avfx-funded-card-title">Get Funded</div>
          <div className="avfx-funded-profitbox">
            <span>Profit Balance</span>
            <div className="avfx-funded-profit-amount">$1,670.20</div>
          </div>
          <div className="avfx-funded-card-desc">
            Once you pass the evaluation, AlphaVaultFX funds you immediately. Focus on trading while we handle the rest.
          </div>
        </div>
      </div>
      <style jsx>{`
        .avfx-funded-section {
          background: linear-gradient(115deg, #101824 70%, #172132 100%);
          padding: 60px 0 70px 0;
          max-width: 1100px;
          margin: 0 auto;
          border-radius: 28px;
          border: 1px solid #2186eb22;
          box-shadow: 0 4px 38px 0 #10182422;
        }
        .avfx-funded-title {
          color: #e9e7dc;
          font-family: 'Inter', sans-serif;
          font-size: 2.7rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 48px;
          letter-spacing: 0.01em;
        }
        .avfx-funded-blue {
          color: #2186eb;
          letter-spacing: 0.02em;
          border-bottom: 2px solid #2186eb;
          padding-bottom: 4px;
        }
        .avfx-funded-cards {
          display: flex;
          gap: 38px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .avfx-funded-card {
          background: #131a25;
          border-radius: 17px;
          border: 1.5px solid #2186eb22;
          box-shadow: 0 2px 14px #2186eb22;
          padding: 34px 24px 22px 24px;
          max-width: 320px;
          min-width: 240px;
          flex: 1 1 260px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 12px;
          transition: border 0.22s, box-shadow 0.24s, transform 0.19s;
        }
        .avfx-funded-card:hover {
          border: 1.5px solid #2186ebbb;
          box-shadow: 0 8px 34px #2186eb33, 0 2px 48px #2186eb11;
          transform: translateY(-2px) scale(1.025);
        }
        .avfx-funded-card-title {
          color: #2186eb;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.22rem;
          margin-bottom: 13px;
        }
        .avfx-funded-card-desc {
          color: #e0e6ed;
          font-family: 'Inter', sans-serif;
          font-size: 1.04rem;
          font-weight: 400;
          margin-top: 10px;
        }
        .avfx-funded-progressbar {
          margin: 10px 0 0 0;
          width: 100%;
        }
        .avfx-funded-progressbar span {
          color: #2186eb;
          font-size: 0.99rem;
          font-weight: 700;
        }
        .bar-bg {
          margin-top: 7px;
          background: #191e25;
          border-radius: 8px;
          width: 100%;
          height: 13px;
          border: 1px solid #2186eb22;
        }
        .bar-fill {
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, #2186eb 0, #4cc9ff 100%);
          border-radius: 8px;
          box-shadow: 0 2px 12px #2186eb55;
          animation: barFillGrow 1.15s cubic-bezier(.17,.67,.83,.67);
        }
        .bar-val {
          color: #2186eb;
          font-size: 1.03rem;
          font-weight: 700;
          margin-left: 11px;
        }
        .avfx-funded-profitbox {
          background: #181f2e;
          border-radius: 10px;
          margin: 18px 0 0 0;
          padding: 10px 14px 10px 15px;
          border: 1px solid #2186eb22;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .avfx-funded-profitbox span {
          color: #2186eb;
          font-size: 0.93rem;
          font-weight: 700;
          margin-bottom: 3px;
        }
        .avfx-funded-profit-amount {
          color: #fff;
          background: linear-gradient(90deg, #2186eb 0%, #4cc9ff 100%);
          padding: 6px 18px 6px 18px;
          border-radius: 7px;
          font-size: 1.21rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 900px) {
          .avfx-funded-cards {
            flex-direction: column;
            align-items: center;
          }
          .avfx-funded-card {
            min-width: 200px;
            max-width: 98vw;
          }
        }
        @keyframes barFillGrow {
          from { width: 0; }
          to { width: 50%; }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css?family=Inter:400,700&display=swap" rel="stylesheet" />
    </section>
  );
}
