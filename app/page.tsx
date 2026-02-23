import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarketOpportunity } from "./components/MarketOpportunity";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { WhyNow } from "./components/WhyNow";
import { WhyUs } from "./components/WhyUs";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <MarketOpportunity />
        <Problem />
        <Solution />
        <WhyNow />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
