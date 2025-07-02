import React, { useState } from "react";

const COLORS = {
  background: "linear-gradient(120deg, #141925 60%, #1e2533 100%)",
  card: "rgba(22, 27, 38, 0.94)",
  cardBorder: "1.5px solid #232a3a",
  text: "#fff",
  textSecondary: "#bfc9da",
  accent: "#57c1f6",
  accent2: "#3c9cff",
};

const CHALLENGE_TYPES = [
  { label: "1 Step Hero", value: "1step" },
  { label: "2 Step Alpha", value: "2step" },
  { label: "Instant Alpha", value: "instant" }
];

const ACCOUNT_SIZES = [
  { label: "$5k", value: "5k" },
  { label: "$10k", value: "10k" },
  { label: "$25k", value: "25k" },
  { label: "$50k", value: "50k" },
  { label: "$100k", value: "100k" },
  { label: "$200k", value: "200k" }
];

// This should match your GetFundedToday.js!
const PRICING = {
  "1step":   { "5k": 49,  "10k": 69,  "25k": 119, "50k": 229, "100k": 399, "200k": 699 },
  "2step":   { "5k": 39,  "10k": 59,  "25k": 99,  "50k": 199, "100k": 349, "200k": 599 },
  "instant": { "5k": 79,  "10k": 109, "25k": 179, "50k": 299, "100k": 499, "200k": 899 }
};

export default function Challenge() {
  const [selectedType, setSelectedType] = useState("1step");
  const [selectedSize, setSelectedSize] = useState("25k");

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
        {/* Challenge Type Selector */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 18,
          marginBottom: 28,
        }}>
          {CHALLENGE_TYPES.map(type => (
            <button
              key={type.value}
              style={{
                background: selectedType === type.value ? COLORS.accent2 : COLORS.card,
                color: selectedType === type.value ? "#fff" : COLORS.textSecondary,
                border: "none",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 18,
                padding: "11px 28px",
                cursor: "pointer",
                boxShadow: selectedType === type.value ? "0 2px 10px #3c9cff33" : "none",
                transition: "background 0.17s, color 0.17s",
              }}
              onClick={() => setSelectedType(type.value)}
            >
              {type.label}
            </button>
          ))}
        </div>
        {/* Account Size Selector */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginBottom: 22,
          flexWrap: "wrap"
        }}>
          {ACCOUNT_SIZES.map(size => (
            <button
              key={size.value}
              style={{
                background: selectedSize === size.value ? COLORS.accent : COLORS.card,
                color: selectedSize === size.value ? "#fff" : COLORS.textSecondary,
                border: "none",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                padding: "8px 20px",
                cursor: "pointer",
                marginBottom: 6,
                boxShadow: selectedSize === size.value ? "0 2px 10px #57c1f633" : "none",
                transition: "background 0.16s, color 0.16s",
              }}
              onClick={() => setSelectedSize(size.value)}
            >
              {size.label}
            </button>
          ))}
        </div>
        {/* Pricing Card - matches GetFundedToday.js */}
        <div
          style={{
            background: COLORS.card,
            border: COLORS.cardBorder,
            borderRadius: 18,
            padding: "34px 18px 28px 18px",
            color: COLORS.text,
            maxWidth: 390,
            margin: "30px auto 0 auto",
            textAlign: "center",
            boxShadow: "0 4px 32px 0 #1a376633",
          }}
        >
          <div
            style={{
              color: COLORS.textSecondary,
              fontWeight: 500,
              fontSize: 17,
              marginBottom: 4,
            }}
          >
            One-Time Fee
          </div>
          <div
            style={{
              fontWeight: 800,
              color: COLORS.accent2,
              fontSize: 36,
              marginBottom: 2,
            }}
          >
            ${PRICING[selectedType][selectedSize]}
          </div>
          <div
            style={{
              color: COLORS.textSecondary,
              fontSize: 15,
              marginBottom: 12,
            }}
          >
            For {ACCOUNT_SIZES.find(s => s.value === selectedSize).label} Account
          </div>
          <button
            style={{
              background: COLORS.accent2,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "13px 0",
              width: "100%",
              fontWeight: 700,
              fontSize: 18,
              cursor: "pointer",
              boxShadow: "0 2px 8px #3c9cff33",
            }}
          >
            Start Challenge
          </button>
        </div>
      </div>
    </section>
  );
}
