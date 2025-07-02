import { useSession } from "next-auth/react";
import ChallengeSelector from '../components/challenge/ChallengeSelector';
import ChallengeProgress from '../components/challenge/ChallengeProgress';
import ChallengeRules from '../components/challenge/ChallengeRules';
import BuyChallenge from '../components/challenge/BuyChallenge';

function ChallengeRulesSection() {
  return (
    <section style={{ padding: '2rem', marginBottom: '2rem', background: '#f7f9fb', borderRadius: 10 }}>
      <h2>Get Funded Today!</h2>
      <p>
        Take the AlphavaultFX Challenge and get access to funded trading accounts. Choose your challenge, follow the rules, and start trading with real capital!
      </p>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 250, background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: 20 }}>
          <h3>$10,000 Challenge</h3>
          <ul>
            <li>Price: <b>$99</b></li>
            <li>Target: 8% in Phase 1</li>
            <li>Max Daily Loss: 5%</li>
            <li>Max Total Loss: 10%</li>
            <li>Profit Split: 80/20</li>
          </ul>
        </div>
        <div style={{ flex: 1, minWidth: 250, background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: 20 }}>
          <h3>$25,000 Challenge</h3>
          <ul>
            <li>Price: <b>$199</b></li>
            <li>Target: 8% in Phase 1</li>
            <li>Max Daily Loss: 5%</li>
            <li>Max Total Loss: 10%</li>
            <li>Profit Split: 80/20</li>
          </ul>
        </div>
        <div style={{ flex: 1, minWidth: 250, background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: 20 }}>
          <h3>$50,000 Challenge</h3>
          <ul>
            <li>Price: <b>$349</b></li>
            <li>Target: 8% in Phase 1</li>
            <li>Max Daily Loss: 5%</li>
            <li>Max Total Loss: 10%</li>
            <li>Profit Split: 80/20</li>
          </ul>
        </div>
        {/* Add more account sizes/pricing as needed */}
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h4>Challenge Rules</h4>
        <ul>
          <li>Reach the profit target to pass each phase.</li>
          <li>Do not exceed the daily or overall loss limits.</li>
          <li>Respect trading days requirements (e.g. Minimum 5 trading days per phase).</li>
          <li>No cheating, hedging, or exploiting platform loopholes.</li>
          <li>Once you pass, receive a funded account and trade for real profits!</li>
        </ul>
      </div>
    </section>
  );
}

export default function Challenge() {
  const { data } = useSession() || {};

  return (
    <div className="challenge-root">
      <ChallengeRulesSection />
      <ChallengeSelector />
      <ChallengeProgress />
      <ChallengeRules />
      <BuyChallenge />
    </div>
  );
}

export const getServerSideProps = () => ({ props: {} });
