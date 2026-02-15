import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PartnersSection } from "@/components/partners-section";
import { ImpactSection } from "@/components/impact-section";
import { ProgramsSection } from "@/components/programs-section";
import { AboutSection } from "@/components/about-section";
import { MissionSection } from "@/components/mission-section";
import { VisionSection } from "@/components/vision-section";
import { JoinMovementSection } from "@/components/join-movement-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3EEE7]">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <ImpactSection />
        <ProgramsSection />
        <AboutSection />
        <MissionSection />
        <VisionSection />
        <JoinMovementSection />
      </main>
      <Footer />
    </div>
  );
}
