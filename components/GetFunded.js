import React, { useState } from "react";

const accountTypes = [
  { label: "1 Step Hero" },
  { label: "2 Step Alpha" },
  { label: "Fast Pass" }
];

const accountSizes = [
  { label: "$5k", fee: 35 },
  { label: "$10k", fee: 70 },
  { label: "$25k", fee: 170 },
  { label: "$50k", fee: 320 },
  { label: "$100k", fee: 600 },
  { label: "$200k", fee: 1100 },
];

const stats = [
  { label: "Profit Target", values: ["8%", "5%", "-"] },
  { label: "Daily Loss", values: ["6%", "6%", "5%"] },
  { label: "Maximum Loss", values: ["12%", "12%", "10%"] },
  { label: "Maximum Drawdown Type", values: ["Static", "Static", "Static"] }
];

export default function GetFunded() {
  const [selectedType, setSelectedType] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <section
      style={{
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "radial-gradient(ellipse at top left, #172132 50%, rgba(19,27,38,0.9) 100%)",
        padding: "60px 0 80px",
        position: "relative"
      }}
    >
      {/* Title */}
      <h2 style={{
        color: "white",
        fontSize: "2.5rem",
        fontWeight: 700,
        marginBottom: "36px",
        textAlign: "center",
        letterSpacing: "0.02em",
        position: "relative"
      }}>
        <span style={{ color: "#2186eb" }}>Get Funded</span> Today
        {/* Blue sparkle effect */}
        <span style={{
          position: "absolute",
          left: "-50px",
          top: "-18px",
          color: "#2186eb",
          fontSize: "2rem"
        }}>✦</span>
        <span style={{
          position: "absolute",
          right: "-50px",
          top: "-18px",
          color: "#2186eb",
          fontSize: "2rem"
        }}>✦</span>
      </h2>
      {/* Card Row */}
      <div style={{
        display: "flex",
        gap: "32px",
        maxWidth: "1100px",
        width: "100%",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        {/* Left Card */}
        <div style={{
          background: "#131b26",
          borderRadius: "20px",
          boxShadow: "0 4px 32px 0 rgba(31,38,135,0.14)",
          border: "1.5px solid #2186eb",
          minWidth: "320px",
          maxWidth: "370px",
          padding: "36px 28px 28px 28px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          flex: 1
        }}>
          {/* Account Type */}
          <div style={{ color: "#c6d4e3", marginBottom: "6px", fontWeight: 500 }}>Account Type</div>
          <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
            {accountTypes.map((type, idx) => (
              <button
                key={type.label}
                onClick={() => setSelectedType(idx)}
                style={{
                  flex: 1,
                  background: selectedType === idx ? "#2186eb" : "transparent",
                  color: selectedType === idx ? "white" : "#c6d4e3",
                  border: "1.5px solid #2186eb",
                  borderRadius: "8px",
                  padding: "10px 0",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "1rem",
                  transition: "0.2s"
                }}
              >
                {type.label}
              </button>
            ))}
          </div>
          {/* Account Size */}
          <div style={{ color: "#c6d4e3", marginBottom: "6px", fontWeight: 500 }}>Account Size</div>
          <div style={{ display: "flex", gap: "12px", marginBottom: "18px", flexWrap: "wrap" }}>
            {accountSizes.map((size, idx) => (
              <button
                key={size.label}
                onClick={() => setSelectedSize(idx)}
                style={{
                  background: selectedSize === idx ? "#2186eb" : "transparent",
                  color: selectedSize === idx ? "white" : "#c6d4e3",
                  border: "1.5px solid #2186eb",
                  borderRadius: "8px",
                  padding: "10px 18px",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "1rem",
                  marginBottom: "6px",
                  transition: "0.2s"
                }}
              >
                {size.label}
              </button>
            ))}
          </div>
          {/* Fee Box */}
          <div style={{
            background: "#172132",
            border: "1.5px solid #2186eb",
            borderRadius: "16px",
            padding: "22px 18px 12px 18px",
            marginTop: "8px",
            marginBottom: "6px"
          }}>
            <div style={{ color: "#a1b0c7", fontSize: "1rem", marginBottom: "6px" }}>One-Time Fee</div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <span style={{ color: "white", fontSize: "2.2rem", fontWeight: 700 }}>
                ${accountSizes[selectedSize].fee}
              </span>
              <span style={{ color: "#c6d4e3", fontSize: "1.1rem", marginLeft: "12px" }}>
                For {accountSizes[selectedSize].label} Account
              </span>
            </div>
            <button
              style={{
                width: "100%",
                marginTop: "18px",
                background: "#2186eb",
                color: "white",
                padding: "16px 0",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1.2rem",
                cursor: "pointer",
                letterSpacing: "0.02em",
                boxShadow: "0 1px 6px #2186eb66"
              }}
            >
              Buy Challenge
            </button>
          </div>
        </div>
        {/* Right Card: Stats Table */}
        <div style={{
          background: "#131b26",
          borderRadius: "20px",
          boxShadow: "0 4px 32px 0 rgba(31,38,135,0.11)",
          border: "1.5px solid #2186eb",
          minWidth: "350px",
          maxWidth: "470px",
          padding: "36px 28px 28px 28px",
          flex: 1
        }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ color: "#a1b0c7", fontWeight: 600, textAlign: "left", paddingBottom: "12px" }}></th>
                <th style={{ color: "#2186eb", fontWeight: 700, textAlign: "center" }}>Phase 1</th>
                <th style={{ color: "#2186eb", fontWeight: 700, textAlign: "center" }}>Phase 2</th>
                <th style={{ color: "#2186eb", fontWeight: 700, textAlign: "center" }}>Funded</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((row) => (
                <tr key={row.label} style={{ borderBottom: "1px solid #202a3a" }}>
                  <td style={{ color: "#c6d4e3", padding: "8px 0", fontWeight: 500 }}>{row.label}</td>
                  {row.values.map((val, i) => (
                    <td key={i} style={{
                      color: "white",
                      textAlign: "center",
                      padding: "8px 0",
                      fontWeight: 500
                    }}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
