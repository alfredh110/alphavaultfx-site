import React from "react";

// ALPHAVAULTFX THEME COLORS
const COLORS = {
  background: "linear-gradient(120deg, #101624 60%, #17253a 100%)",
  card: "rgba(18, 30, 51, 0.85)",
  cardBorder: "1.5px solid rgba(33, 134, 235, 0.21)", // electric blue border with alpha
  text: "#fff",
  textSecondary: "#97b6da",
  accent: "#00e0ff", // electric blue/teal
  accent2: "#2186eb", // strong blue
  accentGlow: "0 0 16px #00e0ff99",
  accentTealGlow: "0 0 32px #00e0ff33",
};

// Simple SVG star for accent
const Star = ({ style = {} }) => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={style}>
    <path d="M10 1l2.39 6.94h7.29l-5.89 4.28 2.32 7.18-5.89-4.28-5.89 4.28 2.32-7.18-5.89-4.28h7.29z"
      fill={COLORS.accent} opacity="0.8"/>
  </svg>
);

export default function HowToGetFunded() {
  return (
    <section style={{
      width: "100%",
      background: COLORS.background,
      padding: "64px 0 48px 0",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        {/* Header with AlphaVaultFX stars */}
        <div style={{ textAlign: "center", marginBottom: 30, position: "relative" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 8,
          }}>
            <Star style={{ marginBottom: 8 }} />
            <Star style={{ marginTop: 10 }} />
            <Star style={{ marginBottom: 8 }} />
          </div>
          <h2 style={{
            color: COLORS.text,
            fontWeight: 800,
            fontSize: 44,
            letterSpacing: 1,
            lineHeight: 1.1,
            margin: 0,
            textShadow: COLORS.accentGlow,
          }}>
            How To Get Funded
          </h2>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginTop: 8,
          }}>
            <Star style={{ marginTop: 8 }} />
            <Star style={{ marginBottom: 8 }} />
            <Star style={{ marginTop: 8 }} />
          </div>
        </div>

        {/* Card grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 26,
        }}>
          {/* Card 1 */}
          <div style={{
            gridColumn: "1 / span 1",
            gridRow: "1 / span 1",
            background: COLORS.card,
            border: COLORS.cardBorder,
            borderRadius: 20,
            padding: 30,
            color: COLORS.text,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: COLORS.accentTealGlow,
            minHeight: 250,
          }}>
            {/* Hero Steps SVG or Image */}
            <div style={{ marginBottom: 20 }}>
              {/* Example: replace with your own SVG if desired */}
              <svg width="190" height="55" viewBox="0 0 190 55" fill="none">
                <rect x="0" y="15" width="70" height="30" rx="6" fill="#1b2c4b" />
                <rect x="60" y="10" width="70" height="35" rx="6" fill="#17253a" />
                <rect x="120" y="5" width="70" height="45" rx="9"
                  fill={COLORS.accent2} style={{ filter: "drop-shadow(0 0 12px #00e0ff66)" }} />
                <text x="15" y="34" fill="#fff" fontSize="14" fontWeight="bold">1 Step Hero</text>
                <text x="75" y="29" fill="#b2e6fa" fontSize="14" fontWeight="bold">2 Step Alpha</text>
                <text x="135" y="32" fill="#fff" fontSize="14" fontWeight="bold">Instant Alpha</text>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 19, color: "#fff", marginBottom: 7 }}>
                Select a Challenge AlphaVaultFX.
              </div>
              <div style={{ fontWeight: 400, color: COLORS.textSecondary, fontSize: 16 }}>
                Choose a funding program that suits your goals and demonstrate your skills through our straightforward evaluation process AlphaVaultFX.
              </div>
            </div>
          </div>

          {/* Card 2 - Chart */}
          <div style={{
            gridColumn: "2 / span 1",
            gridRow: "1 / span 2",
            background: COLORS.card,
            border: COLORS.cardBorder,
            borderRadius: 20,
            padding: 30,
            color: COLORS.text,
            boxShadow: COLORS.accentTealGlow,
            minHeight: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            {/* Chart Card */}
            <div style={{
              background: "linear-gradient(120deg, #15243b 60%, #1b3a48 100%)",
              borderRadius: 18,
              padding: 28,
              margin: "0 auto",
              width: 320,
              boxShadow: "0 2px 24px 0 #00e0ff22",
              position: "relative",
              marginBottom: 18
            }}>
              <div style={{ color: COLORS.textSecondary, fontWeight: 500, fontSize: 15, marginBottom: 10 }}>
                Profit Balance <span style={{ color: COLORS.accent, fontWeight: 900, fontSize: 13 }}>ⓘ</span>
              </div>
              <div style={{ fontWeight: 900, color: COLORS.accent, fontSize: 32, letterSpacing: "1px", marginBottom: 0 }}>
                $1,670.20
              </div>
              {/* Blue/teal line chart mock */}
              <svg width="270" height="80" style={{ marginTop: 12 }}>
                <polyline
                  fill="none"
                  stroke="#00e0ff"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  points="0,65 30,60 60,62 90,50 120,67 150,35 180,53 210,18 240,76 270,10"
                  style={{ filter: "drop-shadow(0 0 6px #00e0ff88)" }}
                />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 19, color: "#fff", marginBottom: 7 }}>
                Get Funded.
              </div>
              <div style={{ fontWeight: 400, color: COLORS.textSecondary, fontSize: 16 }}>
                Once you pass the evaluation, AlphaVaultFX funds you immediately. Focus on trading while we handle the rest.
              </div>
            </div>
          </div>

          {/* Card 3 - Progress */}
          <div style={{
            gridColumn: "1 / span 1",
            gridRow: "2 / span 1",
            background: COLORS.card,
            border: COLORS.cardBorder,
            borderRadius: 20,
            padding: 30,
            color: COLORS.text,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: COLORS.accentTealGlow,
            minHeight: 250,
          }}>
            {/* Progress Bar */}
            <div style={{ marginBottom: 22 }}>
              <div style={{
                color: COLORS.textSecondary,
                fontWeight: 500,
                fontSize: 16,
                marginBottom: 9
              }}>Profit Target <span style={{ color: COLORS.accent, fontWeight: 900, fontSize: 13 }}>ⓘ</span></div>
              <div style={{
                background: "#17253a",
                borderRadius: 10,
                height: 32,
                width: "100%",
                display: "flex",
                alignItems: "center"
              }}>
                <div style={{
                  background: "linear-gradient(90deg, #00e0ff 0%, #2186eb 100%)",
                  borderRadius: 10,
                  height: 22,
                  width: "50%",
                  margin: "0 0 0 5px",
                  boxShadow: COLORS.accentGlow,
                  display: "flex",
                  alignItems: "center"
                }} />
                <span style={{
                  color: COLORS.textSecondary,
                  fontWeight: 600,
                  fontSize: 15,
                  marginLeft: 12
                }}>50%</span>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 19, color: "#fff", marginBottom: 7 }}>
                AlphaVaultFX Prove Your Skills.
              </div>
              <div style={{ fontWeight: 400, color: COLORS.textSecondary, fontSize: 16 }}>
                Trade consistently and achieve the profit target while adhering to risk management rules. Show us your edge in the market.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
