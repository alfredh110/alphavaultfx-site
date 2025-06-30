import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import HowToGetFunded from '../components/HowToGetFunded';
import GetFunded from '../components/GetFunded';

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
      <HowToGetFunded />
      <GetFunded />
    </div>
  );
}
