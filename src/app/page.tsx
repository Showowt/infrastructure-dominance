import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SpeedComparison } from "@/components/SpeedComparison";
import { EnginesSection } from "@/components/EnginesSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { BlueOceanSection } from "@/components/BlueOceanSection";
import { RevenueSection } from "@/components/RevenueSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 blueprint-bg opacity-50 pointer-events-none" />

      {/* Scan line effect */}
      <div className="scan-line pointer-events-none z-50" />

      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SpeedComparison />
      <EnginesSection />
      <CaseStudySection />
      <BlueOceanSection />
      <RevenueSection />
      <CTASection />
      <Footer />
    </main>
  );
}
