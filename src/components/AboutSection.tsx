import { motion } from "framer-motion";
import { Code2, Zap, Target, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  const features = [
    { icon: Code2, title: "Clean Code", description: "Writing maintainable and efficient code" },
    { icon: Zap, title: "Fast Learner", description: "Quick to adapt to new technologies" },
    { icon: Target, title: "Goal-Oriented", description: "Focused on delivering quality results" },
    { icon: Heart, title: "Passionate", description: "Love for programming and problem-solving" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            A passionate full-stack developer dedicated to creating innovative solutions and continuously learning new technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Starting my programming journey with a deep passion for creating digital solutions that make a difference. 
                I've developed expertise in modern web technologies and methodologies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My approach combines creative problem-solving with technical expertise, always aiming for clean, 
                efficient code that delivers exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently focusing on full-stack development, I enjoy working on projects that challenge me to 
                grow and learn something new every day.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] transition-all duration-300 h-full">
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
