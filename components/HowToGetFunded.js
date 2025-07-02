import { useState } from "react";

const COLORS = {
  primary: "#2186eb",
  secondary: "#081A2B",
  accent: "#6CFFF8",
  card: "rgba(20,40,60,0.75)",
  border: "rgba(33,134,235,0.35)",
  text: "#fff",
  textSecondary: "#A3B4C6",
  buttonHover: "#1761b5"
};

const accountTypes = [
  { label: "1 Step Alpha", value: "1step" },
  { label: "2 Step Alpha", value: "2step" },
  { label: "Fast Pass", value: "fastpass" }
];

const accountSizes = [
  { label: "$5k", value: "5k" },
  { label: "$10k", value: "10k" },
  { label: "$25k", value: "25k" },
  { label: "$50k", value: "50k" },
  { label: "$100k", value: "100k" },
  { label: "$200k", value: "200k" }
];

const pricing = {
  "1step":   { "5k": 49,  "10k": 69,  "25k": 119, "50k": 229, "100k": 399, "200k": 699 },
  "2step":   { "5k": 39,  "10k": 59,  "25k": 99,  "50k": 199, "100k": 349, "200k": 599 },
  "fastpass":{ "5k": 79,  "10k": 109, "25k": 179, "50k": 299, "100k": 499, "200k": 899 }
};

const rules = {
  "1step": {
    phase1: { profitTarget: "8%", dailyLoss: "6%", maxLoss: "12%", drawdown: "Static" },
    funded: { profitTarget: "-", dailyLoss: "5%", maxLoss: "10%", drawdown: "Static" }
  },
  "2step": {
    phase1: { profitTarget: "8%", dailyLoss: "5%", maxLoss: "10%", drawdown: "Static" },
    funded: { profitTarget: "-", dailyLoss: "4%", maxLoss: "8%", drawdown: "Static" }
  },
  "fastpass": {
    phase1: { profitTarget: "10%", dailyLoss: "8%", maxLoss: "16%", drawdown: "Static" },
    funded: { profitTarget: "-", dailyLoss: "6%", maxLoss: "12%", drawdown: "Static" }
  }
};

