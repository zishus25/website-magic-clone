import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Award, Users, Zap, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

export const WhyHireMeSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      projects: 50,
      clients: 30,
      experience: 2,
      satisfaction: 98
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        projects: Math.floor((targets.projects * step) / steps),
        clients: Math.floor((targets.clients * step) / steps),
        experience: Math.floor((targets.experience * step) / steps),
        satisfaction: Math.floor((targets.satisfaction * step) / steps)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: `${counters.projects}+`,
      label: "Projects Delivered",
      color: "text-primary"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: `${counters.clients}+`,
      label: "Happy Clients",
      color: "text-primary"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: `${counters.experience}+`,
      label: "Years Experience",
      color: "text-primary"
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: `${counters.satisfaction}%`,
      label: "Client Satisfaction",
      color: "text-primary"
    }
  ];

  const advantages = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality"
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: "Clean Code",
      description: "Maintainable, scalable, and well-documented"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Great Communication",
      description: "Regular updates and transparent workflow"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Modern Stack",
      description: "Latest technologies and best practices"
    }
  ];

  return (
    <section id="why-hire" className="py-20 relative bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Why Choose Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Success Is My Priority
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with business understanding to deliver exceptional results
          </p>
        </motion.div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] transition-all duration-300">
                <div className={`inline-flex mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] transition-all duration-300 group">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {advantage.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Badge className="text-base py-2 px-4 bg-primary/90 hover:bg-primary">
            <span className="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
            Available for New Projects
          </Badge>
        </motion.div>
      </div>
    </section>
  );
};
