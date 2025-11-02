import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, Briefcase, GraduationCap, Award, Code } from "lucide-react";

export const ResumeSection = () => {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Technologies" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const highlights = [
    {
      icon: Briefcase,
      title: "Professional Experience",
      description: "3+ years of full-stack development with cutting-edge technologies",
    },
    {
      icon: GraduationCap,
      title: "Education & Certifications",
      description: "Computer Science background with industry-recognized certifications",
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Multiple project successes and performance optimization records",
    },
    {
      icon: Code,
      title: "Skills Portfolio",
      description: "Mastery in React, Node.js, Python, and modern development practices",
    },
  ];

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my professional journey, skills, and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/10 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Full Stack Developer</h3>
              <p className="text-lg text-primary">Passionate Developer | Problem Solver | Innovation Expert</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg bg-secondary/30 border border-primary/10"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-lg bg-secondary/20 border border-primary/10"
                >
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:shadow-[0_0_50px_rgba(74,222,128,0.5)] transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Full Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <Eye className="h-5 w-5 mr-2" />
                Preview Online
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Ready to Hire?</h3>
            <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm actively seeking new opportunities to create innovative solutions and contribute to amazing teams. 
              Let's discuss how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schedule Interview
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Portfolio
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
