// Replace your current rules (right box) section with this more proportionate, balanced version.

export default function ChallengeRulesBox() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: 340,
        padding: "34px 26px 34px 32px",
        background: "rgba(16,32,50,0.85)",
        borderRadius: "18px",
        border: "1.5px solid #2196f3",
        boxShadow: "0 4px 24px 0 #2196f322",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          alignItems: "center",
          width: "100%",
          rowGap: "1.2rem",
        }}
      >
        <div></div>
        <div style={{ color: "#2196f3", fontWeight: 700, textAlign: "center", fontSize: 17 }}>
          Phase 1
        </div>
        <div style={{ color: "#2196f3", fontWeight: 700, textAlign: "center", fontSize: 17 }}>
          Funded
        </div>

        <div style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>Profit Target</div>
        <div style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>8%</div>
        <div style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>-</div>

        <div style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>Daily Loss</div>
        <div style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>6%</div>
        <div style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>5%</div>

        <div style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>Maximum Loss</div>
        <div style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>12%</div>
        <div style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>10%</div>

        <div style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>Maximum Drawdown Type</div>
        <div style={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: 16 }}>Static</div>
        <div style={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: 16 }}>Static</div>
      </div>
      <style jsx>{`
        @media (max-width: 800px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr 0.8fr 0.8fr !important;
            font-size: 14px !important;
          }
        }
        @media (max-width: 600px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr 0.7fr 0.7fr !important;
            font-size: 13px !important;
          }
          div[style*="padding: 34px"] {
            padding: 18px 8px 18px 8px !important;
          }
        }
      `}</style>
    </div>
  );
}
