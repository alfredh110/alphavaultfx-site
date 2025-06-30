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
        <div style={{
          background: '#172132',
          padding: '30px',
          borderRadius: '16px',
          minWidth: '250px',
          maxWidth: '320px',
          textAlign: 'center',
          boxShadow: '0 4px 16px 0 rgba(31,38,135,0.08)'
        }}>
          <h3 style={{ color: '#2186eb', marginBottom: '16px', fontWeight: 'bold' }}>Funded Accounts</h3>
          <p style={{ color: '#e0e6ed', fontSize: '1rem' }}>
            Get access to real capital and scale your trading career.
          </p>
        </div>
        <div style={{
          background: '#172132',
          padding: '30px',
          borderRadius: '16px',
          minWidth: '250px',
          maxWidth: '320px',
          textAlign: 'center',
          boxShadow: '0 4px 16px 0 rgba(31,38,135,0.08)'
        }}>
          <h3 style={{ color: '#2186eb', marginBottom: '16px', fontWeight: 'bold' }}>Real-Time Analytics</h3>
          <p style={{ color: '#e0e6ed', fontSize: '1rem' }}>
            Track your progress and performance with rich analytics.
          </p>
        </div>
        <div style={{
          background: '#172132',
          padding: '30px',
          borderRadius: '16px',
          minWidth: '250px',
          maxWidth: '320px',
          textAlign: 'center',
          boxShadow: '0 4px 16px 0 rgba(31,38,135,0.08)'
        }}>
          <h3 style={{ color: '#2186eb', marginBottom: '16px', fontWeight: 'bold' }}>Trader Community</h3>
          <p style={{ color: '#e0e6ed', fontSize: '1rem' }}>
            Join a supportive community and grow together.
          </p>
        </div>
      </div>
    </section>
  );
}
