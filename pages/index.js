import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to Your Prop Trading Platform</h1>
        <p>
          Get funded, prove your skills, and trade with our capital. 
        </p>
        <a href="/auth/register">Get Started</a>
      </main>
    </>
  );
}
