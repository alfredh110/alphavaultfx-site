import React from "react";

const COLORS = {
  card: "#151d29",
  cardBorder: "1.5px solid #232a3a",
  accent: "#3c9cff",
  accentLine: "#b0bac7",
  text: "#fff",
};

export default function Hero() {
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
        >
          Get Funded Today
        </button>
        {/* Chart Card (without "Profit Balance" label) */}
        <div
          style={{
            position: "absolute",
            left: 42,
            bottom: -85,
            zIndex: 3,
            background: COLORS.card,
            border: COLORS.cardBorder,
            borderRadius: 20,
            padding: 30,
            width: 310,
            textAlign: "left",
            boxShadow: "0 4px 32px 0 #1a376633",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontWeight: 900,
              color: "#fff",
              fontSize: 32,
              letterSpacing: "1px",
              marginBottom: 0,
              textShadow: "0 2px 10px #0004",
            }}
          >
            $1,670.20
          </div>
          {/* Blue line chart mock */}
          <svg width="242" height="60" style={{ marginTop: 14 }}>
            <polyline
              fill="none"
              stroke={COLORS.accent}
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="0,55 30,48 60,50 90,35 120,54 150,28 180,41 210,12 242,37"
            />
            <polyline
              fill="none"
              stroke={COLORS.accentLine}
              strokeWidth="1"
              strokeDasharray="4"
              points="0,55 242,55"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
