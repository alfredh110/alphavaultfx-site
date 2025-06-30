import React from "react";

export default function Hero() {
  return (
    <section className="avfx-hero">
      <div className="avfx-hero-bgcard">
        <h1>
          <span style={{color:'#2186eb'}}>Power Your Trading Journey</span><br />
          with <strong>AlphaVaultFX</strong>
        </h1>
        <p>
          Trade with our capital, keep up to 90% of your profits, and scale your success risk-free.
        </p>
        <button className="avfx-hero-btn">Get Funded Today</button>

        {/* Graph "card" */}
        <div className="avfx-hero-graphcard">
          <div className="avfx-hero-graphcard-title">
            Profit Balance <span className="info-i">i</span>
          </div>
          <div className="avfx-hero-graphcard-balance">$1,670.20</div>
          <div className="avfx-hero-graphcard-graph">
            <svg width="100%" height="42" viewBox="0 0 180 42">
              <polyline
                fill="none"
                stroke="#2186eb"
                strokeWidth="3"
                points="0,40 20,35 35,38 55,20 70,28 90,10 110,13 130,4 150,13 170,2"
              />
            </svg>
          </div>
        </div>
      </div>
      <style jsx>{`
        .avfx-hero {
          background: #131b26;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 0 120px 0;
        }
        .avfx-hero-bgcard {
          background: linear-gradient(120deg, #172132 80%, #2186eb22 100%);
          border-radius: 44px;
          max-width: 860px;
          width: 90vw;
          padding: 58px 48px 84px 48px;
          box-shadow: 0 6px 44px 0 #2186eb33;
          position: relative;
          text-align: center;
        }
        .avfx-hero-bgcard h1 {
          font-size: 2.7rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: 0.01em;
          margin-bottom: 22px;
        }
        .avfx-hero-bgcard p {
          color: #b3c7e6;
          font-size: 1.25rem;
          margin-bottom: 35px;
        }
        .avfx-hero-btn {
          background: #2186eb;
          color: #fff;
          font-weight: 700;
          font-size: 1.17rem;
          border-radius: 10px;
          padding: 13px 36px;
          border: none;
          outline: none;
          cursor: pointer;
          box-shadow: 0 2px 20px #2186eb33;
          transition: background 0.15s, box-shadow 0.18s;
        }
        .avfx-hero-btn:hover {
          background: #2aa2f8;
          box-shadow: 0 4px 28px #2186eb33;
        }
        .avfx-hero-graphcard {
          position: absolute;
          left: 38px;
          bottom: -58px;
          background: #181f2e;
          border-radius: 21px;
          box-shadow: 0 4px 26px #2186eb22;
          padding: 22px 24px 20px 22px;
          width: 250px;
          text-align: left;
          border: 1.5px solid #2186eb33;
        }
        .avfx-hero-graphcard-title {
          color: #b0c6e5;
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 6px;
        }
        .avfx-hero-graphcard-balance {
          color: #fff;
          font-weight: 800;
          font-size: 1.6rem;
          margin-bottom: 7px;
        }
        .avfx-hero-graphcard-graph {
          width: 100%;
          height: 42px;
        }
        .info-i {
          background: #2186eb;
          color: #fff;
          font-size: 0.71em;
          border-radius: 50%;
          padding: 0 7px;
          margin-left: 4px;
        }
        @media (max-width: 900px) {
          .avfx-hero-bgcard { padding: 38px 12px 120px 12px; }
          .avfx-hero-graphcard { left: 4vw; width: 60vw; min-width: 170px; }
        }
        @media (max-width: 700px) {
          .avfx-hero-bgcard h1 { font-size: 2rem; }
          .avfx-hero-graphcard { position: static; margin: 24px auto 0 auto; }
        }
      `}</style>
    </section>
  );
}
