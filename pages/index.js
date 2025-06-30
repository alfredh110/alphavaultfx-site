import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; // if you have a separate hero component
import Stats from '../components/Stats'; // your stats row, single instance only!
import Features from '../components/Features';
import HowToGetFunded from '../components/HowToGetFunded';
import GetFunded from '../components/GetFunded';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats /> {/* <- Place your stats section here, only ONCE */}
      <Features />
      <HowToGetFunded /> {/* <- Place the new futuristic version here */}
      <GetFunded />
      {/* ...footer or other sections */}
    </div>
  );
}
