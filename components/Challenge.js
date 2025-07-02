import React from "react";

const COLORS = {
  background: "linear-gradient(120deg, #141925 60%, #1e2533 100%)",
  card: "rgba(22, 27, 38, 0.94)",
  cardBorder: "1.5px solid #232a3a",
  text: "#fff",
  textSecondary: "#bfc9da",
  accent: "#57c1f6",
  accent2: "#3c9cff",
};

export default function Challenge() {
  return (
    <section
      style={{
        width: "100%",
        background: COLORS.background,
        padding: "56px 0 40px 0",
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <h2
          style={{
            color: COLORS.text,
            fontWeight: 800,
            fontSize: 40,
            letterSpacing: 0.5,
            textAlign: "center",
            marginBottom: 38,
            lineHeight: 1.1,
          }}
        >
          AlphaVaultFX Challenge
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "center",
          }}
        >
          {/* Example Card 1 */}
          <div
            style={{
              background: COLORS.card,
              border: COLORS.cardBorder,
              borderRadius: 18,
              padding: 32,
              color: COLORS.text,
              minWidth: 300,
              maxWidth: 360,
              minHeight: 240,
              boxShadow: "0 4px 32px 0 #1a376633",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 19,
                color: COLORS.accent2,
                marginBottom: 12,
              }}
            >
              Step 1: Pick Your Challenge
            </div>
            <div style={{ fontWeight: 400, color: COLORS.textSecondary, fontSize: 16 }}>
              Choose from 1 Step Hero, 2 Step Alpha, or Instant Alpha to get started with your prop trading journey.
            </div>
          </div>

          {/* Example Card 2 */}
          <div
            style={{
              background: COLORS.card,
              border: COLORS.cardBorder,
              borderRadius: 18,
              padding: 32,
              color: COLORS.text,
              minWidth: 300,
              maxWidth: 360,
              minHeight: 240,
              boxShadow: "0 4px 32px 0 #1a376633",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 19,
                color: COLORS.accent2,
                marginBottom: 12,
              }}
            >
              Step 2: Prove Your Skills
            </div>
            <div style={{ fontWeight: 400, color: COLORS.textSecondary, fontSize: 16 }}>
              Trade with discipline and consistency, hit the profit target, and follow risk rules to advance.
            </div>
          </div>

          {/* Example Card 3 */}
          <div
            style={{
              background: COLORS.card,
              border: COLORS.cardBorder,
              borderRadius: 18,
              padding: 32,
              color: COLORS.text,
              minWidth: 300,
              maxWidth: 360,
              minHeight: 240,
              boxShadow: "0 4px 32px 0 #1a376633",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 19,
                color: COLORS.accent2,
                marginBottom: 12,
              }}
            >
              Step 3: Get Funded
            </div>
            <div style={{ fontWeight: 400, color: COLORS.textSecondary, fontSize: 16 }}>
              Pass the evaluation and get funded instantly. Withdraw your profits and scale up with AlphaVaultFX.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
