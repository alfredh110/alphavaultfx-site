import React, { useState, useEffect } from "react";

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
        opacity: 0.23,
        pointerEvents: "none",
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      {/* Subtle grid lines */}
      {[...Array(15)].map((_, i) => (
        <line
          key={"h"+i}
          x1={0}
          y1={i * 60}
          x2={1440}
          y2={i * 60}
          stroke="#2196f3"
          strokeOpacity="0.10"
          strokeWidth="2"
        />
      ))}
      {[...Array(24)].map((_, i) => (
        <line
          key={"v"+i}
          x1={i * 60}
          y1={0}
          x2={i * 60}
          y2={900}
          stroke="#ffe066"
          strokeOpacity="0.07"
          strokeWidth="2"
        />
      ))}
      {/* Animated trading price line */}
      <polyline
        id="priceLine"
        fill="none"
        stroke="#2196f3"
        strokeWidth="4"
        strokeDasharray="12 8"
        strokeLinejoin="round"
        points="0,820 120,700 240,750 360,650 480,670 600,480 720,540 840,400 960,460 1080,320 1200,420 1320,180 1440,260"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="100;0;100"
          dur="7s"
          repeatCount="indefinite"
        />
      </polyline>
      {/* Candlestick-like bars (blue & yellow) */}
      {[...Array(12)].map((_, i) => (
        <rect
          key={i}
          x={120 * i + 60}
          y={Math.random() * 300 + 300}
          width="12"
          height={Math.random() * 130 + 40}
          fill={i % 2 === 0 ? "#2196f3" : "#ffe066"}
          opacity="0.18"
          rx="5"
        />
      ))}
    </svg>
  );
}

// Animated "bubble" elements in logo colors
function Bubble({ color, size, top, left, delay }) {
  return (
    <div style={{
      position: "absolute",
      top,
      left,
      width: size,
      height: size,
      background: color,
      opacity: 0.15,
      borderRadius: "50%",
      filter: "blur(2px)",
      animation: `bubbleFloat 7.5s ease-in-out infinite`,
      animationDelay: delay,
      zIndex: 1,
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
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      overflow: "hidden",
      background: "linear-gradient(135deg, #fff 0%, #ffe066 25%, #2196f3 100%)",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* TRADING THEME BACKGROUND */}
      <ChartBackground />
      {/* Bubbles in logo colors */}
      <Bubble color="#2196f3" size="120px" top="10%" left="8%" delay="0s" />
      <Bubble color="#fff" size="60px" top="80%" left="20%" delay="2s" />
      <Bubble color="#ffe066" size="100px" top="50%" left="85%" delay="1s" />
      <Bubble color="#2196f3" size="70px" top="75%" left="70%" delay="3s" />
      <Bubble color="#fff" size="40px" top="15%" left="70%" delay="1.5s" />
      <Bubble color="#ffe066" size="50px" top="30%" left="30%" delay="2.2s" />

      {/* LOGIN CARD */}
      <form
        onSubmit={handleLogin}
        style={{
          zIndex: 2,
          background: "rgba(255,255,255,0.92)",
          borderRadius: "36px",
          boxShadow: "0 8px 60px 0 #2196f366, 0 8px 80px 0 #ffe06655",
          padding: "48px 32px 38px 32px",
          width: "100%",
          maxWidth: "390px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: animate ? "scale(1)" : "scale(0.85)",
          opacity: animate ? 1 : 0,
          transition: "all 0.7s cubic-bezier(.77,0,.18,1.03)",
        }}
      >
        <h2 style={{
          color: "#2196f3",
          fontWeight: 900,
          fontSize: "2.2rem",
          textAlign: "center",
          marginBottom: "18px",
          letterSpacing: 1,
          textShadow: "0 2px 20px #16213e22",
        }}>
          Login to Dashboard
        </h2>
        <div style={{height: 4, width: 60, background: "#ffe066", borderRadius: 8, marginBottom: 26}} />
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
            background: "#fff",
            color: "#16213e",
            boxShadow: "0 2px 18px 0 #2196f322",
            width: "100%",
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
            border: "2px solid #ffe066",
            marginBottom: "18px",
            fontSize: "1rem",
            outline: "none",
            background: "#fff",
            color: "#16213e",
            boxShadow: "0 2px 18px 0 #ffe06622",
            width: "100%",
            transition: "box-shadow 0.2s, border 0.2s",
          }}
        />
        {error && (
          <div style={{
            color: "#e53935",
            marginBottom: "14px",
            textAlign: "center",
            fontWeight: 600,
            width: "100%",
          }}>
            {error}
          </div>
        )}
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg,#2196f3 20%,#ffe066 80%)",
            color: "#16213e",
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
            letterSpacing: 1,
            transition: "background 0.2s, color 0.2s, transform 0.18s",
          }}
        >
          Login
        </button>
        <div style={{textAlign: "center", fontSize: ".97rem", color: "#16213e", marginTop: 12}}>
          Don&apos;t have an account?{" "}
          <a href="/register" style={{color: "#2196f3", fontWeight: 700, textDecoration: "none"}}>
            Register
          </a>
        </div>
      </form>
    </div>
  );
}
