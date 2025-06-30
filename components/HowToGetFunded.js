import React from "react";

export default function HowToGetFunded() {
  return (
    <section className="how-fund-section">
      <h2 className="how-fund-title">
        <span className="oldmoney-gold">How To Get Funded</span>
      </h2>
      <div className="how-fund-cards">
        {/* Step 1 */}
        <div className="how-fund-card">
          <div className="how-fund-card-title">Select a Challenge</div>
          <div className="how-fund-card-desc">
            Choose a funding program that suits your goals and demonstrate your skills through our straightforward evaluation process.
          </div>
        </div>
        {/* Step 2 */}
        <div className="how-fund-card">
          <div className="how-fund-card-title">Prove Your Skills</div>
          <div className="how-fund-progressbar">
            <span>Profit Target</span>
            <div className="bar-bg">
              <div className="bar-fill" />
            </div>
            <span className="bar-val">50%</span>
          </div>
          <div className="how-fund-card-desc">
            Trade consistently and achieve the profit target while adhering to risk management rules. Show your edge in the market.
          </div>
        </div>
        {/* Step 3 */}
        <div className="how-fund-card">
          <div className="how-fund-card-title">Get Funded</div>
          <div className="how-fund-profitbox">
            <span>Profit Balance</span>
            <div className="how-fund-profit-amount">$1,670.20</div>
          </div>
          <div className="how-fund-card-desc">
            Once you pass the evaluation, AlphaVaultFX funds you immediately. Focus on trading while we handle the rest.
          </div>
        </div>
      </div>
      <style jsx>{`
        .how-fund-section {
          background: linear-gradient(115deg, #101824 70%, #131a25 100%);
          padding: 60px 0 70px 0;
          max-width: 1100px;
          margin: 0 auto;
          border-radius: 28px;
          border: 1px solid #b6a26644;
          box-shadow: 0 4px 38px 0 #10182422;
        }
        .how-fund-title {
          color: #e9e7dc;
          font-family: 'Playfair Display', serif;
          font-size: 2.7rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 48px;
          letter-spacing: 0.01em;
        }
        .oldmoney-gold {
          color: #e8c372;
          letter-spacing: 0.02em;
          border-bottom: 2px solid #e8c372;
          padding-bottom: 4px;
        }
        .how-fund-cards {
          display: flex;
          gap: 38px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .how-fund-card {
          background: #131a25;
          border-radius: 17px;
          border: 1px solid #e8c37244;
          box-shadow: 0 2px 14px #e8c37222;
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
        .how-fund-card:hover {
          border: 1.5px solid #e8c372cc;
          box-shadow: 0 8px 34px #e8c37233, 0 2px 48px #2186eb11;
          transform: translateY(-2px) scale(1.025);
        }
        .how-fund-card-title {
          color: #e8c372;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.22rem;
          margin-bottom: 13px;
        }
        .how-fund-card-desc {
          color: #e0e6ed;
          font-family: 'Merriweather', serif;
          font-size: 1.04rem;
          font-weight: 400;
          margin-top: 10px;
        }
        .how-fund-progressbar {
          margin: 10px 0 0 0;
          width: 100%;
        }
        .how-fund-progressbar span {
          color: #e8c372;
          font-size: 0.99rem;
          font-weight: 700;
        }
        .bar-bg {
          margin-top: 7px;
          background: #191e25;
          border-radius: 8px;
          width: 100%;
          height: 13px;
          border: 1px solid #e8c37244;
        }
        .bar-fill {
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, #b89b53 0, #e8c372 100%);
          border-radius: 8px;
          box-shadow: 0 2px 12px #e8c37244;
          animation: barFillGrow 1.15s cubic-bezier(.17,.67,.83,.67);
        }
        .bar-val {
          color: #e8c372;
          font-size: 1.03rem;
          font-weight: 700;
          margin-left: 11px;
        }
        .how-fund-profitbox {
          background: #181f2e;
          border-radius: 10px;
          margin: 18px 0 0 0;
          padding: 10px 14px 10px 15px;
          border: 1px solid #e8c37244;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .how-fund-profitbox span {
          color: #e8c372;
          font-size: 0.93rem;
          font-weight: 700;
          margin-bottom: 3px;
        }
        .how-fund-profit-amount {
          color: #fff;
          background: linear-gradient(90deg, #b89b53 0%, #e8c372 100%);
          padding: 6px 18px 6px 18px;
          border-radius: 7px;
          font-size: 1.21rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          font-family: 'Merriweather', serif;
        }
        @media (max-width: 900px) {
          .how-fund-cards {
            flex-direction: column;
            align-items: center;
          }
          .how-fund-card {
            min-width: 200px;
            max-width: 98vw;
          }
        }
        @keyframes barFillGrow {
          from { width: 0; }
          to { width: 50%; }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700|Merriweather:400,700&display=swap" rel="stylesheet" />
    </section>
  );
}
