import { useState } from "react";

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
      width: "100%",
      background: "#20283a",
      padding: "48px 0 48px 0"
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 16px" }}>
        <h2 style={{
          textAlign: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: 32,
          marginBottom: 32,
          letterSpacing: 0.2
        }}>
          How To Get Funded
        </h2>
        <div style={{
          display: "flex",
          gap: 22,
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          {/* LEFT PANEL */}
          <div style={{
            background: "#232e43",
            borderRadius: 10,
            padding: 20,
            minWidth: 270,
            maxWidth: 330,
            boxShadow: "0 4px 16px 0 #0001",
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <div>
              <div style={{ fontWeight: 600, color: "#b8cfff", marginBottom: 7 }}>Account Type</div>
              <div style={{ display: "flex", gap: 7 }}>
                {accountTypes.map((type) => (
                  <button
                    key={type.value}
                    style={{
                      background: selectedType === type.value ? "#2186eb" : "#20283a",
                      color: selectedType === type.value ? "#fff" : "#b8cfff",
                      border: "none",
                      borderRadius: 6,
                      padding: "6px 15px",
                      fontWeight: 600,
                      fontSize: 14,
                      cursor: "pointer",
                      boxShadow: selectedType === type.value ? "0 0 2px #2186eb88" : "none"
                    }}
                    onClick={() => setSelectedType(type.value)}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, color: "#b8cfff", marginBottom: 7, marginTop: 7 }}>Account Size</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {accountSizes.map((size) => (
                  <button
                    key={size.value}
                    style={{
                      background: selectedSize === size.value ? "#2186eb" : "#20283a",
                      color: selectedSize === size.value ? "#fff" : "#b8cfff",
                      border: "none",
                      borderRadius: 6,
                      padding: "6px 15px",
                      fontWeight: 600,
                      fontSize: 14,
                      cursor: "pointer",
                      marginBottom: 2,
                      boxShadow: selectedSize === size.value ? "0 0 2px #2186eb88" : "none"
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
              background: "#20283a",
              borderRadius: 8,
              padding: 15,
              marginTop: 8,
              textAlign: "center"
            }}>
              <div style={{ color: "#b8cfff", fontWeight: 500, marginBottom: 4 }}>One-Time Fee</div>
              <div style={{ fontWeight: 800, color: "#fff", fontSize: 24 }}>${price}</div>
              <div style={{ color: "#b8cfff", fontSize: 13, marginBottom: 9 }}>For {accountSizes.find(s => s.value === selectedSize).label} Account</div>
              <button style={{
                background: "#2186eb",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "10px 0",
                width: "100%",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer"
              }}>Buy Challenge</button>
            </div>
          </div>
          {/* RIGHT PANEL */}
          <div style={{
            background: "#232e43",
            borderRadius: 10,
            padding: 20,
            minWidth: 270,
            maxWidth: 330,
            boxShadow: "0 4px 16px 0 #0001",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", color: "#b8cfff", fontWeight: 600 }}></th>
                  <th style={{ color: "#2186eb", fontWeight: 700, textAlign: "center" }}>Phase 1</th>
                  <th style={{ color: "#2186eb", fontWeight: 700, textAlign: "center" }}>Funded</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: "#b8cfff", fontWeight: 500, padding: "6px 0" }}>Profit Target</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.phase1.profitTarget}</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.funded.profitTarget}</td>
                </tr>
                <tr>
                  <td style={{ color: "#b8cfff", fontWeight: 500, padding: "6px 0" }}>Daily Loss</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.phase1.dailyLoss}</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.funded.dailyLoss}</td>
                </tr>
                <tr>
                  <td style={{ color: "#b8cfff", fontWeight: 500, padding: "6px 0" }}>Maximum Loss</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.phase1.maxLoss}</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.funded.maxLoss}</td>
                </tr>
                <tr>
                  <td style={{ color: "#b8cfff", fontWeight: 500, padding: "6px 0" }}>Maximum Drawdown Type</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.phase1.drawdown}</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>{rule.funded.drawdown}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
