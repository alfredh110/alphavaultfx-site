import React, { useState } from "react";

// Pricing for each challenge type and size (update as needed)
const PRICING = {
  "2step": [
    { size: "5k", price: "$39" },
    { size: "10k", price: "$59" },
    { size: "25k", price: "$99" },
    { size: "50k", price: "$199" },
    { size: "100k", price: "$349" },
    { size: "200k", price: "$599" }
  ],
  "1step": [
    { size: "5k", price: "$49" },
    { size: "10k", price: "$69" },
    { size: "25k", price: "$119" },
    { size: "50k", price: "$229" },
    { size: "100k", price: "$399" },
    { size: "200k", price: "$699" }
  ],
  "fastpass": [
    { size: "5k", price: "$79" },
    { size: "10k", price: "$109" },
    { size: "25k", price: "$179" },
    { size: "50k", price: "$299" },
    { size: "100k", price: "$499" },
    { size: "200k", price: "$899" }
  ]
};

const RULES_2STEP = [
  { label: "Profit Target", values: ["8%", "5%", "-"] },
  { label: "Daily Loss", values: ["6%", "6%", "5%"] },
  { label: "Maximum Loss", values: ["12%", "12%", "10%"] },
  { label: "Maximum Drawdown Type", values: ["Static", "Static", "Static"] },
];
const RULES_1STEP = [
  { label: "Profit Target", values: ["10%", "-"] },
  { label: "Daily Loss", values: ["4%", "4%"] },
  { label: "Maximum Loss", values: ["8%", "7%"] },
  { label: "Maximum Drawdown Type", values: ["Static", "Static"] },
  { label: "Inactivity", values: ["15 days", "15 days"] },
];
const RULES_FASTPASS = [
  { label: "Profit Target", values: ["6%", "-"] },
  { label: "Daily Loss", values: ["5%", "3%"] },
  { label: "Maximum Loss", values: ["8%", "7%"] },
  { label: "Maximum Drawdown Type", values: ["Static", "Static"] },
  { label: "Minimum Trading Period", values: ["5 days", "10 days"] },
  { label: "Trading Period", values: ["No Time Limit", "No Time Limit"] },
];

const PHASES_2STEP = ["Phase 1", "Phase 2", "Funded"];
const PHASES_1STEP = ["Phase 1", "Funded"];
const PHASES_FASTPASS = ["Phase 1", "Funded"];

const COLORS = {
  card: "rgba(24,35,58,0.90)", // semi-transparent glassy card
  border: "#34bfff",
  text: "#fff",
  textSecondary: "#b4c7e7",
  accent: "#34bfff",
  accentHover: "#86dbff",
  bg: "radial-gradient(ellipse 80% 80% at 50% 40%, #17213a 80%, #10182a 100%)", // Sample, replace with dashboard.js
  tableRow: "rgba(26,41,67, 0.9)"
};

