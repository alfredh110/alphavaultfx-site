import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>AlphaVaultFX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="site-header">
        <div className="brand">
          <div className="logo-circle">AV</div>
          <span className="brand-text">
            AlphaVault<span className="brand-blue">FX</span>
          </span>
        </div>
        <nav className="main-nav">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/challenge">Challenge</a>
          {/* Removed Login button */}
        </nav>
      </header>
      <main className="site-main">{children}</main>
      <style jsx>{`
        .site-header {
          width: 100%;
          background: #131e23;
          border-bottom: 2px solid #2196f3;
          padding: 0.5rem 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .logo-circle {
          width: 34px;
          height: 34px;
          background: #131e23;
          border: 2px solid #2196f3;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #2196f3;
          font-size: 17px;
          box-shadow: 0 2px 10px #2196f322;
        }
        .brand-text {
          font-weight: 900;
          font-size: 22px;
          letter-spacing: 1px;
          color: #fff;
        }
        .brand-blue {
          color: #2196f3;
        }
        .main-nav {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }
        .main-nav a {
          color: #fff;
          font-weight: 600;
        }
        .main-nav .blue-link {
          color: #2196f3;
        }
        .site-main {
          min-height: 80vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        @media (max-width: 700px) {
          .site-header {
            flex-direction: column;
            align-items: flex-start;
            padding: 0.8rem 0.7rem;
          }
          .main-nav {
            gap: 13px;
            margin-top: 8px;
          }
          .logo-circle {
            height: 28px !important;
            width: 28px !important;
            font-size: 15px !important;
          }
          .brand-text {
            font-size: 16px !important;
          }
        }
      `}</style>
    </>
  );
}
