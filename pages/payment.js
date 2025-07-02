import { useRouter } from "next/router";
import { useState } from "react";

// AlphaVaultFX theme colors
const COLORS = {
  bg: "#181C26",
  card: "rgba(22, 27, 38, 0.96)",
  border: "1.5px solid #232a3a",
  accent: "#2186eb",
  accent2: "#3c9cff",
  gold: "#ffd34e",
  text: "#fff",
  textSecondary: "#bfc9da",
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
  const { type = "2step", size = "5k" } = router.query;
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
    setTimeout(() => setStatus(""), 2500);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: COLORS.bg + " url('/bg_alpha.png') center/cover no-repeat",
      padding: 0,
    }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "44px 10px 44px 10px" }}>
        <button
          onClick={() => router.back()}
          style={{
            background: "transparent",
            color: COLORS.textSecondary,
            border: "none",
            fontSize: 16,
            marginBottom: 28,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8
          }}
        >
          <span style={{fontSize: 24, lineHeight: "18px"}}>&larr;</span> Go Back
        </button>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 38,
          alignItems: "flex-start",
        }}>
          {/* Checkout (Left) */}
          <div style={{
            flex: "1 1 370px",
            minWidth: 340,
            background: COLORS.card,
            border: COLORS.border,
            borderRadius: 18,
            padding: "38px 28px 28px 28px",
            boxShadow: "0 6px 36px 0 #2186eb22",
            marginBottom: 18,
          }}>
            <h2 style={{ color: COLORS.text, fontWeight: 800, fontSize: 28, marginBottom: 18 }}>
              Checkout
            </h2>
            {/* Coupon */}
            <form onSubmit={handleCouponApply} style={{ marginBottom: 28 }}>
              <label style={{ color: COLORS.textSecondary, fontSize: 15, fontWeight: 600 }}>
                Apply Coupon
              </label>
              <div style={{ display: "flex", gap: 0, marginTop: 6 }}>
                <input
                  type="text"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  placeholder="Coupon code"
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: "6px 0 0 6px",
                    border: "1px solid #22293d",
                    background: "#191e2b",
                    color: COLORS.text,
                    fontSize: 16,
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: COLORS.gold,
                    color: "#000",
                    border: "none",
                    borderRadius: "0 6px 6px 0",
                    fontWeight: 700,
                    fontSize: 16,
                    padding: "0 18px",
                    cursor: "pointer",
                  }}
                >
                  Apply coupon
                </button>
              </div>
              {validCoupon && discount > 0 && (
                <div style={{ color: COLORS.accent, fontSize: 13, marginTop: 4 }}>30% OFF applied!</div>
              )}
            </form>

            {/* Order Summary */}
            <div style={{
              background: "#181e2a",
              borderRadius: 12,
              padding: 22,
              marginBottom: 22,
              boxShadow: "0 2px 10px #3c9cff09",
            }}>
              <div style={{ color: COLORS.text, fontSize: 17, fontWeight: 700, marginBottom: 12 }}>
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
                      <td style={{ color: COLORS.accent2 }}>DISCOUNT 30% OFF</td>
                      <td style={{ textAlign: "right", color: COLORS.accent2 }}>- ${discount.toFixed(2)}</td>
                    </tr>
                  )}
                  <tr style={{ borderTop: "1.5px solid #232a3a" }}>
                    <td style={{ fontWeight: 600, paddingTop: 6 }}>Total</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: COLORS.gold, paddingTop: 6 }}>
                      ${total.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                style={{
                  width: "100%",
                  background: "#fff",
                  color: "#232a3a",
                  borderRadius: 6,
                  padding: "10px 0",
                  marginTop: 12,
                  fontWeight: 700,
                  border: "none",
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
              border: COLORS.border,
              borderRadius: 18,
              padding: "38px 28px 28px 28px",
              boxShadow: "0 6px 36px 0 #2186eb22",
              marginBottom: 18,
            }}>
            <h2 style={{ color: COLORS.text, fontWeight: 800, fontSize: 23, marginBottom: 18 }}>
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
                  borderRadius: 6,
                  border: "1px solid #22293d",
                  background: "#191e2b",
                  color: COLORS.text,
                  fontSize: 16,
                  marginBottom: 0
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
                  borderRadius: 6,
                  border: "1px solid #22293d",
                  background: "#191e2b",
                  color: COLORS.text,
                  fontSize: 16,
                  marginBottom: 0
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
                borderRadius: 6,
                border: "1px solid #22293d",
                background: "#191e2b",
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
                borderRadius: 6,
                border: "1px solid #22293d",
                background: "#191e2b",
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
                  borderRadius: 6,
                  border: "1px solid #22293d",
                  background: "#191e2b",
                  color: COLORS.text,
                  fontSize: 16,
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
                  borderRadius: 6,
                  border: "1px solid #22293d",
                  background: "#191e2b",
                  color: COLORS.text,
                  fontSize: 16,
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
                  borderRadius: 6,
                  border: "1px solid #22293d",
                  background: "#191e2b",
                  color: COLORS.text,
                  fontSize: 16,
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
                  borderRadius: 6,
                  border: "1px solid #22293d",
                  background: "#191e2b",
                  color: COLORS.text,
                  fontSize: 16,
                }}
              />
            </div>
            <label style={{ display: "flex", alignItems: "center", fontSize: 15, color: COLORS.textSecondary, marginBottom: 18 }}>
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
              background: "linear-gradient(90deg,#b58f00 0%,#ffd34e 100%)",
              color: "#232a3a",
              fontWeight: 700,
              borderRadius: 8,
              padding: "10px 18px",
              margin: "18px 0 18px 0",
              fontSize: 15,
              textAlign: "center",
              letterSpacing: 0.2,
              boxShadow: "0 2px 8px #ffd34e33"
            }}>
              CELEBRATE FREEDOM: 30% OFF WITH FUNDED HERO &nbsp;
              <span style={{
                background: "#232a3a",
                color: COLORS.gold,
                borderRadius: 5,
                padding: "2px 10px",
                fontWeight: 800,
                fontSize: 15,
              }}>Code: 40FF</span>
            </div>

            {/* Payment details */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: COLORS.text, marginBottom: 8 }}>
                Payment Details
              </div>
              <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="crypto"
                  checked={paymentMethod === "crypto"}
                  onChange={() => setPaymentMethod("crypto")}
                  style={{ marginRight: 9 }}
                />
                CryptoCloud Payment System
                <div style={{ color: COLORS.textSecondary, fontWeight: 400, fontSize: 13, marginTop: 2, marginLeft: 27 }}>
                  Accepting payment via cryptocurrency. It is possible to pay the bill using a bank card.
                </div>
              </label>
              <label style={{ display: "block", fontWeight: 600, margin: "13px 0 0 0" }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                  style={{ marginRight: 9 }}
                />
                Credit Card Payment
              </label>
              <div style={{ color: COLORS.textSecondary, fontSize: 13, marginTop: 7, marginLeft: 27 }}>
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
              </div>
            </div>

            {/* Order status and Place Order */}
            {status === "success" && (
              <div style={{
                margin: "15px 0",
                padding: "12px",
                background: "#143d24",
                color: "#51db7a",
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
                background: COLORS.gold,
                color: "#232a3a",
                border: "none",
                borderRadius: 8,
                padding: "14px 0",
                width: "100%",
                fontWeight: 700,
                fontSize: 18,
                cursor: "pointer",
                marginTop: 10
              }}
            >
              Place order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
