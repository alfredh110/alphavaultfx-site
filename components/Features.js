import React from "react";

export default function Features() {
  return (
    <section style={{
      background: "#0e1621",
      padding: "54px 0 0 0",
      minHeight: 340
    }}>
      <h2 style={{
        color: "white",
        fontWeight: 800,
        fontSize: "2.3rem",
        textAlign: "center",
        marginBottom: "36px",
        letterSpacing: "0.01em"
      }}>
        Why Choose AlphaVaultFX?
      </h2>
      {/* Feature Cards with animation */}
      <div className="features-cards-row">
        {[
          {
            title: "Funded Accounts",
            desc: "Get access to real capital and scale your trading career."
          },
          {
            title: "Real-Time Analytics",
            desc: "Track your progress and performance with rich analytics."
          },
          {
            title: "Trader Community",
            desc: "Join a supportive community and grow together."
          }
        ].map((f, i) => (
          <div className="feature-card animated-feature" style={{ animationDelay: `${i * 0.18 + 0.1}s` }} key={f.title}>
            <div className="feature-card-title">{f.title}</div>
            <div className="feature-card-desc">{f.desc}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .features-cards-row {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 54px;
          flex-wrap: wrap;
        }
        .feature-card {
          background: #111a28;
          border-radius: 20px;
          min-width: 320px;
          max-width: 370px;
          padding: 32px 24px 24px 24px;
          box-shadow: 0 4px 32px 0 rgba(31,38,135,0.16);
          text-align: center;
          transition: transform 0.22s cubic-bezier(.17, .67, .83, .67), box-shadow 0.22s;
          cursor: pointer;
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          animation: fadeSlideInUp 0.75s forwards cubic-bezier(.17, .67, .83, .67);
        }
        .feature-card:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 8px 38px 0 rgba(33,134,235,0.16);
        }
        .feature-card-title {
          color: #2186eb;
          font-weight: 700;
          font-size: 1.35rem;
          margin-bottom: 10px;
        }
        .feature-card-desc {
          color: #e0e6ed;
          font-size: 1.06rem;
          font-weight: 500;
        }
        /* stagger animation */
        .animated-feature { animation-name: fadeSlideInUp; }
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
