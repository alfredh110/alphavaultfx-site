import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '1.2rem' }}>
          Unlock Your Trading Potential with <span style={{ color: '#2376d1' }}>AlphaVaultFX</span>
        </h1>
        <p>
          Get funded, prove your skills, and trade with our capital. 
        </p>
        <a href="/auth/register" style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          background: '#2376d1',
          color: '#fff',
          padding: '0.75rem 2rem',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '1rem'
        }}>Get Started</a>
      </main>
    </>
  );
}
