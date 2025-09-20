import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ValueCards from "@/components/ValueCards";
import HowItWorks from "@/components/HowItWorks";
import SmartphoneTracking from "@/components/SmartphoneTracking";
import FeatureGrid from "@/components/FeatureGrid";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <ValueCards />
      <HowItWorks />
      <SmartphoneTracking />
      <FeatureGrid />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;
