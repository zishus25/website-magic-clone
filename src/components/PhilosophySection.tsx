import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Rocket, Zap, Target, Gem } from "lucide-react";

export const PhilosophySection = () => {
  const philosophies = [
    {
      title: "Code Craftsmanship",
      description: "Every line of code is a work of art. I believe in writing clean, elegant, and maintainable code that stands the test of time.",
    },
    {
      title: "Innovation First",
      description: "I don't just solve problems, I reimagine solutions. Innovation isn't just what I do - it's who I am.",
    },
    {
      title: "Excellence Standard",
      description: "Good isn't good enough. I strive for perfection in every project, pushing the boundaries of what's possible.",
    },
    {
      title: "Performance Obsessed",
      description: "Speed matters. Every millisecond counts. I optimize not just for functionality, but for lightning-fast performance.",
    },
  ];

  const badges = [
    { icon: Rocket, text: "Innovation Expert" },
    { icon: Zap, text: "Performance Guru" },
    { icon: Target, text: "Problem Solver" },
    { icon: Gem, text: "Code Craftsman" },
  ];

  return (
    <section id="philosophy" className="py-20 relative bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Coding Philosophy</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/10">
            <p className="text-lg text-center leading-relaxed text-muted-foreground">
              I'm not just a coder - I'm a digital architect, a problem-solving virtuoso, and quite possibly the most 
              passionate developer you'll ever meet. Code isn't just my profession; it's my art, my passion, my way of 
              making the impossible possible.
            </p>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {philosophies.map((philosophy, index) => (
            <motion.div
              key={philosophy.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] transition-all duration-300 h-full">
                <h3 className="text-xl font-bold mb-3 text-primary">{philosophy.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{philosophy.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">World-Class Developer</h3>
            <p className="text-center text-muted-foreground mb-8 leading-relaxed">
              With an unwavering commitment to excellence and an insatiable hunger for knowledge, I don't just write 
              code - I craft digital experiences that push the boundaries of technology. Every project is an opportunity 
              to prove that impossible is just another word for challenge.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 border border-primary/20"
                >
                  <badge.icon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium text-center">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
