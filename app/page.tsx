import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import SocialProof from "@/Components/SocialProof";
import ProblemSolution from "@/Components/ProblemSolution";
import Features from "@/Components/Features";
import Testimonials from "@/Components/Testimonials";
import Pricing from "@/Components/Pricing";
import FAQ from "@/Components/FAQ"
import FinalCTA from"@/Components/FinalCTA"
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}