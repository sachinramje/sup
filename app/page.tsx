import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import FeatureDeepDives from "@/components/FeatureDeepDives";
import Organization from "@/components/Organization";
import MoreFeatures from "@/components/MoreFeatures";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Cooldock from "@/components/Cooldock";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <FeatureDeepDives />
        <Organization />
        <MoreFeatures />
        <UseCases />
        <Pricing />
        <FAQ />
        <Cooldock />
      </main>
      <Footer />
    </>
  );
}
