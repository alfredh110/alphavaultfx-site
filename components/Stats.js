import React from "react";

export default function Stats() {
  const stats = [
    { big: "$1M+", label: "In Funding" },
    { big: "7 hrs", label: "Avg. Payout Time" },
    { big: "90%", label: "Profit Split" },
    { big: "5,000+", label: "Traders" },
    {
      big: (
        <span>
          <span style={{ color: "#22e06d", marginRight: 6, fontWeight: 700 }}>★</span>
          4.8
        </span>
      ),
      label: (
        <>
          <img
            src="https://cdn.trustpilot.net/brand-assets/4.8-stars.svg"
            alt="4.8 stars"
            style={{ height: 18, verticalAlign: "middle", marginRight: 6 }}
          />
          TrustScore 4.8
        </>
      ),
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-row">
        {stats.map((stat, i) => (
          <div
            className="stat-card animated-stat"
            style={{ animationDelay: `${i * 0.14 + 0.1}s` }}
            key={i}
          >
            <div className="stat-big">{stat.big}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .stats-section {
          background: none;
          padding: 0 0 0 0;
          margin-top: -56px;
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }
        .stats-row {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .stat-card {
          background: #111a28;
          border-radius: 20px;
          min-width: 160px;
          max-width: 210px;
          min-height: 78px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px 28px;
          box-shadow: 0 2px 14px 0 rgba(33,134,235,0.14);
          text-align: center;
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          animation: fadeSlideInUp 0.75s forwards cubic-bezier(.17, .67, .83, .67);
        }
        .stat-card:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 8px 38px 0 rgba(33,134,235,0.15);
        }
        .stat-big {
          font-weight: 800;
          font-size: 2.05rem;
          color: #2186eb;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
        }
        .stat-label {
          color: #e0e6ed;
          font-size: 1.06rem;
          font-weight: 500;
        }
        @media (max-width: 900px) {
          .stats-row {
            gap: 16px;
          }
          .stat-card {
            min-width: 140px;
            padding: 18px 10px;
          }
        }
        @keyframes fadeSlideInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
