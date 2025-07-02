import { useState } from "react";
import { useSession } from "next-auth/react";

const accountTypes = [
  { label: "1 Step Alpha", value: "1step" },
  { label: "2 Step Alpha", value: "2step" },
  { label: "Fast Pass", value: "fastpass" },
];

const accountSizes = [
  { label: "$5k", value: "5k" },
  { label: "$10k", value: "10k" },
  { label: "$25k", value: "25k" },
  { label: "$50k", value: "50k" },
  { label: "$100k", value: "100k" },
  { label: "$200k", value: "200k" },
];

// These are example configs. Update to match your actual pricing/rules!
const pricing = {
  "1step":   { "5k": 49,  "10k": 69,  "25k": 119, "50k": 229, "100k": 399, "200k": 699 },
  "2step":   { "5k": 39,  "10k": 59,  "25k": 99,  "50k": 199, "100k": 349, "200k": 599 },
  "fastpass":{ "5k": 79,  "10k": 109, "25k": 179, "50k": 299, "100k": 499, "200k": 899 },
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

export default function Challenge() {
  const { data } = useSession() || {};
  const [selectedType, setSelectedType] = useState("1step");
  const [selectedSize, setSelectedSize] = useState("25k");

  const price = pricing[selectedType][selectedSize];
  const rule = rules[selectedType];

  return (
    <div style={{ background: "#161e2e", minHeight: "100vh", padding: "0 0 60px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", paddingTop: 40, paddingBottom: 40 }}>
        <h1 style={{
          textAlign: "center",
          color: "#2186eb",
          fontWeight: 700,
          fontSize: 36,
          letterSpacing: 1,
          marginBottom: 32
        }}>
          <span style={{ color: "#2186eb" }}>✨ Get Funded <span style={{ color: "#fff" }}>Today</span> ✨</span>
        </h1>
        <div style={{ display: "flex", gap: 32, justifyContent: "center" }}>
          {/* LEFT PANEL */}
          <div style={{
            background: "#192136",
            border: "1.5px solid #2186eb",
            borderRadius: 16,
            padding: 32,
            minWidth: 320,
            maxWidth: 360,
            boxShadow: "0 2px 16px 0 rgba(33,134,235,0.07)",
            display: "flex",
            flexDirection: "column",
            gap: 24
          }}>
            <div>
              <div style={{ fontWeight: 700, color: "#b8cfff", marginBottom: 10 }}>Account Type</div>
              <div style={{ display: "flex", gap: 10 }}>
                {accountTypes.map((type) => (
                  <button
                    key={type.value}
                    style={{
                      background: selectedType === type.value ? "#2186eb" : "none",
                      color: selectedType === type.value ? "#fff" : "#b8cfff",
                      border: "1.5px solid #2186eb",
                      borderRadius: 8,
                      padding: "8px 18px",
                      fontWeight: 600,
                      fontSize: 15,
                      cursor: "pointer"
                    }}
                    onClick={() => setSelectedType(type.value)}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#b8cfff", marginBottom: 10, marginTop: 10 }}>Account Size</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {accountSizes.map((size) => (
                  <button
                    key={size.value}
                    style={{
                      background: selectedSize === size.value ? "#2186eb" : "none",
                      color: selectedSize === size.value ? "#fff" : "#b8cfff",
                      border: "1.5px solid #2186eb",
                      borderRadius: 8,
                      padding: "8px 18px",
                      fontWeight: 600,
                      fontSize: 15,
                      cursor: "pointer"
                    }}
                    onClick={() => setSelectedSize(size.value)}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
            <div style={{
              background: "#13192a",
              border: "1.5px solid #2186eb",
              borderRadius: 12,
              padding: 22,
              marginTop: 8,
              textAlign: "center"
            }}>
              <div style={{ color: "#b8cfff", fontWeight: 500, marginBottom: 8 }}>One-Time Fee</div>
              <div style={{ fontWeight: 900, color: "#fff", fontSize: 32 }}>${price}</div>
              <div style={{ color: "#b8cfff", fontSize: 15, marginBottom: 16 }}>For {accountSizes.find(s => s.value === selectedSize).label} Account</div>
              <button style={{
                background: "#2186eb",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 0",
                width: "100%",
                fontWeight: 700,
                fontSize: 18,
                cursor: "pointer",
                boxShadow: "0 2px 6px 0 rgba(33,134,235,0.09)"
              }}>Buy Challenge</button>
            </div>
          </div>
          {/* RIGHT PANEL */}
          <div style={{
            background: "#192136",
            border: "1.5px solid #2186eb",
            borderRadius: 16,
            padding: 32,
            minWidth: 320,
            maxWidth: 360,
            boxShadow: "0 2px 16px 0 rgba(33,134,235,0.07)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 17 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", color: "#b8cfff", fontWeight: 600 }}></th>
                  <th style={{ color: "#2186eb", fontWeight: 700, textAlign: "center" }}>Phase 1</th>
                  <th style={{ color: "#2186eb", fontWeight: 700, textAlign: "center" }}>Funded</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: "#b8cfff", fontWeight: 500, padding: "8px 0" }}>Profit Target</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.phase1.profitTarget}</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.funded.profitTarget}</td>
                </tr>
                <tr>
                  <td style={{ color: "#b8cfff", fontWeight: 500, padding: "8px 0" }}>Daily Loss</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.phase1.dailyLoss}</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.funded.dailyLoss}</td>
                </tr>
                <tr>
                  <td style={{ color: "#b8cfff", fontWeight: 500, padding: "8px 0" }}>Maximum Loss</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.phase1.maxLoss}</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.funded.maxLoss}</td>
                </tr>
                <tr>
                  <td style={{ color: "#b8cfff", fontWeight: 500, padding: "8px 0" }}>Maximum Drawdown Type</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.phase1.drawdown}</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.funded.drawdown}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = () => ({ props: {} });
