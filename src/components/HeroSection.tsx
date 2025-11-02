import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Zishu Ahmad|";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayText}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Crafting Digital Experiences with Code & Creativity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-background font-semibold shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:shadow-[0_0_50px_rgba(74,222,128,0.5)] transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <ArrowDown className="h-6 w-6 text-primary mx-auto animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
