import { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ProjectOverview } from "@/components/case-study/ProjectOverview";
import { BlindSpotAnalysis } from "@/components/case-study/BlindSpotAnalysis";
import { RiskMatrix } from "@/components/case-study/RiskMatrix";
import { CostModel } from "@/components/case-study/CostModel";
import { TimelineOptimization } from "@/components/case-study/TimelineOptimization";
import { RegulatoryMap } from "@/components/case-study/RegulatoryMap";
import { DigitalTwinSpec } from "@/components/case-study/DigitalTwinSpec";
import { ExecutiveSummary } from "@/components/case-study/ExecutiveSummary";
import { CaseStudyCTA } from "@/components/case-study/CaseStudyCTA";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "4 en 1 Bocagrande Analysis | Infrastructure Dominance Engine",
  description:
    "AI-powered feasibility analysis of the $168B COP 4 en 1 Bocagrande/Castillogrande project. Delivered in 72 hours vs 4 months.",
  openGraph: {
    title: "4 en 1 Bocagrande - AI Feasibility Analysis",
    description:
      "72-hour AI analysis of Cartagena's $168B COP infrastructure mega-project",
  },
};

export default function CaseStudyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 blueprint-bg opacity-50 pointer-events-none" />

      <Navigation />
      <CaseStudyHero />
      <ExecutiveSummary />
      <ProjectOverview />
      <BlindSpotAnalysis />
      <RiskMatrix />
      <CostModel />
      <TimelineOptimization />
      <RegulatoryMap />
      <DigitalTwinSpec />
      <CaseStudyCTA />
      <Footer />
    </main>
  );
}
