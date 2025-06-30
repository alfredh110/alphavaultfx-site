import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <ul style={{ display: 'flex', gap: 20, listStyle: 'none', padding: 0 }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/challenge">Challenge</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
