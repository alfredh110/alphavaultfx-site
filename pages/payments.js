import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Use the same pricing as GetFunded.js
const PRICING = {
  "1step":   { "5k": 49,  "10k": 69,  "25k": 119, "50k": 229, "100k": 399, "200k": 699 },
  "2step":   { "5k": 39,  "10k": 59,  "25k": 99,  "50k": 199, "100k": 349, "200k": 599 },
  "fastpass":{ "5k": 79,  "10k": 109, "25k": 179, "50k": 299, "100k": 499, "200k": 899 }
};

export default function Payment() {
  const router = useRouter();
  const { type, size } = router.query;
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if(type && size) {
      setPrice(PRICING[type]?.[size] ?? null);
    }
  }, [type, size]);

  if (!type || !size) {
    return <div style={{ padding: 40, color: "#fff" }}>Invalid payment link.</div>
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #141925 60%, #1e2533 100%)",
      fontFamily: "Inter, Roboto, sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        background: "rgba(22, 27, 38, 0.94)",
        border: "1.5px solid #232a3a",
        borderRadius: 18,
        padding: 40,
        minWidth: 350,
        color: "#fff",
        boxShadow: "0 4px 32px 0 #1a376633",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#3c9cff", fontWeight: 800, marginBottom: 16 }}>
          Payment Center
        </h2>
        <div style={{ fontSize: 18, marginBottom: 8 }}>
          <span>Challenge: </span>
          <strong style={{ color: "#57c1f6" }}>{type?.toUpperCase()}</strong>
          <span> | </span>
          <strong style={{ color: "#57c1f6" }}>{size?.toUpperCase()}</strong>
        </div>
        <div style={{ fontSize: 18, marginBottom: 20 }}>
          One-Time Fee: <span style={{ color: "#3c9cff", fontWeight: 700, fontSize: 22 }}>${price}</span>
        </div>
        {/* Integrate Stripe, PayPal, or your custom payment component here */}
        <div style={{ margin: "30px 0", color: "#bfc9da" }}>
          <em>Payment processing coming soon.<br />
            Integrate Stripe, PayPal, or your gateway here.</em>
        </div>
        <button
          style={{
            background: "#3c9cff",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "14px 0",
            width: "100%",
            fontWeight: 700,
            fontSize: 18,
            cursor: "pointer",
            marginTop: 18
          }}
          onClick={() => router.push("/GetFunded")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
