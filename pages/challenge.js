import React, { useState } from "react";
import { useRouter } from "next/router";

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
  "1step": "1 Step Alpha",
  "2step": "2 Step Alpha",
  "fastpass": "Fast Pass",
};

const COLORS = {
  card: "rgba(24,35,58,0.85)",
  border: "rgba(72,207,255,0.20)",
  text: "#fff",
  textSecondary: "#cbe8ff",
  bg: `linear-gradient(120deg, #233354 0%, #102046 100%)`,
  accent: "#48cfff",
  accentHover: "#8ce3ff",
  buttonActive: "#48cfff",
  buttonActiveText: "#18233a",
  buttonInactive: "rgba(24,35,58,0.85)",
  buttonInactiveText: "#cbe8ff",
  buttonBorder: "rgba(72,207,255,0.18)",
};

export default function Challenge() {
  const [challengeType, setChallengeType] = useState("2step");
  const [accountSize, setAccountSize] = useState("200k");
  const router = useRouter();

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

  const activePricing = pricingArr.find(
    (p) => p.size.replace("k", "") === accountSize.replace("k", "")
  );
  const price = activePricing ? activePricing.price : "$0";
  const sizeLabel = SIZES.find((s) => s.key === accountSize)?.label || "$0";

  const handleBuyChallenge = () => {
    router.push("/payment");
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Soft radial overlay for extra blending */}
      <div
        style={{
          pointerEvents: "none",
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(circle at 60% 30%, #3bbcfb22 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      {/* Animated grid and candles */}
      <div
        className="challenge-bg"
        style={{
          minHeight: "100vh",
          background: COLORS.bg,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          zIndex: 1,
          padding: "60px 16px",
          fontFamily: "Inter, Roboto, sans-serif",
          overflow: "hidden",
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
          .card-blur {
            backdrop-filter: blur(8px);
          }
          .pricing-card, .rules-card {
            background: ${COLORS.card};
            backdrop-filter: blur(8px);
            border-radius: 18px;
            box-shadow: 0 8px 48px #0af1, 0 1.5px 0 0 ${COLORS.border};
            border: 1.5px solid ${COLORS.border};
            margin: 0;
          }
          .pricing-card {
            padding: 38px 34px 32px 34px;
            min-width: 340px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: stretch;
          }
          .rules-card {
            min-width: 340px;
            max-width: 700px;
            overflow: hidden;
            padding-bottom: 6px;
          }
          .account-type-group, .account-size-group {
            display: flex;
            gap: 18px;
          }
          .account-type-btn, .account-size-btn {
            flex: 1 1 0;
            padding: 18px 0;
            font-size: 18px;
            font-weight: 700;
            border: 2px solid ${COLORS.buttonBorder};
            border-radius: 12px;
            background: ${COLORS.buttonInactive};
            color: ${COLORS.buttonInactiveText};
            cursor: pointer;
            transition: background 0.13s, color 0.13s, border 0.13s, box-shadow 0.13s;
            backdrop-filter: blur(8px);
          }
          .account-type-btn.active, .account-size-btn.active {
            background: ${COLORS.buttonActive};
            color: ${COLORS.buttonActiveText};
            border-color: ${COLORS.buttonActive};
            box-shadow: 0 2px 16px #48cfff33;
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
            background: ${COLORS.accent};
            color: ${COLORS.card};
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
            box-shadow: 0 2px 12px #48cfff22;
          }
          .pricing-card .buy-btn:hover {
            background: ${COLORS.accentHover};
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
            color: ${COLORS.accent};
            font-size: 17px;
            padding: 24px 20px;
            letter-spacing: 1px;
            background: #22345a60;
          }
          .rules-card th:first-child, .rules-card td:first-child {
            text-align: left;
          }
          .rules-card tbody tr {
            border-top: 1.5px solid #284366;
          }
          .rules-card td {
            text-align: center;
            padding: 18px;
            font-weight: 900;
            color: ${COLORS.text};
            background: transparent;
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
          .bg-grid {
            position: fixed;
            inset: 0;
            pointer-events: none;
            background-image: linear-gradient(rgba(72,207,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(72,207,255,0.07) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: 0;
            animation: gridfade 2s ease-in;
          }
          @keyframes gridfade {
            0% {opacity:0;}
            100% {opacity:1;}
          }
          .candle {
            position: fixed;
            bottom: 0;
            width: 5px;
            height: 28px;
            background: #48cfff;
            opacity: 0.22;
            border-radius: 2px;
            animation: candlemove 5s linear infinite;
            z-index: 2;
          }
          @keyframes candlemove {
            0% {transform: translateY(100vh);}
            100% {transform: translateY(-40px);}
          }
        `}</style>

        {/* Controls */}
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
                1 Step Alpha
              </button>
              <button
                className={`account-type-btn${challengeType === "2step" ? " active" : ""}`}
                onClick={() => setChallengeType("2step")}
              >
                2 Step Alpha
              </button>
              <button
                className={`account-type-btn${challengeType === "fastpass" ? " active" : ""}`}
                onClick={() => setChallengeType("fastpass")}
              >
                Fast Pass
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
        {/* Pricing + Rules */}
        <div className="challenge-row" style={{ maxWidth: 1400, margin: "32px auto 0 auto" }}>
          <div className="pricing-card card-blur">
            <div className="one-time-label">One-Time Fee</div>
            <div className="price">{price}</div>
            <div className="for-label">For {sizeLabel} Account</div>
            <button className="buy-btn" onClick={handleBuyChallenge}>
              Buy Challenge
            </button>
          </div>
          <div className="rules-card card-blur">
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
      {/* Animated overlays */}
      <div className="bg-grid" />
      <div className="candle" style={{ left: "18%", animationDelay: "0s" }} />
      <div className="candle" style={{ left: "32%", animationDelay: "2s" }} />
      <div className="candle" style={{ left: "55%", animationDelay: "1s" }} />
      <div className="candle" style={{ left: "71%", animationDelay: "2.5s" }} />
      <div className="candle" style={{ left: "81%", animationDelay: "3s" }} />
    </div>
  );
}
