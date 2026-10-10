import { AccountabilityBand } from "@/components/home/AccountabilityBand";
import { ClosingNarrative } from "@/components/home/ClosingNarrative";
import { FlagshipUbs } from "@/components/home/FlagshipUbs";
import { Hero } from "@/components/home/Hero";
import { LifecycleStepper } from "@/components/home/LifecycleStepper";
import { OutcomesSection } from "@/components/home/OutcomesSection";
import { ReportingProducts } from "@/components/home/ReportingProducts";
import { RiskKnowledge } from "@/components/home/RiskKnowledge";
import { SourceToDecision } from "@/components/home/SourceToDecision";
import { TechBoundaries } from "@/components/home/TechBoundaries";
import { ThreeQuestions } from "@/components/home/ThreeQuestions";
import { TransferabilityBand } from "@/components/home/TransferabilityBand";
import { RiskDataNetwork } from "@/components/three/RiskDataNetwork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeQuestions />
      <ReportingProducts />
      <FlagshipUbs />
      <RiskKnowledge />
      <SourceToDecision />
      <RiskDataNetwork />
      <TechBoundaries />
      <LifecycleStepper />
      <TransferabilityBand />
      <OutcomesSection />
      <AccountabilityBand />
      <ClosingNarrative />
    </>
  );
}
