import Navbar from '../components/Navbar';
import Features from '../components/Features';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px'
      }}>
        <div
          style={{
            background: '#131b26',
            padding: '40px 60px',
            borderRadius: '24px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            maxWidth: '900px',
            width: '100%',
            textAlign: 'left'
          }}
          className="fade-in"
        >
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
            Unlock Your Trading Potential with <span style={{ color: '#2186eb' }}>AlphaVaultFX</span>
          </h1>
          <p style={{ color: '#e0e6ed', fontSize: '1.2rem', marginBottom: '30px' }}>
            Get funded, prove your skills, and trade with our capital.
          </p>
          <button
            style={{
              backgroundColor: '#2186eb',
              color: 'white',
              padding: '12px 32px',
              fontWeight: 'bold',
              fontSize: '1rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Get Started
          </button>
        </div>
      </main>
      <Features />
      <style jsx global>{`
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
    </div>
  );
}
