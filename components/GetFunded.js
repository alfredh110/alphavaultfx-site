import { useRouter } from "next/router";
import { useState } from "react";

const pricing = {
  "1step":   { "5k": 49,  "10k": 69,  "25k": 119, "50k": 229, "100k": 399, "200k": 699 },
  "2step":   { "5k": 39,  "10k": 59,  "25k": 99,  "50k": 199, "100k": 349, "200k": 599 },
  "fastpass":{ "5k": 79,  "10k": 109, "25k": 179, "50k": 299, "100k": 499, "200k": 899 }
};

const COLORS = {
  primary: "#2186eb",
  text: "#fff",
  card: "rgba(20,40,60,0.85)",
  border: "rgba(33,134,235,0.35)"
};

export default function GetFunded() {
  const router = useRouter();
  const { type = "1step", size = "25k" } = router.query;

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [processing, setProcessing] = useState(false);

  const price = pricing[type]?.[size] ?? 0;

  async function handleSubmit(e) {
    e.preventDefault();
    setProcessing(true);

    // Here you would integrate with your payment and user creation APIs.
    setTimeout(() => {
      setProcessing(false);
      router.push("/dashboard");
    }, 1800);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(120deg, #081A2B 60%, #0C2B3A 100%)`,
      fontFamily: "Inter, Roboto, sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <form
        style={{
          background: COLORS.card,
          border: `2px solid ${COLORS.border}`,
          borderRadius: 22,
          padding: 38,
          minWidth: 350,
          maxWidth: 400,
          boxShadow: `0 6px 40px 0 ${COLORS.primary}18`,
          color: COLORS.text,
          display: "flex",
          flexDirection: "column",
          gap: 22
        }}
        onSubmit={handleSubmit}
      >
        <h2 style={{ marginBottom: 8, color: COLORS.primary, fontWeight: 800, textAlign: "center" }}>
          Get Funded
        </h2>
        <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>
          <span>Challenge:</span>
          <span style={{ color: COLORS.primary, marginLeft: 8 }}>
            {type?.toUpperCase() || "-"}, {size?.toUpperCase() || "-"}
          </span>
        </div>
        <div style={{ fontSize: 16, marginBottom: 5 }}>
          <span>One-Time Fee: </span>
          <span style={{ color: COLORS.primary, fontWeight: 700, fontSize: 22 }}>${price}</span>
        </div>
        <input
          required
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          style={{
            padding: 12,
            borderRadius: 10,
            border: "1.5px solid #2196f3",
            marginBottom: 8,
            fontSize: 16
          }}
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          style={{
            padding: 12,
            borderRadius: 10,
            border: "1.5px solid #2196f3",
            marginBottom: 8,
            fontSize: 16
          }}
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
          style={{
            padding: 12,
            borderRadius: 10,
            border: "1.5px solid #2196f3",
            marginBottom: 12,
            fontSize: 16
          }}
        />
        {/* Payment Section: Replace with Stripe/PayPal integration */}
        <button
          type="submit"
          disabled={processing}
          style={{
            background: COLORS.primary,
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "14px 0",
            width: "100%",
            fontWeight: 800,
            fontSize: 20,
            cursor: "pointer",
            marginTop: 18,
            opacity: processing ? 0.7 : 1
          }}
        >
          {processing ? "Processing..." : "Pay & Create Account"}
        </button>
        <div style={{ fontSize: 13, color: "#93b4ec", textAlign: "center" }}>
          Already have an account? <a href="/dashboard" style={{ color: COLORS.primary }}>Login</a>
        </div>
      </form>
    </div>
  );
}
