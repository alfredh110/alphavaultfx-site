export default function ChallengeStatus() {
  return (
    <div className="dash-card challenge-status">
      <div className="ch-title">Challenge Progress</div>
      <div className="ch-progress-label">
        Phase 1: <span style={{color:"#fff"}}>$2,500/$5,000</span>
      </div>
      <div className="ch-progressbar-bg">
        <div className="ch-progressbar-fill" />
      </div>
      <div className="ch-status-row">
        <div className="ch-status-badge ok">Compliant</div>
        <div className="ch-status-next">12 days left</div>
      </div>
      <style jsx>{`
        .challenge-status {
          flex: 2 1 240px;
        }
        .ch-title {
          color: #2186eb;
          font-weight: 700;
          font-size: 1.13rem;
          margin-bottom: 10px;
        }
        .ch-progress-label {
          color: #b3c7e6;
          font-size: 1.01rem;
          margin-bottom: 7px;
        }
        .ch-progressbar-bg {
          width: 100%;
          height: 16px;
          background: #181f2e;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 9px;
          border: 1px solid #2186eb22;
        }
        .ch-progressbar-fill {
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, #2186eb 0, #22e06d 100%);
          border-radius: 8px;
          box-shadow: 0 2px 12px #2186eb33;
          transition: width 0.6s;
        }
        .ch-status-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ch-status-badge.ok {
          background: #22e06d;
          color: #111a28;
          font-weight: 700;
          border-radius: 6px;
          padding: 2px 14px;
          font-size: 0.96rem;
        }
        .ch-status-next {
          color: #b3c7e6;
          font-size: 0.98rem;
        }
      `}</style>
    </div>
  );
}
