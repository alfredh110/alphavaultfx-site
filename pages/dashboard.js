import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

// Animated SVG Chart (background)
function ChartBackground() {
  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        opacity: 0.19,
        pointerEvents: "none",
        minWidth: "375px",
        minHeight: "400px",
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      {[...Array(15)].map((_, i) => (
        <line
          key={"h"+i}
          x1={0}
          y1={i * 60}
          x2={1440}
          y2={i * 60}
          stroke="#2196f3"
          strokeOpacity="0.08"
          strokeWidth="2"
        />
      ))}
      {[...Array(25)].map((_, i) => (
        <line
          key={"v"+i}
          x1={i * 60}
          y1={0}
          x2={i * 60}
          y2={900}
          stroke="#2196f3"
          strokeOpacity="0.04"
          strokeWidth="2"
        />
      ))}
      <polyline
        id="priceLine"
        fill="none"
        stroke="#2196f3"
        strokeWidth="4"
        strokeDasharray="15 8"
        strokeLinejoin="round"
        points="0,820 120,700 240,750 360,650 480,670 600,480 720,540 840,400 960,460 1080,320 1200,420 1320,180 1440,260"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="180;0;180"
          dur="7s"
          repeatCount="indefinite"
        />
      </polyline>
      {[...Array(12)].map((_, i) => (
        <rect
          key={i}
          x={120 * i + 60}
          y={Math.random() * 300 + 300}
          width="12"
          height={Math.random() * 110 + 40}
          fill="#2196f3"
          opacity="0.16"
          rx="5"
        />
      ))}
    </svg>
  );
}

function Bubble({ color, size, top, left, delay }) {
  return (
    <div style={{
      position: "absolute",
      top,
      left,
      width: size,
      height: size,
      background: color,
      opacity: 0.11,
      borderRadius: "50%",
      filter: "blur(3px)",
      animation: `bubbleFloat 7.5s ease-in-out infinite`,
      animationDelay: delay,
      zIndex: 1,
      maxWidth: "30vw",
      maxHeight: "30vw",
      minWidth: "20px",
      minHeight: "20px",
    }}>
      <style>
        {`
          @keyframes bubbleFloat {
            0% { transform: translateY(0px) scale(1);}
            50% { transform: translateY(-32px) scale(1.1);}
            100% { transform: translateY(0px) scale(1);}
          }
        `}
      </style>
    </div>
  );
}

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setError("");
    alert("Login successful! (Replace with your own logic)");
  };

  return (
    <Layout>
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          overflow: "hidden",
          background: "linear-gradient(135deg, #131e23 0%, #1a2231 60%, #2196f3 120%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2vw",
        }}
      >
        <ChartBackground />
        <Bubble color="#2196f3" size="140px" top="8%" left="6%" delay="0s" />
        <Bubble color="#fff" size="90px" top="80%" left="20%" delay="2s" />
        <Bubble color="#2196f3" size="65px" top="50%" left="85%" delay="1s" />
        <Bubble color="#fff" size="60px" top="75%" left="70%" delay="3s" />
        <Bubble color="#2196f3" size="40px" top="18%" left="70%" delay="1.5s" />
        <Bubble color="#fff" size="35px" top="30%" left="30%" delay="2.2s" />
        <form
          onSubmit={handleLogin}
          style={{
            zIndex: 2,
            background: "rgba(19,30,35,0.98)",
            borderRadius: "34px",
            boxShadow: "0 8px 60px 0 #2196f366, 0 8px 80px 0 #2196f355",
            padding: "3rem 2.2rem 2.6rem 2.2rem",
            width: "100%",
            maxWidth: "400px",
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: animate ? "scale(1)" : "scale(0.85)",
            opacity: animate ? 1 : 0,
            transition: "all 0.7s cubic-bezier(.77,0,.18,1.03)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 18,
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                background: "#131e23",
                border: "3px solid #2196f3",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                color: "#2196f3",
                fontSize: 18,
                boxShadow: "0 2px 10px #2196f322",
              }}
            >
              AV
            </div>
            <span
              style={{
                fontWeight: 900,
                fontSize: 27,
                color: "#fff",
                letterSpacing: 1,
                whiteSpace: "nowrap",
              }}
            >
              AlphaVault
              <span style={{ color: "#2196f3" }}>FX</span>
            </span>
          </div>
          <div
            style={{
              height: 4,
              width: 60,
              background: "#2196f3",
              borderRadius: 8,
              marginBottom: 26,
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "15px",
              borderRadius: "18px",
              border: "2px solid #2196f3",
              marginBottom: "18px",
              fontSize: "1rem",
              outline: "none",
              background: "#192233",
              color: "#fff",
              boxShadow: "0 2px 18px 0 #2196f322",
              width: "100%",
              minWidth: 0,
              transition: "box-shadow 0.2s, border 0.2s",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "15px",
              borderRadius: "18px",
              border: "2px solid #2196f3",
              marginBottom: "18px",
              fontSize: "1rem",
              outline: "none",
              background: "#192233",
              color: "#fff",
              boxShadow: "0 2px 18px 0 #2196f322",
              width: "100%",
              minWidth: 0,
              transition: "box-shadow 0.2s, border 0.2s",
            }}
          />
          {error && (
            <div
              style={{
                color: "#e53935",
                marginBottom: "14px",
                textAlign: "center",
                fontWeight: 600,
                width: "100%",
              }}
            >
              {error}
            </div>
          )}
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg,#2196f3 0%,#fff 100%)",
              color: "#131e23",
              fontWeight: 900,
              border: "none",
              borderRadius: "18px",
              fontSize: "1.13rem",
              padding: "13px 0",
              marginTop: "6px",
              marginBottom: "14px",
              boxShadow: "0 2px 18px 0 #2196f366",
              cursor: "pointer",
              width: "100%",
              minWidth: 0,
              letterSpacing: 1,
              transition: "background 0.2s, color 0.2s, transform 0.18s",
            }}
          >
            Login
          </button>
          <div
            style={{
              textAlign: "center",
              fontSize: ".97rem",
              color: "#fff",
              marginTop: 12,
              wordBreak: "break-word",
            }}
          >
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              style={{
                color: "#2196f3",
                fontWeight: 700,
                textDecoration: "none",
                wordBreak: "break-word",
              }}
            >
              Register
            </a>
          </div>
          {/* MOBILE RESPONSIVE STYLES */}
          <style>
            {`
            @media (max-width: 600px) {
              form {
                padding: 2.1rem 1.1rem 1.5rem 1.1rem !important;
                max-width: 97vw !important;
                border-radius: 21px !important;
              }
              form > div[style*="marginBottom: 18px"] span {
                font-size: 19px !important;
              }
              input, button {
                font-size: 1rem !important;
                padding: 13px !important;
                border-radius: 13px !important;
              }
              div[style*="marginTop: 12px"] {
                font-size: 0.9rem !important;
              }
            }
            `}
          </style>
        </form>
      </div>
    </Layout>
  );
}
