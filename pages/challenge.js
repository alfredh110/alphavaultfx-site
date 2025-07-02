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

// Navy/white/light blue theme
const COLORS = {
  card: "#18233a",
  border: "#34bfff", // Light blue border
  text: "#fff",
  textSecondary: "#b4c7e7",
  bg: "#111c2e",
  accent: "#34bfff",
  tableRow: "#1a2943"
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
    <div style={{
      minHeight: "100vh",
      background: COLORS.bg,
      padding: "60px 16px",
      fontFamily: "Inter, Roboto, sans-serif"
    }}>
      {/* Toggle Challenge Type */}
      <div style={{textAlign: "center", marginBottom: 32}}>
        <button
          onClick={() => setChallengeType("2step")}
          style={{
            background: challengeType === "2step" ? COLORS.accent : COLORS.card,
            color: challengeType === "2step" ? COLORS.card : COLORS.textSecondary,
            border: "none",
            borderRadius: 8,
            padding: "8px 20px",
            marginRight: 12,
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 15,
            transition: "background 0.12s"
          }}
        >2 Step Alpha</button>
        <button
          onClick={() => setChallengeType("1step")}
          style={{
            background: challengeType === "1step" ? COLORS.accent : COLORS.card,
            color: challengeType === "1step" ? COLORS.card : COLORS.textSecondary,
            border: "none",
            borderRadius: 8,
            padding: "8px 20px",
            marginRight: 12,
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 15,
            transition: "background 0.12s"
          }}
        >1 Step Alpha</button>
        <button
          onClick={() => setChallengeType("fastpass")}
          style={{
            background: challengeType === "fastpass" ? COLORS.accent : COLORS.card,
            color: challengeType === "fastpass" ? COLORS.card : COLORS.textSecondary,
            border: "none",
            borderRadius: 8,
            padding: "8px 20px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 15,
            transition: "background 0.12s"
          }}
        >Fast Pass</button>
      </div>

      {/* Pricing Card */}
      <div style={{
        maxWidth: 640,
        margin: "0 auto 34px auto",
        borderRadius: 16,
        background: COLORS.card,
        boxShadow: "0 4px 36px #0003",
        borderBottom: `2px solid ${COLORS.border}`,
        overflow: "hidden"
      }}>
        <div style={{padding: "32px 24px"}}>
          <div style={{fontSize: 24, fontWeight: 800, color: COLORS.text, marginBottom: 16}}>
            {getChallengeLabel()} Pricing
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 16
          }}>
            {pricing.map(({size, price}) => (
              <div key={size} style={{
                padding: "16px 12px",
                background: COLORS.tableRow,
                borderRadius: 10,
                textAlign: "center",
                color: COLORS.text
              }}>
                <div style={{fontWeight: 700, fontSize: 16, marginBottom: 4}}>{size.toUpperCase()}</div>
                <div style={{fontWeight: 900, fontSize: 20}}>{price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rules Table */}
      <div style={{
        maxWidth: 640,
        margin: "0 auto",
        borderRadius: 16,
        background: COLORS.card,
        boxShadow: "0 4px 36px #0003",
        borderBottom: `2px solid ${COLORS.border}`,
        overflow: "hidden"
      }}>
        <table style={{
          width: "100%",
          color: COLORS.text,
          borderCollapse: "collapse"
        }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "22px 18px", fontWeight: 600, color: COLORS.textSecondary, letterSpacing: 1 }}> </th>
              {phases.map(phase => (
                <th key={phase} style={{ textAlign: "center", fontWeight: 600, color: COLORS.textSecondary, letterSpacing: 1 }}>{phase}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rules.map((rule, idx) => (
              <tr key={rule.label} style={{ borderTop: idx === 0 ? "none" : `1px solid #223150`, background: idx % 2 === 1 ? COLORS.tableRow : "transparent" }}>
                <td style={{
                  padding: "18px",
                  color: (
                    rule.label === "Maximum Drawdown Type" ||
                    rule.label === "Trading Period"
                  ) ? COLORS.textSecondary : COLORS.text,
                  fontWeight: (
                    rule.label === "Maximum Drawdown Type" ||
                    rule.label === "Trading Period"
                  ) ? 500 : 600,
                  minWidth: 180
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
                    ) ? COLORS.textSecondary : COLORS.text,
                    fontWeight: (
                      rule.label === "Maximum Drawdown Type" ||
                      rule.label === "Trading Period"
                    ) ? 500 : 700
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
