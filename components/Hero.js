import React from "react";
import { useRouter } from "next/router"; // Use Next.js router

export default function Hero() {
  const router = useRouter();

  return (
    <section
      style={{
        minHeight: "65vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 0 40px 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          background: "rgba(16,24,38,0.97)",
          borderRadius: 40,
          boxShadow: "0 0 70px 0 #10418244",
          padding: "54px 38px 76px 38px",
          maxWidth: 820,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontWeight: 800,
            fontSize: 44,
            margin: 0,
            color: "#2196f3",
            letterSpacing: 1,
            lineHeight: 1.13,
          }}
        >
          Power Your Trading Journey
        </h1>
        <h2
          style={{
            fontWeight: 800,
            fontSize: 38,
            color: "#fff",
            margin: "10px 0 18px 0",
            letterSpacing: 0.5,
            lineHeight: 1.08,
            textShadow: "0 2px 18px #0004",
          }}
        >
          with AlphaVaultFX
        </h2>
        <div
          style={{
            color: "#bfc9da",
            fontWeight: 400,
            fontSize: 20,
            marginBottom: 36,
            marginTop: 0,
          }}
        >
          Trade with our capital, keep up to 90% of your profits, and scale your success risk-free.
        </div>
        <button
          style={{
            background: "#2196f3",
            color: "#fff",
            fontWeight: 700,
            border: "none",
            borderRadius: 12,
            fontSize: 22,
            padding: "13px 38px",
            margin: "0 auto",
            boxShadow: "0 4px 18px 0 #2196f355",
            cursor: "pointer",
            transition: "background 0.18s",
          }}
          onClick={() => router.push("/challenge")}
        >
          Get Funded Today
        </button>
      </div>
    </section>
  );
}