export default function HowToGetFunded() {
  const [selectedType, setSelectedType] = useState("1step");
  const [selectedSize, setSelectedSize] = useState("25k");

  const price = pricing[selectedType][selectedSize];
  const rule = rules[selectedType];

  return (
    <section style={{
      minHeight: "480px",
      width: "100%",
      background: `linear-gradient(120deg, ${COLORS.secondary} 60%, #0C2B3A 100%)`,
      fontFamily: "Inter, Roboto, sans-serif",
      padding: "70px 0"
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <h2 style={{
          textAlign: "center",
          color: COLORS.text,
          fontWeight: 800,
          fontSize: 40,
          letterSpacing: 1,
          marginBottom: 36,
          textShadow: `0 4px 24px ${COLORS.primary}55`
        }}>
          <span style={{ color: COLORS.primary, filter: "drop-shadow(0 0 6px #2186eb88)" }}>
            ✦ Get Funded <span style={{ color: COLORS.text }}>Today</span> ✦
          </span>
        </h2>
        <div style={{
          display: "flex",
          gap: 36,
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          {/* LEFT PANEL */}
          <div style={{
            background: COLORS.card,
            border: `2px solid ${COLORS.border}`,
            borderRadius: 22,
            padding: 36,
            minWidth: 330,
            maxWidth: 400,
            boxShadow: `0 6px 40px 0 ${COLORS.primary}18`,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            backdropFilter: "blur(8px)"
          }}>
            {/* Account Type */}
            <div>
              <div style={{ fontWeight: 700, color: COLORS.textSecondary, marginBottom: 12, fontSize: 18 }}>Account Type</div>
              <div style={{ display: "flex", gap: 12 }}>
                {accountTypes.map((type) => (
                  <button
                    key={type.value}
                    style={{
                      background: selectedType === type.value ? COLORS.primary : "transparent",
                      color: selectedType === type.value ? "#191c24" : COLORS.textSecondary,
                      border: `2px solid ${COLORS.primary}`,
                      borderRadius: 10,
                      padding: "10px 22px",
                      fontWeight: 700,
                      fontSize: 16,
                      cursor: "pointer",
                      transition: "all 0.18s",
                      boxShadow: selectedType === type.value ? `0 0 8px 1px ${COLORS.primary}88` : "none"
                    }}
                    onClick={() => setSelectedType(type.value)}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Account Size */}
            <div>
              <div style={{ fontWeight: 700, color: COLORS.textSecondary, marginBottom: 12, marginTop: 6, fontSize: 18 }}>Account Size</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {accountSizes.map((size) => (
                  <button
                    key={size.value}
                    style={{
                      background: selectedSize === size.value ? COLORS.primary : "transparent",
                      color: selectedSize === size.value ? "#191c24" : COLORS.textSecondary,
                      border: `2px solid ${COLORS.primary}`,
                      borderRadius: 10,
                      padding: "10px 22px",
                      fontWeight: 700,
                      fontSize: 16,
                      cursor: "pointer",
                      marginBottom: 4,
                      transition: "all 0.18s",
                      boxShadow: selectedSize === size.value ? `0 0 8px 1px ${COLORS.primary}88` : "none"
                    }}
                    onClick={() => setSelectedSize(size.value)}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Pricing box */}
            <div style={{
              background: "rgba(33,134,235, 0.10)",
              border: `2px solid ${COLORS.primary}`,
              borderRadius: 18,
              padding: 30,
              marginTop: 10,
              textAlign: "center",
              boxShadow: `0 2px 12px 0 ${COLORS.primary}30`
            }}>
              <div style={{ color: COLORS.textSecondary, fontWeight: 600, marginBottom: 7, fontSize: 16 }}>One-Time Fee</div>
              <div style={{ fontWeight: 900, color: COLORS.primary, fontSize: 38, letterSpacing: "1px", lineHeight: 1.1, textShadow: `0 0 8px ${COLORS.primary}55` }}>${price}</div>
              <div style={{ color: COLORS.textSecondary, fontSize: 16, marginBottom: 20 }}>For {accountSizes.find(s => s.value === selectedSize).label} Account</div>
              <button
                style={{
                  background: COLORS.primary,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 0",
                  width: "100%",
                  fontWeight: 800,
                  fontSize: 20,
                  cursor: "pointer",
                  transition: "background 0.18s",
                  boxShadow: `0 2px 16px 0 ${COLORS.primary}66`
                }}
                onMouseOver={e => e.currentTarget.style.background = COLORS.buttonHover}
                onMouseOut={e => e.currentTarget.style.background = COLORS.primary}
              >Buy Challenge</button>
            </div>
          </div>
          {/* RIGHT PANEL */}
          <div style={{
            background: COLORS.card,
            border: `2px solid ${COLORS.border}`,
            borderRadius: 22,
            padding: 36,
            minWidth: 330,
            maxWidth: 400,
            boxShadow: `0 6px 40px 0 ${COLORS.primary}18`,
            color: COLORS.text,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backdropFilter: "blur(8px)"
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 19 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", color: COLORS.textSecondary, fontWeight: 700 }}></th>
                  <th style={{ color: COLORS.primary, fontWeight: 800, textAlign: "center" }}>Phase 1</th>
                  <th style={{ color: COLORS.primary, fontWeight: 800, textAlign: "center" }}>Funded</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: COLORS.textSecondary, fontWeight: 700, padding: "12px 0" }}>Profit Target</td>
                  <td style={{ textAlign: "center", fontWeight: 800 }}>{rule.phase1.profitTarget}</td>
                  <td style={{ textAlign: "center", fontWeight: 800 }}>{rule.funded.profitTarget}</td>
                </tr>
                <tr>
                  <td style={{ color: COLORS.textSecondary, fontWeight: 700, padding: "12px 0" }}>Daily Loss</td>
                  <td style={{ textAlign: "center", fontWeight: 800 }}>{rule.phase1.dailyLoss}</td>
                  <td style={{ textAlign: "center", fontWeight: 800 }}>{rule.funded.dailyLoss}</td>
                </tr>
                <tr>
                  <td style={{ color: COLORS.textSecondary, fontWeight: 700, padding: "12px 0" }}>Maximum Loss</td>
                  <td style={{ textAlign: "center", fontWeight: 800 }}>{rule.phase1.maxLoss}</td>
                  <td style={{ textAlign: "center", fontWeight: 800 }}>{rule.funded.maxLoss}</td>
                </tr>
                <tr>
                  <td style={{ color: COLORS.textSecondary, fontWeight: 700, padding: "12px 0" }}>Maximum Drawdown Type</td>
                  <td style={{ textAlign: "center", fontWeight: 800 }}>{rule.phase1.drawdown}</td>
                  <td style={{ textAlign: "center", fontWeight: 800 }}>{rule.funded.drawdown}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
