import { useSession } from "next-auth/react";

// You can enhance this with state to make it interactive!
export default function Challenge() {
  const { data } = useSession() || {};

  // Example state for selected items (optional, for full interactivity)
  // import { useState } from "react";
  // const [accountType, setAccountType] = useState("1 Step Alpha");
  // const [accountSize, setAccountSize] = useState("$25k");

  return (
    <div style={{
      background: "#161e2e",
      minHeight: "100vh",
      padding: "0 0 60px 0"
    }}>
      <div style={{
        maxWidth: 900,
        margin: "0 auto",
        paddingTop: 40,
        paddingBottom: 40
      }}>
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
        <div style={{
          display: "flex",
          gap: 32,
          justifyContent: "center"
        }}>
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
                <button style={{
                  background: "#2186eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                  boxShadow: "0 0 0 1.5px #2186eb"
                }}>1 Step Alpha</button>
                <button style={{
                  background: "none",
                  color: "#b8cfff",
                  border: "1.5px solid #2186eb",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer"
                }}>2 Step Alpha</button>
                <button style={{
                  background: "none",
                  color: "#b8cfff",
                  border: "1.5px solid #2186eb",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer"
                }}>Fast Pass</button>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#b8cfff", marginBottom: 10, marginTop: 10 }}>Account Size</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["$5k", "$10k", "$25k", "$50k", "$100k", "$200k"].map((size, i) => (
                  <button
                    key={size}
                    style={{
                      background: size === "$25k" ? "#2186eb" : "none",
                      color: size === "$25k" ? "#fff" : "#b8cfff",
                      border: "1.5px solid #2186eb",
                      borderRadius: 8,
                      padding: "8px 18px",
                      fontWeight: 600,
                      fontSize: 15,
                      cursor: "pointer"
                    }}
                  >
                    {size}
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
              <div style={{ fontWeight: 900, color: "#fff", fontSize: 32 }}>$119</div>
              <div style={{ color: "#b8cfff", fontSize: 15, marginBottom: 16 }}>For $25k Account</div>
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
                  <td style={{ textAlign: "center", fontWeight: 600 }}>8%</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>-</td>
                </tr>
                <tr>
                  <td style={{ color: "#b8cfff", fontWeight: 500, padding: "8px 0" }}>Daily Loss</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>6%</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>5%</td>
                </tr>
                <tr>
                  <td style={{ color: "#b8cfff", fontWeight: 500, padding: "8px 0" }}>Maximum Loss</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>12%</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>10%</td>
                </tr>
                <tr>
                  <td style={{ color: "#b8cfff", fontWeight: 500, padding: "8px 0" }}>Maximum Drawdown Type</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>Static</td>
                  <td style={{ textAlign: "center", fontWeight: 600 }}>Static</td>
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
