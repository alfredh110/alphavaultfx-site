import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #eee', marginBottom: '2rem' }}>
      <Link href="/">Home</Link> |{' '}
      <Link href="/dashboard">Dashboard</Link> |{' '}
      <Link href="/challenge">Challenge</Link> |{' '}
      <Link href="/auth/login">Login</Link>
    </nav>
  );
}
