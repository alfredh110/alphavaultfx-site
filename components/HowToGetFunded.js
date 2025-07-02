import React from "react";

// ALPHAVAULTFX THEME COLORS - aligned to logo (deep blue, white, silver/gray)
const COLORS = {
  background: "linear-gradient(120deg, #141925 60%, #1e2533 100%)",
  card: "rgba(22, 27, 38, 0.94)",
  cardBorder: "1.5px solid #232a3a",
  text: "#fff",
  textSecondary: "#bfc9da",
  accent: "#57c1f6", // lighter blue from logo
  accent2: "#3c9cff", // blue from logo
  accentLine: "#b0bac7", // silver/gray
};

export default function HowToGetFunded() {
  return (
    <section style={{
      width: "100%",
      background: COLORS.background,
      padding: "56px 0 40px 0",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 16px"
      }}>
        {/* Header - centered, no stars, logo blue/white */}
        <h2 style={{
          color: COLORS.text,
          fontWeight: 800,
          fontSize: 40,
          letterSpacing: 0.5,
          textAlign: "center",
          marginBottom: 38,
          lineHeight: 1.1,
        }}>
          How To Get Funded
        </h2>
        {/* Card grid - more aligned */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 28,
        }}>
          {/* Card 1 */}
          <div style={{
            background: COLORS.card,
            border: COLORS.cardBorder,
            borderRadius: 18,
            padding: 30,
            color: COLORS.text,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            minHeight: 250,
            boxShadow: "0 0 0 0 transparent",
            alignItems: "flex-start"
          }}>
            {/* FIXED: Button steps, not overlapping */}
            <div style={{ marginBottom: 20, display: "flex", gap: 12 }}>
              <span style={{
                background: "#232a3a",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                padding: "7px 20px",
                borderRadius: 10,
                marginRight: 0,
                boxShadow: "0 1px 4px #0002"
              }}>
                1 Step Hero
              </span>
              <span style={{
                background: "#283145",
                color: "#bfc9da",
                fontWeight: 700,
                fontSize: 15,
                padding: "7px 20px",
                borderRadius: 10,
                marginRight: 0,
                boxShadow: "0 1px 4px #0002"
              }}>
                2 Step Alpha
              </span>
              <span style={{
                background: COLORS.accent2,
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                padding: "7px 20px",
                borderRadius: 10,
                boxShadow: "0 1px 4px #0002"
              }}>
                Instant Alpha
              </span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>
                Select a Challenge AlphaVaultFX.
              </div>
              <div style={{ fontWeight: 400, color: COLORS.textSecondary, fontSize: 15 }}>
                Choose a funding program that suits your goals and demonstrate your skills through our straightforward evaluation process AlphaVaultFX.
              </div>
            </div>
          </div>

          {/* Card 2 - Profit Chart */}
          <div style={{
            background: COLORS.card,
            border: COLORS.cardBorder,
            borderRadius: 18,
            padding: 30,
            color: COLORS.text,
            minHeight: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start"
          }}>
            <div style={{
              background: "#222938",
              borderRadius: 14,
              padding: 22,
              width: 290,
              marginBottom: 16,
              boxShadow: "0 2px 12px 0 #232a3a33",
              border: `1px solid ${COLORS.cardBorder}`,
            }}>
              <div style={{ color: COLORS.textSecondary, fontWeight: 500, fontSize: 15, marginBottom: 10 }}>
                Profit Balance
              </div>
              <div style={{ fontWeight: 900, color: COLORS.accent, fontSize: 28, letterSpacing: "1px", marginBottom: 0 }}>
                $1,670.20
              </div>
              {/* Silver/blue line chart mock */}
              <svg width="242" height="60" style={{ marginTop: 10 }}>
                <polyline
                  fill="none"
                  stroke={COLORS.accent}
                  strokeWidth="3"
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
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>
                Get Funded.
              </div>
              <div style={{ fontWeight: 400, color: COLORS.textSecondary, fontSize: 15 }}>
                Once you pass the evaluation, AlphaVaultFX funds you immediately. Focus on trading while we handle the rest.
              </div>
            </div>
          </div>

          {/* Card 3 - Progress */}
          <div style={{
            background: COLORS.card,
            border: COLORS.cardBorder,
            borderRadius: 18,
            padding: 30,
            color: COLORS.text,
            minHeight: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start"
          }}>
            <div style={{ marginBottom: 22, width: "100%" }}>
              <div style={{
                color: COLORS.textSecondary,
                fontWeight: 500,
                fontSize: 15,
                marginBottom: 8
              }}>Profit Target</div>
              <div style={{
                background: "#222938",
                borderRadius: 8,
                height: 24,
                width: "100%",
                display: "flex",
                alignItems: "center"
              }}>
                <div style={{
                  background: `linear-gradient(90deg, ${COLORS.accent} 0%, ${COLORS.accent2} 100%)`,
                  borderRadius: 8,
                  height: 14,
                  width: "52%",
                  margin: "0 0 0 5px",
                  display: "flex",
                  alignItems: "center"
                }} />
                <span style={{
                  color: COLORS.textSecondary,
                  fontWeight: 600,
                  fontSize: 14,
                  marginLeft: 12
                }}>50%</span>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>
                AlphaVaultFX Prove Your Skills.
              </div>
              <div style={{ fontWeight: 400, color: COLORS.textSecondary, fontSize: 15 }}>
                Trade consistently and achieve the profit target while adhering to risk management rules. Show us your edge in the market.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
