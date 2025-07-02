import React, { useState, useEffect } from "react";

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
    // Authentication logic here
    alert("Login successful! (Replace this with your auth logic)");
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      overflow: "hidden",
      background: "linear-gradient(135deg, #16213e 0%, #1a263b 65%, #2196f3 100%)",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Animated Bubbles Background */}
      <Bubble color="#2196f3" size="120px" top="10%" left="8%" delay="0s" />
      <Bubble color="#fff" size="60px" top="80%" left="20%" delay="2s" />
      <Bubble color="#ffe066" size="100px" top="50%" left="85%" delay="1s" />
      <Bubble color="#2196f3" size="70px" top="75%" left="70%" delay="3s" />
      <Bubble color="#fff" size="40px" top="15%" left="70%" delay="1.5s" />
      <Bubble color="#ffe066" size="50px" top="30%" left="30%" delay="2.2s" />

      <form
        onSubmit={handleLogin}
        style={{
          zIndex: 2,
          background: "rgba(22,34,51,0.98)",
          borderRadius: "30px",
          boxShadow: "0 4px 60px 0 #10418255, 0 8px 80px 0 #ffe06622",
          padding: "46px 30px 36px 30px",
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
          fontWeight: 800,
          fontSize: "2.1rem",
          textAlign: "center",
          marginBottom: "18px",
          letterSpacing: 1,
          textShadow: "0 2px 20px #16213e44",
        }}>
          Login to Dashboard
        </h2>
        <div style={{height: 3, width: 55, background: "#ffe066", borderRadius: 8, marginBottom: 26}} />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "18px",
            border: "none",
            marginBottom: "18px",
            fontSize: "1rem",
            outline: "none",
            background: "#192840",
            color: "#fff",
            boxShadow: "0 2px 18px 0 #2196f344",
            width: "100%",
            transition: "box-shadow 0.2s",
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
            border: "none",
            marginBottom: "18px",
            fontSize: "1rem",
            outline: "none",
            background: "#192840",
            color: "#fff",
            boxShadow: "0 2px 18px 0 #2196f321",
            width: "100%",
            transition: "box-shadow 0.2s",
          }}
        />
        {error && (
          <div style={{
            color: "#ff6262",
            marginBottom: "14px",
            textAlign: "center",
            fontWeight: 500,
            width: "100%",
          }}>
            {error}
          </div>
        )}
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg,#ffe066 20%,#fff 100%)",
            color: "#16213e",
            fontWeight: 800,
            border: "none",
            borderRadius: "18px",
            fontSize: "1.08rem",
            padding: "13px 0",
            marginTop: "6px",
            marginBottom: "14px",
            boxShadow: "0 2px 18px 0 #ffe06644",
            cursor: "pointer",
            width: "100%",
            letterSpacing: 1,
            transition: "background 0.2s, color 0.2s, transform 0.18s",
          }}
        >
          Login
        </button>
        <div style={{textAlign: "center", fontSize: ".97rem", color: "#bfc9da", marginTop: 12}}>
          Don&apos;t have an account?{" "}
          <a href="/register" style={{color: "#2196f3", fontWeight: 600, textDecoration: "none"}}>
            Register
          </a>
        </div>
      </form>
    </div>
  );
}

// Bubbly animated background element
function Bubble({ color, size, top, left, delay }) {
  return (
    <div style={{
      position: "absolute",
      top,
      left,
      width: size,
      height: size,
      background: color,
      opacity: 0.18,
      borderRadius: "50%",
      filter: "blur(1.5px)",
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
