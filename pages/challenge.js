import React, { useState } from "react";

// Pricing for each challenge type and size (update as needed)
const PRICING = {
  "2step": [
    { size: "5k", price: "$39" },
    { size: "10k", price: "$59" },
    { size: "25k", price: "$99" },
    { size: "50k", price: "$199" },
    { size: "100k", price: "$349" },
    { size: "200k", price: "$599" },
  ],
  "1step": [
    { size: "5k", price: "$49" },
    { size: "10k", price: "$69" },
    { size: "25k", price: "$119" },
    { size: "50k", price: "$229" },
    { size: "100k", price: "$399" },
    { size: "200k", price: "$699" },
  ],
  "fastpass": [
    { size: "5k", price: "$79" },
    { size: "10k", price: "$109" },
    { size: "25k", price: "$179" },
    { size: "50k", price: "$299" },
    { size: "100k", price: "$499" },
    { size: "200k", price: "$899" },
  ],
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

const SIZES = [
  { key: "5k", label: "$5k" },
  { key: "10k", label: "$10k" },
  { key: "25k", label: "$25k" },
  { key: "50k", label: "$50k" },
  { key: "100k", label: "$100k" },
  { key: "200k", label: "$200k" },
];

const TYPE_LABELS = {
  "1step": "1 Step Hero",
  "2step": "2 Step Villain",
  "fastpass": "Fast Pass",
};

// Use your dashboard background here:
const DASHBOARD_BG =
  "radial-gradient(circle at 60% 30%, #161e2e 50%, #0d1117 100%)";

const COLORS = {
  card: "#18233a",
  border: "#34bfff",
  text: "#fff",
  textSecondary: "#b4c7e7",
  bg: DASHBOARD_BG,
  accent: "#34bfff",
  accentHover: "#86dbff",
  yellow: "#ffd43b",
  darkYellow: "#e6c200",
};

export default function Challenge() {
  const [challengeType, setChallengeType] = useState("2step");
  const [accountSize, setAccountSize] = useState("200k");

  let rules, phases, pricingArr;
  if (challengeType === "2step") {
    rules = RULES_2STEP;
    phases = PHASES_2STEP;
    pricingArr = PRICING["2step"];
  } else if (challengeType === "1step") {
    rules = RULES_1STEP;
    phases = PHASES_1STEP;
    pricingArr = PRICING["1step"];
  } else {
    rules = RULES_FASTPASS;
    phases = PHASES_FASTPASS;
    pricingArr = PRICING["fastpass"];
  }

  // Find the pricing for the selected size
  const activePricing = pricingArr.find(
    (p) => p.size.replace("k", "") === accountSize.replace("k", "")
  );
  const price = activePricing ? activePricing.price : "$0";
  const sizeLabel = SIZES.find((s) => s.key === accountSize)?.label || "$0";

  return (
    <div
      className="challenge-bg"
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        fontFamily: "Inter, Roboto, sans-serif",
        padding: "60px 16px",
      }}
    >
      <style>{`
        .challenge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          align-items: flex-start;
          margin-top: 32px;
        }
        .challenge-col {
          flex: 1 1 400px;
          min-width: 370px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .challenge-controls {
          margin-bottom: 18px;
        }
        .pricing-card, .rules-card {
          margin: 0;
        }
        .account-type-group {
          display: flex;
          gap: 18px;
        }
        .account-type-btn {
          flex: 1 1 0;
          padding: 18px 0;
          font-size: 18px;
          font-weight: 700;
          border: 2px solid #363c4e;
          border-radius: 12px;
          background: transparent;
          color: ${COLORS.textSecondary};
          cursor: pointer;
          transition: background 0.13s, color 0.13s, border 0.13s;
        }
        .account-type-btn.active {
          background: ${COLORS.yellow};
          color: #23252B;
          border-color: ${COLORS.yellow};
        }
        .account-size-group {
          display: flex;
          gap: 18px;
        }
        .account-size-btn {
          flex: 1 1 0;
          padding: 18px 0;
          font-size: 18px;
          font-weight: 700;
          border: 2px solid #363c4e;
          border-radius: 12px;
          background: transparent;
          color: ${COLORS.textSecondary};
          cursor: pointer;
          transition: background 0.13s, color 0.13s, border 0.13s;
        }
        .account-size-btn.active {
          background: ${COLORS.yellow};
          color: #23252B;
          border-color: ${COLORS.yellow};
        }
        .pricing-card {
          background: ${COLORS.card};
          border-radius: 18px;
          box-shadow: 0 4px 36px #0005;
          border: 2px solid ${COLORS.yellow};
          padding: 38px 34px 32px 34px;
          min-width: 340px;
          margin-bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: stretch;
        }
        .pricing-card .one-time-label {
          color: ${COLORS.textSecondary};
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .pricing-card .price {
          color: #fff;
          font-size: 48px;
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }
        .pricing-card .for-label {
          color: ${COLORS.textSecondary};
          font-size: 20px;
          margin-bottom: 28px;
        }
        .pricing-card .buy-btn {
          background: ${COLORS.yellow};
          color: #23252B;
          border: none;
          border-radius: 12px;
          width: 100%;
          padding: 22px 0;
          font-size: 26px;
          font-weight: 900;
          cursor: pointer;
          margin-top: 6px;
          margin-bottom: 0;
          transition: background 0.13s;
          box-shadow: 0 2px 12px #ffd43b22;
        }
        .pricing-card .buy-btn:hover {
          background: ${COLORS.darkYellow};
        }
        .rules-card {
          background: ${COLORS.card};
          border-radius: 18px;
          box-shadow: 0 4px 36px #0005;
          border: 2px solid ${COLORS.yellow};
          min-width: 340px;
          max-width: 700px;
          overflow: hidden;
          padding-bottom: 6px;
        }
        .rules-card table {
          width: 100%;
          color: ${COLORS.text};
          border-collapse: collapse;
          font-size: 17px;
        }
        .rules-card th, .rules-card td {
          transition: color .16s, background .16s;
        }
        .rules-card th {
          text-align: center;
          font-weight: 700;
          color: ${COLORS.textSecondary};
          font-size: 17px;
          padding: 24px 20px;
          letter-spacing: 1px;
        }
        .rules-card th:first-child, .rules-card td:first-child {
          text-align: left;
        }
        .rules-card tbody tr {
          border-top: 1.5px solid #223150;
        }
        .rules-card td {
          text-align: center;
          padding: 18px;
          font-weight: 900;
          color: ${COLORS.text};
        }
        .rules-card td:first-child {
          font-weight: 700;
          color: ${COLORS.textSecondary};
        }
        .rules-card tbody tr:first-child {
          border-top: none;
        }
        @media (max-width: 1100px) {
          .challenge-row { flex-direction: column; }
          .rules-card, .pricing-card { max-width: 100% !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Account Type */}
        <div className="challenge-controls">
          <div
            style={{
              marginBottom: 14,
              color: COLORS.textSecondary,
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            Account Type
          </div>
          <div className="account-type-group">
            <button
              className={`account-type-btn${challengeType === "1step" ? " active" : ""}`}
              onClick={() => setChallengeType("1step")}
            >
              {TYPE_LABELS["1step"]}
            </button>
            <button
              className={`account-type-btn${challengeType === "2step" ? " active" : ""}`}
              onClick={() => setChallengeType("2step")}
            >
              {TYPE_LABELS["2step"]}
            </button>
            <button
              className={`account-type-btn${challengeType === "fastpass" ? " active" : ""}`}
              onClick={() => setChallengeType("fastpass")}
            >
              {TYPE_LABELS["fastpass"]}
            </button>
          </div>
        </div>
        {/* Account Size */}
        <div className="challenge-controls">
          <div
            style={{
              marginBottom: 14,
              color: COLORS.textSecondary,
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            Account Size
          </div>
          <div className="account-size-group">
            {SIZES.map((s) => (
              <button
                key={s.key}
                className={`account-size-btn${accountSize === s.key ? " active" : ""}`}
                onClick={() => setAccountSize(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING + RULES GRID */}
      <div className="challenge-row" style={{ maxWidth: 1400, margin: "32px auto 0 auto" }}>
        {/* Pricing Card */}
        <div className="pricing-card">
          <div className="one-time-label">One-Time Fee</div>
          <div className="price">{price}</div>
          <div className="for-label">For {sizeLabel} Account</div>
          <button className="buy-btn">Buy Challenge</button>
        </div>
        {/* Rules Table */}
        <div className="rules-card">
          <table>
            <thead>
              <tr>
                <th> </th>
                {phases.map((phase) => (
                  <th key={phase}>{phase}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rules.map((rule, idx) => (
                <tr key={rule.label}>
                  <td>{rule.label}</td>
                  {rule.values.map((v, i) => (
                    <td key={i}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
