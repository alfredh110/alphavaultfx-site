import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import HowToGetFunded from '../components/HowToGetFunded';
import GetFunded from '../components/GetFunded';

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Navigation Bar */}
      <nav style={{ marginBottom: 20 }}>
        <ul style={{ display: 'flex', gap: 20, listStyle: 'none', padding: 0 }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/challenge">Challenge</Link></li>
        </ul>
      </nav>
      <Hero />
      <Stats />
      <Features />
      <HowToGetFunded />
      <GetFunded />
    </div>
  );
}
