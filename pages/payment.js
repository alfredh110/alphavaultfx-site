import { useRouter } from "next/router";
import { useState } from "react";

const COLORS = {
  bg: "#111c2e",         // Deep navy blue
  card: "#18233a",       // Slightly lighter navy for cards
  border: "#23365e",     // Muted blue border
  accent: "#34bfff",     // Light blue accent
  accentHover: "#86dbff",// Lighter blue for hover
  text: "#fff",          // White text
  textSecondary: "#b4c7e7", // Soft light blue/white
  inputBg: "#13203b",    // Very deep blue input background
  inputBorder: "#2a4065",// Subtle blue border for inputs
};

const PRODUCT_NAMES = {
  "1step": "1 Step Alpha",
  "2step": "2 Step Alpha",
  "fastpass": "Fast Pass",
};

const PRICING = {
  "1step":   { "5k": 49,  "10k": 69,  "25k": 119, "50k": 229, "100k": 399, "200k": 699 },
  "2step":   { "5k": 39,  "10k": 59,  "25k": 99,  "50k": 199, "100k": 349, "200k": 599 },
  "fastpass":{ "5k": 79,  "10k": 109, "25k": 179, "50k": 299, "100k": 499, "200k": 899 }
};

export default function Payment() {
  const router = useRouter();
  const { type = "1step", size = "5k" } = router.query;
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    createAccount: false,
  });
  const [paymentMethod, setPaymentMethod] = useState("crypto");
  const [status, setStatus] = useState("");

  // Pricing logic
  const basePrice = PRICING[type]?.[size] ?? 0;
  const validCoupon = coupon.trim().toUpperCase() === "40FF";
  const couponValue = validCoupon ? Math.round(basePrice * 0.30 * 100) / 100 : 0; // 30% off
  const total = Math.max(basePrice - couponValue, 0);

  // Handlers
  function handleCouponApply(e) {
    e.preventDefault();
    setDiscount(couponValue);
  }

  function handleBillingChange(e) {
    const { name, value, type, checked } = e.target;
    setBilling(b => ({
      ...b,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleOrder(e) {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus(""), 2000);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: COLORS.bg,
      fontFamily: "Inter, Roboto, sans-serif",
      padding: 0,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "44px 10px 44px 10px" }}>
        <button
          onClick={() => router.back()}
          style={{
            background: "transparent",
            color: COLORS.accent,
            border: "none",
            fontSize: 16,
            marginBottom: 28,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontWeight: 600,
            letterSpacing: 0.1,
          }}
        >
          <span style={{fontSize: 24, lineHeight: "18px"}}>&larr;</span> Go Back
        </button>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 36,
          alignItems: "flex-start",
        }}>
          {/* Checkout (Left) */}
          <div style={{
            flex: "1 1 370px",
            minWidth: 340,
            background: COLORS.card,
            border: `1.5px solid ${COLORS.border}`,
            borderRadius: 20,
            padding: "38px 28px 28px 28px",
            marginBottom: 18,
            boxShadow: "0 2px 16px 0 #0002",
          }}>
            <h2 style={{
              color: COLORS.text,
              fontWeight: 900,
              fontSize: 30,
              marginBottom: 24,
              letterSpacing: 0.2
            }}>
              Checkout
            </h2>
            {/* Coupon */}
            <form onSubmit={handleCouponApply} style={{ marginBottom: 32 }}>
              <label style={{
                color: COLORS.textSecondary,
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 6,
                display: "block"
              }}>
                Apply Coupon
              </label>
              <div style={{ display: "flex", gap: 0 }}>
                <input
                  type="text"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  placeholder="Coupon code"
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: "8px 0 0 8px",
                    border: `1.5px solid ${COLORS.inputBorder}`,
                    background: COLORS.inputBg,
                    color: COLORS.text,
                    fontSize: 16,
                    outline: "none"
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: COLORS.accent,
                    color: "#022140",
                    border: "none",
                    borderRadius: "0 8px 8px 0",
                    fontWeight: 800,
                    fontSize: 16,
                    padding: "0 20px",
                    cursor: "pointer",
                    transition: "background 0.15s"
                  }}
                  onMouseOver={e => e.currentTarget.style.background = COLORS.accentHover}
                  onMouseOut={e => e.currentTarget.style.background = COLORS.accent}
                >
                  Apply coupon
                </button>
              </div>
              {validCoupon && discount > 0 && (
                <div style={{ color: COLORS.accent, fontSize: 13, marginTop: 6 }}>30% OFF applied!</div>
              )}
            </form>

            {/* Order Summary */}
            <div style={{
              background: "#15213a",
              borderRadius: 18,
              padding: 20,
              marginBottom: 22,
              boxShadow: "0 2px 10px #0001",
            }}>
              <div style={{ color: COLORS.text, fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
                Order Summary
              </div>
              <table style={{ width: "100%", color: COLORS.text, fontSize: 15, marginBottom: 10 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", fontWeight: 500, color: COLORS.textSecondary }}>Product</th>
                    <th style={{ textAlign: "right", fontWeight: 500, color: COLORS.textSecondary }}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{PRODUCT_NAMES[type] || type} - {size?.toUpperCase()} × 1</td>
                    <td style={{ textAlign: "right" }}>${basePrice.toFixed(2)}</td>
                  </tr>
                  {discount > 0 && (
                    <tr>
                      <td style={{ color: COLORS.accent }}>DISCOUNT 30% OFF</td>
                      <td style={{ textAlign: "right", color: COLORS.accent }}>- ${discount.toFixed(2)}</td>
                    </tr>
                  )}
                  <tr style={{ borderTop: `1.5px solid ${COLORS.border}` }}>
                    <td style={{ fontWeight: 700, paddingTop: 8 }}>Total</td>
                    <td style={{
                      textAlign: "right",
                      fontWeight: 900,
                      color: COLORS.accent,
                      paddingTop: 8,
                      fontSize: 18
                    }}>
                      ${total.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                style={{
                  width: "100%",
                  background: COLORS.text,
                  color: COLORS.card,
                  borderRadius: 8,
                  padding: "11px 0",
                  marginTop: 14,
                  fontWeight: 700,
                  border: "none",
                  fontSize: 15,
                  cursor: "pointer"
                }}
                disabled
                title="Cart updating is not enabled in this demo."
              >
                Update Cart
              </button>
            </div>
          </div>
          {/* Billing & Payment (Right) */}
          <form
            onSubmit={handleOrder}
            style={{
              flex: "2 1 480px",
              minWidth: 340,
              background: COLORS.card,
              border: `1.5px solid ${COLORS.border}`,
              borderRadius: 20,
              padding: "38px 28px 28px 28px",
              marginBottom: 18,
              boxShadow: "0 2px 16px 0 #0002",
            }}>
            <h2 style={{
              color: COLORS.text,
              fontWeight: 900,
              fontSize: 26,
              marginBottom: 22,
              letterSpacing: 0.1
            }}>
              Billing Information
            </h2>
            <div style={{ display: "flex", gap: 18, marginBottom: 12 }}>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={billing.firstName}
                onChange={handleBillingChange}
                required
                style={{
                  flex: 1,
                  padding: "11px 14px",
                  borderRadius: 8,
                  border: `1.5px solid ${COLORS.inputBorder}`,
                  background: COLORS.inputBg,
                  color: COLORS.text,
                  fontSize: 16
                }}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={billing.lastName}
                onChange={handleBillingChange}
                required
                style={{
                  flex: 1,
                  padding: "11px 14px",
                  borderRadius: 8,
                  border: `1.5px solid ${COLORS.inputBorder}`,
                  background: COLORS.inputBg,
                  color: COLORS.text,
                  fontSize: 16
                }}
              />
            </div>
            <input
              type="text"
              name="country"
              placeholder="Country / Region"
              value={billing.country}
              onChange={handleBillingChange}
              required
              style={{
                width: "100%",
                padding: "11px 14px",
                borderRadius: 8,
                border: `1.5px solid ${COLORS.inputBorder}`,
                background: COLORS.inputBg,
                color: COLORS.text,
                fontSize: 16,
                marginBottom: 12
              }}
            />
            <input
              type="text"
              name="address"
              placeholder="Street address"
              value={billing.address}
              onChange={handleBillingChange}
              required
              style={{
                width: "100%",
                padding: "11px 14px",
                borderRadius: 8,
                border: `1.5px solid ${COLORS.inputBorder}`,
                background: COLORS.inputBg,
                color: COLORS.text,
                fontSize: 16,
                marginBottom: 12
              }}
            />
            <div style={{ display: "flex", gap: 18, marginBottom: 12 }}>
              <input
                type="text"
                name="city"
                placeholder="Town / City"
                value={billing.city}
                onChange={handleBillingChange}
                required
                style={{
                  flex: 1,
                  padding: "11px 14px",
                  borderRadius: 8,
                  border: `1.5px solid ${COLORS.inputBorder}`,
                  background: COLORS.inputBg,
                  color: COLORS.text,
                  fontSize: 16
                }}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={billing.state}
                onChange={handleBillingChange}
                required
                style={{
                  flex: 1,
                  padding: "11px 14px",
                  borderRadius: 8,
                  border: `1.5px solid ${COLORS.inputBorder}`,
                  background: COLORS.inputBg,
                  color: COLORS.text,
                  fontSize: 16
                }}
              />
            </div>
            <div style={{ display: "flex", gap: 18, marginBottom: 12 }}>
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={billing.zip}
                onChange={handleBillingChange}
                required
                style={{
                  flex: 1,
                  padding: "11px 14px",
                  borderRadius: 8,
                  border: `1.5px solid ${COLORS.inputBorder}`,
                  background: COLORS.inputBg,
                  color: COLORS.text,
                  fontSize: 16
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={billing.email}
                onChange={handleBillingChange}
                required
                style={{
                  flex: 1,
                  padding: "11px 14px",
                  borderRadius: 8,
                  border: `1.5px solid ${COLORS.inputBorder}`,
                  background: COLORS.inputBg,
                  color: COLORS.text,
                  fontSize: 16
                }}
              />
            </div>
            <label style={{ display: "flex", alignItems: "center", fontSize: 15, color: COLORS.textSecondary, marginBottom: 20 }}>
              <input
                type="checkbox"
                name="createAccount"
                checked={billing.createAccount}
                onChange={handleBillingChange}
                style={{ marginRight: 7 }}
              />
              Create an account?
            </label>

            {/* Banner */}
            <div style={{
              background: COLORS.accent,
              color: COLORS.card,
              fontWeight: 700,
              borderRadius: 10,
              padding: "12px 18px",
              margin: "10px 0 22px 0",
              fontSize: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              letterSpacing: 0.2,
              boxShadow: "0 1px 8px #34bfff33"
            }}>
              CELEBRATE FREEDOM: 30% OFF WITH FUNDED HERO
              <span style={{
                background: COLORS.card,
                color: COLORS.accent,
                borderRadius: 6,
                padding: "5px 15px",
                fontWeight: 800,
                fontSize: 15,
                marginLeft: 10,
                display: "inline-block"
              }}>Code: 40FF</span>
            </div>

            {/* Payment details */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: COLORS.text, marginBottom: 8 }}>
                Payment Details
              </div>
              <label style={{
                display: "flex",
                alignItems: "center",
                fontWeight: 700,
                color: COLORS.text,
                marginBottom: 7,
                fontSize: 16
              }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="crypto"
                  checked={paymentMethod === "crypto"}
                  onChange={() => setPaymentMethod("crypto")}
                  style={{
                    marginRight: 10,
                    appearance: "none",
                    width: 18,
                    height: 18,
                    borderRadius: "100%",
                    border: `2.5px solid ${COLORS.accent}`,
                    outline: "none",
                    boxShadow: "0 0 0 2px #18233a",
                    background: paymentMethod === "crypto" ? COLORS.accent : "#fff",
                    transition: "background 0.15s"
                  }}
                />
                CryptoCloud Payment System
              </label>
              <div style={{ color: COLORS.textSecondary, fontWeight: 400, fontSize: 13, marginLeft: 28, marginBottom: 9 }}>
                Accepting payment via cryptocurrency. It is possible to pay the bill using a bank card.
              </div>
              <label style={{
                display: "flex",
                alignItems: "center",
                fontWeight: 700,
                color: COLORS.text,
                marginBottom: 2,
                fontSize: 16
              }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                  style={{
                    marginRight: 10,
                    appearance: "none",
                    width: 18,
                    height: 18,
                    borderRadius: "100%",
                    border: `2.5px solid ${COLORS.accent}`,
                    outline: "none",
                    boxShadow: "0 0 0 2px #18233a",
                    background: paymentMethod === "credit" ? COLORS.accent : "#fff",
                    transition: "background 0.15s"
                  }}
                />
                Credit Card Payment
              </label>
              <div style={{ color: COLORS.textSecondary, fontSize: 13, marginLeft: 28, marginBottom: 10 }}>
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
              </div>
            </div>

            {/* Order status and Place Order */}
            {status === "success" && (
              <div style={{
                margin: "15px 0",
                padding: "12px",
                background: "#143d24",
                color: "#34bfff",
                borderRadius: 6,
                textAlign: "center",
                fontWeight: 700,
              }}>
                Success! Payment processed.
              </div>
            )}
            <button
              type="submit"
              style={{
                background: COLORS.accent,
                color: COLORS.card,
                border: "none",
                borderRadius: 12,
                padding: "15px 0",
                width: "100%",
                fontWeight: 900,
                fontSize: 20,
                cursor: "pointer",
                marginTop: 10,
                marginBottom: 5,
                boxShadow: "0 2px 8px #34bfff66",
                transition: "background 0.13s"
              }}
              onMouseOver={e => e.currentTarget.style.background = COLORS.accentHover}
              onMouseOut={e => e.currentTarget.style.background = COLORS.accent}
            >
              Place order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
