"use client";

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PainSection } from "./components/PainSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { TrustSection } from "./components/TrustSection";
import { FAQSection } from "./components/FAQSection";
import { WaitlistForm } from "./components/WaitlistForm";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <div className="size-full" dir="rtl">
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <HowItWorksSection />
        <TrustSection />
        <FAQSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