export default function Challenge() {
  const [challengeType, setChallengeType] = useState("2step");

  let rules, phases, pricing;
  if (challengeType === "2step") {
    rules = RULES_2STEP;
    phases = PHASES_2STEP;
    pricing = PRICING["2step"];
  } else if (challengeType === "1step") {
    rules = RULES_1STEP;
    phases = PHASES_1STEP;
    pricing = PRICING["1step"];
  } else {
    rules = RULES_FASTPASS;
    phases = PHASES_FASTPASS;
    pricing = PRICING["fastpass"];
  }

  const getChallengeLabel = () => {
    if (challengeType === "2step") return "2 Step Alpha";
    if (challengeType === "1step") return "1 Step Alpha";
    if (challengeType === "fastpass") return "Fast Pass";
    return "";
  };

  return (
    <div className="challenge-bg" style={{
      minHeight: "100vh",
      background: COLORS.bg,
      padding: "60px 16px",
      fontFamily: "Inter, Roboto, sans-serif",
      transition: "background 0.5s"
    }}>
      {/* Animate in */}
      <style>{`
        .glass-card {
          animation: fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both;
          backdrop-filter: blur(16px);
          transition: box-shadow 0.2s, border-color 0.15s;
        }
        .glass-card:hover {
          box-shadow: 0 8px 48px 0 #34bfff22;
          border-color: #86dbff;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(32px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 18px;
        }
        .pricing-box {
          background: rgba(26, 41, 67, 0.93);
          border-radius: 14px;
          text-align: center;
          color: ${COLORS.text};
          box-shadow: 0 2px 14px #34bfff0a;
          border: 2px solid transparent;
          transition: border 0.18s, transform 0.14s;
          cursor: pointer;
          animation: fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both;
        }
        .pricing-box:hover {
          border: 2px solid #34bfff;
          transform: translateY(-4px) scale(1.03);
        }
        .challenge-toggle button {
          transition: background .14s, color .14s, box-shadow .14s;
        }
        .challenge-toggle button:focus {
          outline: 2px solid #34bfff;
        }
        .rules-table th, .rules-table td {
          transition: color .16s, background .16s;
        }
      `}</style>
      {/* Toggle Challenge Type */}
      <div className="challenge-toggle" style={{textAlign: "center", marginBottom: 36}}>
        <button
          onClick={() => setChallengeType("2step")}
          style={{
            background: challengeType === "2step" ? COLORS.accent : COLORS.card,
            color: challengeType === "2step" ? COLORS.card : COLORS.textSecondary,
            border: "none",
            borderRadius: 10,
            padding: "10px 28px",
            marginRight: 16,
            fontWeight: 800,
            cursor: "pointer",
            fontSize: 18,
            boxShadow: challengeType === "2step" ? "0 2px 14px #34bfff22" : "none"
          }}
        >2 Step Alpha</button>
        <button
          onClick={() => setChallengeType("1step")}
          style={{
            background: challengeType === "1step" ? COLORS.accent : COLORS.card,
            color: challengeType === "1step" ? COLORS.card : COLORS.textSecondary,
            border: "none",
            borderRadius: 10,
            padding: "10px 28px",
            marginRight: 16,
            fontWeight: 800,
            cursor: "pointer",
            fontSize: 18,
            boxShadow: challengeType === "1step" ? "0 2px 14px #34bfff22" : "none"
          }}
        >1 Step Alpha</button>
        <button
          onClick={() => setChallengeType("fastpass")}
          style={{
            background: challengeType === "fastpass" ? COLORS.accent : COLORS.card,
            color: challengeType === "fastpass" ? COLORS.card : COLORS.textSecondary,
            border: "none",
            borderRadius: 10,
            padding: "10px 28px",
            fontWeight: 800,
            cursor: "pointer",
            fontSize: 18,
            boxShadow: challengeType === "fastpass" ? "0 2px 14px #34bfff22" : "none"
          }}
        >Fast Pass</button>
      </div>

      {/* Pricing Card */}
      <div className="glass-card" style={{
        maxWidth: 670,
        margin: "0 auto 40px auto",
        borderRadius: 22,
        background: COLORS.card,
        boxShadow: "0 4px 36px #0005",
        border: `2.5px solid ${COLORS.border}`,
        overflow: "hidden",
        padding: "40px 30px 32px 30px"
      }}>
        <div style={{fontSize: 28, fontWeight: 900, color: COLORS.text, marginBottom: 24, letterSpacing: 0.2}}>
          {getChallengeLabel()} Pricing
        </div>
        <div className="pricing-grid">
          {pricing.map(({size, price}) => (
            <div key={size} className="pricing-box">
              <div style={{fontWeight: 800, fontSize: 18, marginBottom: 7, color: COLORS.accent}}>{size.toUpperCase()}</div>
              <div style={{fontWeight: 900, fontSize: 22, color: COLORS.text}}>{price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Rules Table */}
      <div className="glass-card" style={{
        maxWidth: 670,
        margin: "0 auto",
        borderRadius: 22,
        background: COLORS.card,
        boxShadow: "0 4px 36px #0005",
        border: `2.5px solid ${COLORS.border}`,
        overflow: "hidden",
        paddingBottom: 6
      }}>
        <table className="rules-table" style={{
          width: "100%",
          color: COLORS.text,
          borderCollapse: "collapse",
          fontSize: 17
        }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "24px 20px", fontWeight: 700, color: COLORS.textSecondary, fontSize: 17 }}> </th>
              {phases.map(phase => (
                <th key={phase} style={{ textAlign: "center", fontWeight: 700, color: COLORS.accent, fontSize: 17 }}>{phase}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rules.map((rule, idx) => (
              <tr key={rule.label} style={{
                borderTop: idx === 0 ? "none" : `1.5px solid #223150`,
                background: idx % 2 === 1 ? COLORS.tableRow : "transparent",
                transition: "background 0.16s"
              }}>
                <td style={{
                  padding: "18px",
                  color: (
                    rule.label === "Maximum Drawdown Type" ||
                    rule.label === "Trading Period"
                  ) ? COLORS.textSecondary : COLORS.text,
                  fontWeight: (
                    rule.label === "Maximum Drawdown Type" ||
                    rule.label === "Trading Period"
                  ) ? 600 : 700,
                  minWidth: 180,
                  letterSpacing: 0.1
                }}>
                  {rule.label}
                </td>
                {rule.values.map((v, i) => (
                  <td key={i} style={{
                    textAlign: "center",
                    padding: "18px",
                    color: (
                      rule.label === "Maximum Drawdown Type" ||
                      rule.label === "Trading Period"
                    ) ? COLORS.textSecondary : COLORS.accent,
                    fontWeight: (
                      rule.label === "Maximum Drawdown Type" ||
                      rule.label === "Trading Period"
                    ) ? 600 : 900,
                    fontSize: 17,
                    letterSpacing: 0.1
                  }}>
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
