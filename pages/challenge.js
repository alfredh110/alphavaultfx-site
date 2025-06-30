import ChallengeSelector from '../components/challenge/ChallengeSelector';
import ChallengeProgress from '../components/challenge/ChallengeProgress';
import ChallengeRules from '../components/challenge/ChallengeRules';
import BuyChallenge from '../components/challenge/BuyChallenge';

export default function Challenge() {
  return (
    <div className="challenge-root">
      <ChallengeSelector />
      <ChallengeProgress />
      <ChallengeRules />
      <BuyChallenge />
    </div>
  );
}
