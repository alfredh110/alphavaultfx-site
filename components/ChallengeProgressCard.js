import { FaFlagCheckered } from "react-icons/fa";

export default function ChallengeProgressCard() {
  const progress = 2500 / 5000; // e.g., $2,500 of $5,000
  return (
    <div className="av-card">
      <div className="av-card-title">
        <FaFlagCheckered /> Challenge Progress
      </div>
      <div className="av-progress-row">
        <div>
          <span className="av-progress-label">Phase 1</span>
          <span className="av-progress-value">$2,500 / $5,000</span>
        </div>
        <span className="av-progress-status av-compliant">Compliant</span>
      </div>
      <div className="av-progress-bar-bg">
        <div
          className="av-progress-bar"
          style={{ width: `${progress * 100}%` }}
        ></div>
      </div>
      <div className="av-progress-footer">
        <span>12 days left</span>
      </div>
    </div>
  );
}
