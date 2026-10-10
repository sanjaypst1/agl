import { AccountabilityBand } from "@/components/home/AccountabilityBand";
import { ClosingNarrative } from "@/components/home/ClosingNarrative";
import { DiscussionReadyProducts } from "@/components/home/DiscussionReadyProducts";
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
import { Plan306090 } from "@/components/plan/Plan306090";
import { RiskDataNetwork } from "@/components/three/RiskDataNetwork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeQuestions />
      <DiscussionReadyProducts />
      <ReportingProducts />
      <FlagshipUbs />
      <RiskKnowledge />
      <SourceToDecision />
      <RiskDataNetwork />
      <TechBoundaries />
      <LifecycleStepper />
      <Plan306090 />
      <TransferabilityBand />
      <OutcomesSection />
      <AccountabilityBand />
      <ClosingNarrative />
    </>
  );
}
