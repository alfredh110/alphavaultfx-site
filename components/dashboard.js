import React, { useState } from "react";

export default function Dashboard() {
  // Example login state (you should replace with your own auth logic)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with your login logic
    if (email === "" || password === "") {
      setError("Please enter your email and password.");
    } else {
      setError("");
      // Do login
      alert("Login successful! (Replace with real auth)");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #131e2e 0%, #1a263b 100%)",
    }}>
      <form 
        onSubmit={handleLogin}
        style={{
          background: "rgba(22, 34, 51, 0.97)",
          padding: "48px 36px",
          borderRadius: "24px",
          boxShadow: "0 8px 40px 0 #10418266",
          width: "100%",
          maxWidth: "370px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{
          color: "#2196f3",
          fontWeight: 800,
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "30px",
          letterSpacing: 1,
        }}>
          Login to Dashboard
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #25344d",
            marginBottom: "18px",
            fontSize: "1rem",
            outline: "none",
            background: "#192840",
            color: "#fff",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #25344d",
            marginBottom: "18px",
            fontSize: "1rem",
            outline: "none",
            background: "#192840",
            color: "#fff",
          }}
        />
        {error && (
          <div style={{
            color: "#ff6262",
            marginBottom: "14px",
            textAlign: "center",
            fontWeight: 500,
          }}>
            {error}
          </div>
        )}
        <button
          type="submit"
          style={{
            background: "#2196f3",
            color: "#fff",
            fontWeight: 700,
            border: "none",
            borderRadius: "10px",
            fontSize: "1.1rem",
            padding: "13px 0",
            marginTop: "6px",
            marginBottom: "10px",
            boxShadow: "0 2px 18px 0 #2196f366",
            cursor: "pointer",
            transition: "background 0.18s",
          }}
        >
          Login
        </button>
        <div style={{textAlign: "center", fontSize: ".96rem", color: "#bfc9da"}}>
          Forgot your password?
        </div>
      </form>
    </div>
  );
}
