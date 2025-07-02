import { useRouter } from "next/router";

const COLORS = {
  primary: "#2186eb",
  text: "#fff",
  card: "rgba(20,40,60,0.85)",
  border: "rgba(33,134,235,0.35)"
};

export default function GetFunded() {
  const router = useRouter();
  const { type = "1step", size = "25k" } = router.query;

  function handleStartChallenge() {
    // Redirect to your payment center.
    // Example: router.push(`/payment?type=${type}&size=${size}`);
    // Or use an external link:
    // window.location.href = "https://your-payment-provider.com";
    router.push(`/payment?type=${type}&size=${size}`);
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
      <div
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
          gap: 22,
          alignItems: "center"
        }}
      >
        <h2 style={{ color: COLORS.primary, fontWeight: 800, textAlign: "center" }}>
          Get Funded
        </h2>
        <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 8, textAlign: "center" }}>
          Ready to start your challenge?
        </div>
        <button
          onClick={handleStartChallenge}
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
            marginTop: 18
          }}
        >
          Start Challenge
        </button>
      </div>
    </div>
  );
}
