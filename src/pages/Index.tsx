import ParticleBackground from "@/components/ParticleBackground";
import SidePanel from "@/components/SidePanel";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import DSASection from "@/components/DSASection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative">
    <ParticleBackground />
    <SidePanel />
    <div className="relative z-50">
      <Navbar />
    </div>
    <main className="relative z-10">
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ResearchSection />
      <DSASection />
      <AchievementsSection />
      <CertificationsSection />
      <OpenSourceSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
