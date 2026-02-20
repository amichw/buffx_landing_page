import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarketOpportunity } from "./components/MarketOpportunity";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Team } from "./components/Team";
import { WaitlistForm } from "./components/WaitlistForm";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <MarketOpportunity />
        <Team />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
