import React from "react";

export default function HowToGetFunded() {
  return (
    <section
      style={{
        background: "radial-gradient(ellipse at top left, #172132 60%, #131b26 100%)",
        padding: "60px 0 80px",
        position: "relative",
        color: "white"
      }}
    >
      {/* Stats Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          marginBottom: "56px",
          flexWrap: "wrap"
        }}
      >
        {[
          { big: "$1M+", label: "In Funding" },
          { big: "7 hrs", label: "Avg. Payout Time" },
          { big: "90%", label: "Profit Split" },
          { big: "5,000+", label: "Traders" },
          {
            big: (
              <span>
                <span style={{ color: "#22e06d", marginRight: 6, fontWeight: 700 }}>
                  ★
                </span>
                Trustpilot
              </span>
            ),
            label: (
              <>
                <img
                  src="https://cdn.trustpilot.net/brand-assets/4.8-stars.svg"
                  alt="4.8 stars"
                  style={{ height: 18, verticalAlign: "middle", marginRight: 6 }}
                />
                TrustScore 4.8
              </>
            )
          }
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              background: "rgba(33, 134, 235, 0.07)",
              borderRadius: 18,
              minWidth: 160,
              minHeight: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px 32px",
              boxShadow: "0 2px 10px 0 rgba(33,134,235,0.09)",
              fontSize: "1.2rem"
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "2.1rem", color: "#2186eb", marginBottom: 8 }}>
              {stat.big}
            </div>
            <div style={{ color: "#e0e6ed", fontWeight: 500, fontSize: "1.06rem" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div style={{ textAlign: "center", margin: "60px 0 0 0", position:"relative" }}>
        <span
          style={{
            color: "#2186eb",
            fontSize: "1.8rem",
            position: "absolute",
            left: "-42px",
            top: "-12px"
          }}
        >
          ✦
        </span>
        <span
          style={{
            color: "#2186eb",
            fontSize: "1.8rem",
            position: "absolute",
            right: "-42px",
            top: "-12px"
          }}
        >
          ✦
        </span>
        <h2 style={{ color: "white", fontWeight: 700, fontSize: "2.4rem", marginBottom: 0, letterSpacing: "0.02em" }}>
          How To Get Funded
        </h2>
      </div>

      {/* How-to Steps */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "32px",
          maxWidth: 920,
          margin: "50px auto 0 auto"
        }}
      >
        {/* Step 1 */}
        <div
          style={{
            background: "#161f2c",
            borderRadius: 15,
            padding: "28px 22px 22px 22px",
            boxShadow: "0 2px 12px 0 rgba(33,134,235,0.09)",
            minHeight: 170
          }}
        >
          <div style={{ marginBottom: 18 }}>
            <img
              src="/challenge-steps.png"
              alt="Challenge Steps"
              style={{
                width: 120,
                height: "auto",
                filter: "drop-shadow(0 0 10px #2186eb44)",
                marginBottom: 12
              }}
            />
          </div>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Select a Challenge</div>
          <div style={{ color: "#c5d3eb" }}>
            Choose a funding program that suits your goals and demonstrate your skills through our straightforward evaluation process.
          </div>
        </div>

        {/* Step 2 */}
        <div
          style={{
            background: "#161f2c",
            borderRadius: 15,
            padding: "28px 22px 22px 22px",
            boxShadow: "0 2px 12px 0 rgba(33,134,235,0.09)",
            minHeight: 170
          }}
        >
          <div style={{ marginBottom: 18 }}>
            <div
              style={{
                background: "#131b26",
                borderRadius: 10,
                padding: 12,
                width: 150,
                margin: "0 auto 0 0"
              }}
            >
              <div
                style={{
                  color: "#c5d3eb",
                  fontWeight: 600,
                  marginBottom: 6,
                  fontSize: "0.95rem"
                }}
              >
                Profit Target
              </div>
              <div style={{ width: "100%", background: "#283449", borderRadius: 8, height: 12, marginBottom: 4 }}>
                <div style={{
                  width: "50%",
                  height: "100%",
                  background: "linear-gradient(90deg, #2186eb 0, #4cc9ff 100%)",
                  borderRadius: 8
                }} />
              </div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.07rem" }}>50%</div>
            </div>
          </div>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Prove Your Skills</div>
          <div style={{ color: "#c5d3eb" }}>
            Trade consistently and achieve the profit target while adhering to risk management rules. Show your edge in the market.
          </div>
        </div>

        {/* Step 3 */}
        <div
          style={{
            background: "#161f2c",
            borderRadius: 15,
            padding: "28px 22px 22px 22px",
            boxShadow: "0 2px 12px 0 rgba(33,134,235,0.09)",
            minHeight: 170
          }}
        >
          <div style={{ marginBottom: 18 }}>
            <div
              style={{
                background: "#131b26",
                borderRadius: 10,
                padding: 12,
                width: 150,
                margin: "0 auto 0 0"
              }}
            >
              <div
                style={{
                  color: "#c5d3eb",
                  fontWeight: 600,
                  marginBottom: 6,
                  fontSize: "0.95rem"
                }}
              >
                Profit Balance
              </div>
              <div
                style={{
                  background: "linear-gradient(90deg, #2186eb 0, #ffd600 100%)",
                  borderRadius: 8,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 12px",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1.27rem"
                }}
              >
                $1,670.20
              </div>
            </div>
          </div>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Get Funded</div>
          <div style={{ color: "#c5d3eb" }}>
            Once you pass the evaluation, AlphaVaultFX funds you immediately. Focus on trading while we handle the rest.
          </div>
        </div>
      </div>
    </section>
  );
}
