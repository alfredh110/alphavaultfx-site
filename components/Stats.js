export default function Stats() {
  return (
    <section style={{
      display: "flex",
      justifyContent: "center",
      gap: "24px",
      background: "#111a28",
      padding: "30px 0"
    }}>
      {[
        { big: "$1M+", label: "In Funding" },
        { big: "7 hrs", label: "Avg. Payout Time" },
        { big: "90%", label: "Profit Split" },
        { big: "5,000+", label: "Traders" },
        {
          big: <span style={{color:"#22e06d",fontWeight:700}}>★</span>,
          label: (
            <span>
              <img src="https://cdn.trustpilot.net/brand-assets/4.8-stars.svg" alt="Trustpilot" style={{height:18,verticalAlign:"middle"}} />
              TrustScore 4.8
            </span>
          )
        }
      ].map((stat, i) => (
        <div key={i} style={{
          background: "#172132",
          borderRadius: "18px",
          minWidth: "160px",
          minHeight: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 28px",
          color: "#2186eb",
          fontWeight: 700,
          fontSize: "1.4rem"
        }}>
          <div>{stat.big}</div>
          <div style={{color:"#e0e6ed",fontWeight:500,fontSize:"1rem"}}>{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
