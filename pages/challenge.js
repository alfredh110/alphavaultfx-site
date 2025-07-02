import React, { useState } from "react";

// Rules for 2 Step Alpha
const RULES_2STEP = [
  { label: "Profit Target", values: ["8%", "5%", "-"] },
  { label: "Daily Loss", values: ["6%", "6%", "5%"] },
  { label: "Maximum Loss", values: ["12%", "12%", "10%"] },
  { label: "Maximum Drawdown Type", values: ["Static", "Static", "Static"] },
];

// Rules for 1 Step Alpha
const RULES_1STEP = [
  { label: "Profit Target", values: ["10%", "-"] },
  { label: "Daily Loss", values: ["4%", "4%"] },
  { label: "Maximum Loss", values: ["8%", "7%"] },
  { label: "Maximum Drawdown Type", values: ["Static", "Static"] },
  { label: "Inactivity", values: ["15 days", "15 days"] },
];

// Rules for Fast Pass
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
  card: "#23252B",
  border: "#FFD43B", // Or change to a blue if you want blue border.
  text: "#fff",
  textSecondary: "#8d929b"
};

export default function Challenge() {
  // Toggle between 2 Step, 1 Step, and Fast Pass for demo; replace with your logic.
  const [challengeType, setChallengeType] = useState("2step");

  let rules, phases;
  if (challengeType === "2step") {
    rules = RULES_2STEP;
    phases = PHASES_2STEP;
  } else if (challengeType === "1step") {
    rules = RULES_1STEP;
    phases = PHASES_1STEP;
  } else {
    rules = RULES_FASTPASS;
    phases = PHASES_FASTPASS;
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#111c2e",
      padding: "60px 16px",
      fontFamily: "Inter, Roboto, sans-serif"
    }}>
      {/* Demo toggle */}
      <div style={{textAlign: "center", marginBottom: 32}}>
        <button
          onClick={() => setChallengeType("2step")}
          style={{
            background: challengeType === "2step" ? COLORS.border : COLORS.card,
            color: challengeType === "2step" ? "#23252B" : COLORS.textSecondary,
            border: "none",
            borderRadius: 8,
            padding: "8px 20px",
            marginRight: 12,
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 15,
          }}
        >2 Step Alpha</button>
        <button
          onClick={() => setChallengeType("1step")}
          style={{
            background: challengeType === "1step" ? COLORS.border : COLORS.card,
            color: challengeType === "1step" ? "#23252B" : COLORS.textSecondary,
            border: "none",
            borderRadius: 8,
            padding: "8px 20px",
            marginRight: 12,
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 15,
          }}
        >1 Step Alpha</button>
        <button
          onClick={() => setChallengeType("fastpass")}
          style={{
            background: challengeType === "fastpass" ? COLORS.border : COLORS.card,
            color: challengeType === "fastpass" ? "#23252B" : COLORS.textSecondary,
            border: "none",
            borderRadius: 8,
            padding: "8px 20px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 15,
          }}
        >Fast Pass</button>
      </div>
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
              <th style={{ textAlign: "left", padding: "22px 18px", fontWeight: 600, color: COLORS.textSecondary }}> </th>
              {phases.map(phase => (
                <th key={phase} style={{ textAlign: "center", fontWeight: 600, color: COLORS.textSecondary }}>{phase}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rules.map((rule, idx) => (
              <tr key={rule.label} style={{ borderTop: idx === 0 ? "none" : "1px solid #32343A" }}>
                <td style={{
                  padding: "18px",
                  color: (rule.label === "Maximum Drawdown Type" || rule.label === "Trading Period") ? COLORS.textSecondary : COLORS.text,
                  fontWeight: (rule.label === "Maximum Drawdown Type" || rule.label === "Trading Period") ? 500 : 600,
                  minWidth: 180
                }}>
                  {rule.label}
                </td>
                {rule.values.map((v, i) => (
                  <td key={i} style={{
                    textAlign: "center",
                    padding: "18px",
                    color: (rule.label === "Maximum Drawdown Type" || rule.label === "Trading Period") ? COLORS.textSecondary : COLORS.text,
                    fontWeight: (rule.label === "Maximum Drawdown Type" || rule.label === "Trading Period") ? 500 : 700
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
