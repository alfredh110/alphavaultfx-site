import React, { useEffect, useRef } from "react";

// Helper for animated number counting
function useCountUp(target, duration = 1500) {
  const [value, setValue] = React.useState(0);
  const raf = useRef();

  useEffect(() => {
    let start;
    function animate(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf.current = requestAnimationFrame(animate);
      else setValue(target);
    }
    raf.current = requestAnimationFrame(animate);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [target, duration]);
  return value;
}

// Icon SVGs
const icons = [
  // Funded Accounts
  <svg width="38" height="38" fill="none" key="funded" viewBox="0 0 38 38">
    <rect x="7" y="11" width="24" height="16" rx="5" fill="#2186eb" opacity=".16"/>
    <rect x="11" y="15" width="16" height="8" rx="3.5" fill="#2186eb"/>
    <circle cx="16" cy="19" r="2" fill="#fff"/>
    <circle cx="22" cy="19" r="2" fill="#fff"/>
  </svg>,
  // Analytics
  <svg width="38" height="38" fill="none" key="analytics" viewBox="0 0 38 38">
    <rect x="10" y="23" width="3.5" height="7" rx="1.75" fill="#2186eb"/>
    <rect x="17.25" y="17" width="3.5" height="13" rx="1.75" fill="#ffd600"/>
    <rect x="24.5" y="11" width="3.5" height="19" rx="1.75" fill="#2186eb"/>
    <rect x="7" y="7" width="24" height="24" rx="6" stroke="#2186eb" strokeWidth="2" opacity=".25"/>
  </svg>,
  // Community
  <svg width="38" height="38" fill="none" key="community" viewBox="0 0 38 38">
    <circle cx="19" cy="14" r="7" fill="#2186eb" opacity=".2"/>
    <circle cx="19" cy="14" r="5" fill="#2186eb"/>
    <ellipse cx="19" cy="29" rx="13" ry="6" fill="#2186eb" opacity=".08"/>
    <ellipse cx="19" cy="29" rx="7" ry="3" fill="#2186eb" opacity=".23"/>
  </svg>
];

// Stat animation data
const statData = [
  { prefix: "$", target: 1, suffix: "M+", label: "In Funding", decimals: 0 },
  { prefix: "", target: 7, suffix: " hrs", label: "Avg. Payout Time", decimals: 0 },
  { prefix: "", target: 90, suffix: "%", label: "Profit Split", decimals: 0 },
  { prefix: "", target: 5000, suffix: "+", label: "Traders", decimals: 0 },
  { prefix: "", target: 4.8, suffix: "", label: "TrustScore", decimals: 1, trustpilot: true }
];

export default function Features() {
  // Animated counters
  const funding = useCountUp(1, 1300);
  const payout = useCountUp(7, 1300);
  const split = useCountUp(90, 1500);
  const traders = useCountUp(5000, 1400);
  const trust = useCountUp(48, 1350); // Show as 4.8

  // Animate on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.feature-card, .feature-stat');
    els.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(60px) scale(0.97)';
    });
    const handleScroll = () => {
      els.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.style.transition = `opacity .7s ${i * 0.14 + 0.1}s, transform .7s ${i * 0.14 + 0.1}s cubic-bezier(.17, .67, .83, .67)`;
          el.style.opacity = 1;
          el.style.transform = 'translateY(0) scale(1)';
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section style={{
      background: "linear-gradient(180deg, #0e1621 70%, #131b26 100%)",
      padding: "60px 0 0 0",
      minHeight: 540
    }}>
      <h2 style={{
        color: "white",
        fontWeight: 900,
        fontSize: "2.5rem",
        textAlign: "center",
        marginBottom: "38px",
        letterSpacing: "0.01em",
        textShadow: "0 2px 16px #2186eb22"
      }}>
        Why Choose AlphaVaultFX?
      </h2>
      
      {/* Feature Cards */}
      <div className="features-cards-row">
        {[
          {
            icon: icons[0],
            title: "Funded Accounts",
            desc: "Get access to real capital and scale your trading career."
          },
          {
            icon: icons[1],
            title: "Real-Time Analytics",
            desc: "Track your progress and performance with rich analytics."
          },
          {
            icon: icons[2],
            title: "Trader Community",
            desc: "Join a supportive community and grow together."
          }
        ].map((f, i) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-card-icon">{f.icon}</div>
            <div className="feature-card-title">{f.title}</div>
            <div className="feature-card-desc">{f.desc}</div>
          </div>
        ))}
      </div>
      
      {/* Stats Row with animated numbers */}
      <div className="features-stats-row">
        <div className="feature-stat">
          <div className="feature-stat-big">
            <span className="stat-glow">${funding}M+</span>
          </div>
          <div className="feature-stat-label">In Funding</div>
        </div>
        <div className="feature-stat">
          <div className="feature-stat-big">
            <span className="stat-glow">{payout} hrs</span>
          </div>
          <div className="feature-stat-label">Avg. Payout Time</div>
        </div>
        <div className="feature-stat">
          <div className="feature-stat-big">
            <span className="stat-glow">{split}%</span>
          </div>
          <div className="feature-stat-label">Profit Split</div>
        </div>
        <div className="feature-stat">
          <div className="feature-stat-big">
            <span className="stat-glow">{traders.toLocaleString()}+</span>
          </div>
          <div className="feature-stat-label">Traders</div>
        </div>
        <div className="feature-stat">
          <div className="feature-stat-big" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#22e06d", fontSize: "2.2rem", fontWeight: 800, marginRight: 4 }}>★</span>
            <span className="stat-glow" style={{ fontWeight: 700, fontSize: "2rem" }}>{(trust/10).toFixed(1)}</span>
          </div>
          <div className="feature-stat-label">
            <img
              src="https://cdn.trustpilot.net/brand-assets/4.8-stars.svg"
              alt="4.8 stars"
              style={{ height: 18, verticalAlign: "middle", marginRight: 6, marginTop: -2 }}
            />
            TrustScore 4.8
          </div>
        </div>
      </div>
      {/* CSS */}
      <style jsx>{`
        .features-cards-row {
          display: flex;
          justify-content: center;
          gap: 38px;
          margin-bottom: 58px;
          flex-wrap: wrap;
        }
        .feature-card {
          background: linear-gradient(140deg, #12203c 88%, #2186eb22 100%);
          border-radius: 22px;
          min-width: 320px;
          max-width: 370px;
          padding: 38px 28px 28px 28px;
          box-shadow: 0 7px 36px 0 rgba(31,38,135,0.19);
          text-align: center;
          transition: transform 0.24s cubic-bezier(.17,.67,.83,.67), box-shadow 0.22s, background 0.28s;
          cursor: pointer;
          opacity: 1;
          transform: translateY(0) scale(1);
          position: relative;
          overflow: hidden;
        }
        .feature-card:before {
          content: "";
          position: absolute;
          left: -30%;
          top: 60%;
          width: 170%;
          height: 200%;
          background: radial-gradient(circle at 50% 50%, #2186eb22 0, transparent 90%);
          opacity: 0.12;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .feature-card:hover {
          transform: translateY(-5px) scale(1.045) rotateZ(-0.6deg);
          box-shadow: 0 12px 44px 0 rgba(33,134,235,0.18);
          background: linear-gradient(110deg,#1b2a49 70%, #2186eb33 100%);
        }
        .feature-card-icon {
          margin-bottom: 14px;
        }
        .feature-card-title {
          color: #2186eb;
          font-weight: 800;
          font-size: 1.38rem;
          margin-bottom: 12px;
          text-shadow: 0 1px 8px #2186eb19;
        }
        .feature-card-desc {
          color: #e0e6ed;
          font-size: 1.11rem;
          font-weight: 500;
        }
        .features-stats-row {
          display: flex;
          justify-content: center;
          gap: 36px;
          margin: 56px 0 0 0;
          flex-wrap: wrap;
          position: relative;
        }
        .feature-stat {
          background: linear-gradient(120deg, #13213a 80%, #2186eb18 100%);
          border-radius: 18px;
          min-width: 195px;
          min-height: 98px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 22px 25px 22px;
          box-shadow: 0 3px 22px 0 rgba(33,134,235,0.10);
          text-align: center;
          opacity: 1;
          transform: translateY(0) scale(1);
          position: relative;
          overflow: hidden;
        }
        .feature-stat:before {
          content: "";
          position: absolute;
          right: -24%;
          top: 50%;
          width: 120%;
          height: 160%;
          background: radial-gradient(circle at 50% 50%, #ffd60036 0, transparent 90%);
          opacity: 0.13;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .feature-stat:hover {
          transform: translateY(-2px) scale(1.045) rotateZ(0.4deg);
          box-shadow: 0 10px 38px 0 rgba(33,134,235,0.19);
          background: linear-gradient(110deg,#1b2a49 70%, #ffd60022 100%);
        }
        .feature-stat-big {
          font-weight: 900;
          font-size: 2.2rem;
          color: #2186eb;
          margin-bottom: 10px;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-glow {
          text-shadow: 0 2px 24px #2186eb33, 0 1px 0 #fff0;
          color: #2186eb;
        }
        .feature-stat-label {
          color: #e0e6ed;
          font-size: 1.1rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 1100px) {
          .features-cards-row, .features-stats-row {
            gap: 20px;
          }
        }
        @media (max-width: 900px) {
          .features-cards-row, .features-stats-row {
            flex-direction: column;
            align-items: center;
          }
          .feature-card, .feature-stat {
            min-width: 260px;
            max-width: 95vw;
          }
        }
      `}</style>
    </section>
  );
}
