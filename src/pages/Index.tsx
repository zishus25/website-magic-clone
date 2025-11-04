import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WhyHireMeSection } from "@/components/WhyHireMeSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <>
          <HeroSection />
          <AboutSection />
          <PhilosophySection />
      <SkillsSection />
      <ProjectsSection />
      <WhyHireMeSection />
      <TestimonialsSection />
      <ExperienceSection />
          <ResumeSection />
          <ContactSection />
          
          {/* Footer */}
          <footer className="py-8 border-t border-primary/10">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
              <p>© 2024 Zishu. Built with React, TypeScript & Tailwind CSS.</p>
            </div>
          </footer>
        </>
      )}
      <Toaster />
    </div>
  );
};

export default Index;
