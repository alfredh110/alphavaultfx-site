import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#111a27",
      padding: "0 40px",
      height: "68px",
      borderBottom: "1.5px solid #2186eb"
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/logo.png"
          alt="AlphaVaultFX Logo"
          style={{
            height: "42px",
            marginRight: "16px",
            borderRadius: "8px",
            boxShadow: "0 2px 12px 0 rgba(33,134,235, 0.14)"
          }}
        />
        <span style={{
          fontWeight: "bold",
          fontSize: "2rem",
          color: "white"
        }}>
          AlphaVault<span style={{ color: "#2186eb" }}>FX</span>
        </span>
      </div>
      <div>
        <Link href="/" style={{ color: "white", margin: "0 12px", textDecoration: "none" }}>Home</Link>
        <Link href="/dashboard" style={{ color: "white", margin: "0 12px", textDecoration: "none" }}>Dashboard</Link>
        <Link href="/challenge" style={{ color: "white", margin: "0 12px", textDecoration: "none" }}>Challenge</Link>
        {session ? (
          <>
            <span style={{ color: "white", margin: "0 12px" }}>
              {session.user?.email}
            </span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
              style={{ color: "white", margin: "0 12px", textDecoration: "none", cursor: "pointer" }}
            >
              Logout
            </a>
          </>
        ) : (
          <Link href="/auth/login" style={{ color: "white", margin: "0 12px", textDecoration: "none" }}>Login</Link>
        )}
      </div>
    </nav>
  );
}
