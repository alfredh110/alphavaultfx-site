import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Helper for animating numbers
function useCountUp(to, duration = 1500, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    let startTime = Date.now();
    function animate() {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (to - start) * progress;
      setValue(decimals > 0 ? current.toFixed(decimals) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(decimals > 0 ? to.toFixed(decimals) : to);
    }
    animate();
    // eslint-disable-next-line
  }, [to, duration, decimals]);
  return value;
}

export default function Hero() {
  const router = useRouter();

  // Animated numbers
  const funding = useCountUp(2000000, 1400, 0); // $2M+
  const payout = useCountUp(7, 1200, 0);        // 7 hrs
  const profitSplit = useCountUp(90, 1300, 0);  // 90%
  const traders = useCountUp(5000, 1700, 0);    // 5,000+
  const trustScore = useCountUp(4.8, 2000, 1);  // 4.8

  return (
    <section
      style={{
        minHeight: "65vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 0 40px 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          background: "rgba(16,24,38,0.97)",
          borderRadius: 40,
          boxShadow: "0 0 70px 0 #10418244",
          padding: "54px 38px 76px 38px",
          maxWidth: 820,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontWeight: 800,
            fontSize: 44,
            margin: 0,
            color: "#2196f3",
            letterSpacing: 1,
            lineHeight: 1.13,
          }}
        >
          Power Your Trading Journey
        </h1>
        <h2
          style={{
            fontWeight: 800,
            fontSize: 38,
            color: "#fff",
            margin: "10px 0 18px 0",
            letterSpacing: 0.5,
            lineHeight: 1.08,
            textShadow: "0 2px 18px #0004",
          }}
        >
          with AlphaVaultFX
        </h2>
        <div
          style={{
            color: "#bfc9da",
            fontWeight: 400,
            fontSize: 20,
            marginBottom: 36,
            marginTop: 0,
          }}
        >
          Trade with our capital, keep up to 90% of your profits, and scale your success risk-free.
        </div>
        <button
          style={{
            background: "#2196f3",
            color: "#fff",
            fontWeight: 700,
            border: "none",
            borderRadius: 12,
            fontSize: 22,
            padding: "13px 38px",
            margin: "0 auto",
            boxShadow: "0 4px 18px 0 #2196f355",
            cursor: "pointer",
            transition: "background 0.18s",
          }}
          onClick={() => router.push("/challenge")}
        >
          Get Funded Today
        </button>
      </div>

      {/* Animated Stats Row (ONLY THIS ROW) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          marginTop: 60,
          flexWrap: "wrap"
        }}
      >
        <div style={statBoxStyle}>
          <div style={statNumberStyle}>
            ${funding >= 1000000
              ? (funding / 1000000).toFixed(0) + "M"
              : Math.floor(funding / 1000) + "K"
            }
            <span style={{ color: "#2196f3" }}>+</span>
          </div>
          <div style={statLabelStyle}>In Funding</div>
        </div>
        <div style={statBoxStyle}>
          <div style={statNumberStyle}>{payout} <span style={{ color: "#2196f3" }}>hrs</span></div>
          <div style={statLabelStyle}>Avg. Payout Time</div>
        </div>
        <div style={statBoxStyle}>
          <div style={statNumberStyle}>{profitSplit}<span style={{ color: "#2196f3" }}>%</span></div>
          <div style={statLabelStyle}>Profit Split</div>
        </div>
        <div style={statBoxStyle}>
          <div style={statNumberStyle}>{traders.toLocaleString()}<span style={{ color: "#2196f3" }}>+</span></div>
          <div style={statLabelStyle}>Traders</div>
        </div>
        <div style={statBoxStyle}>
          <div style={{ ...statNumberStyle, color: "#2ecc40", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 28, marginRight: 7 }}>★</span>
            {trustScore}
          </div>
          <div style={statLabelStyle}>TrustScore</div>
        </div>
      </div>
    </section>
  );
}

// Styles
const statBoxStyle = {
  background: "rgba(16,24,38,0.87)",
  borderRadius: 18,
  minWidth: 180,
  minHeight: 92,
  padding: "18px 10px 12px 10px",
  boxShadow: "0 4px 32px 0 #1a376633",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 24,
};

const statNumberStyle = {
  fontWeight: 800,
  fontSize: 30,
  color: "#2196f3",
  letterSpacing: 1,
  marginBottom: 2,
  textShadow: "0 2px 10px #0004",
  lineHeight: 1.17,
};

const statLabelStyle = {
  color: "#bfc9da",
  fontWeight: 600,
  fontSize: 16,
  marginTop: 6,
};
