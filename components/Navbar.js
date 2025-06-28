import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Link href="/">
          <Image src="/logo.png" alt="AlphaVaultFX Logo" width={40} height={40} priority />
        </Link>
        <span style={{
          fontWeight: 700,
          fontSize: '1.4rem',
          letterSpacing: '0.02em',
          color: '#fff',
          marginLeft: '0.5rem'
        }}>
          AlphaVault<span style={{ color: '#2376d1' }}>FX</span>
        </span>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/challenge">Challenge</Link>
        <Link href="/auth/login">Login</Link>
      </div>
    </nav>
  );
}
