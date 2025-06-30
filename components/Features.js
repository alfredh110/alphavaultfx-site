import React from 'react';

export default function Features() {
  return (
    <section
      style={{
        marginTop: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      className="fade-in"
    >
      <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '32px', fontWeight: 'bold' }}>
        Why Choose AlphaVaultFX?
      </h2>
      <div style={{
        display: 'flex',
        gap: '32px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div className="feature-card slide-up">
          <h3>Funded Accounts</h3>
          <p>Get access to real capital and scale your trading career.</p>
        </div>
        <div className="feature-card slide-up" style={{ animationDelay: "0.15s" }}>
          <h3>Real-Time Analytics</h3>
          <p>Track your progress and performance with rich analytics.</p>
        </div>
        <div className="feature-card slide-up" style={{ animationDelay: "0.3s" }}>
          <h3>Trader Community</h3>
          <p>Join a supportive community and grow together.</p>
        </div>
      </div>
      <style jsx>{`
        .feature-card {
          background: #172132;
          padding: 30px;
          border-radius: 16px;
          min-width: 250px;
          max-width: 320px;
          text-align: center;
          box-shadow: 0 4px 16px 0 rgba(31,38,135,0.08);
          color: #e0e6ed;
          margin-bottom: 16px;
        }
        .feature-card h3 {
          color: #2186eb;
          margin-bottom: 16px;
          font-weight: bold;
        }
        .slide-up {
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 0.6s forwards;
        }
        .slide-up:nth-child(2) { animation-delay: 0.15s; }
        .slide-up:nth-child(3) { animation-delay: 0.3s; }
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          opacity: 0;
          animation: fadeIn 1.2s forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
