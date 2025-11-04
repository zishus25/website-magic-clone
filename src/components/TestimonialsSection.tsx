import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Zishu delivered our e-commerce platform ahead of schedule with exceptional quality. His attention to detail and problem-solving skills are outstanding.",
      rating: 5,
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Product Manager, DataFlow",
      content: "Working with Zishu was a game-changer for our project. His technical expertise and clear communication made the entire process smooth and efficient.",
      rating: 5,
      initials: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Solutions",
      content: "Zishu transformed our ideas into a beautiful, functional website. His creativity and technical skills are exactly what we needed.",
      rating: 5,
      initials: "ER"
    },
    {
      name: "Manij Kumar",
      role: "CTO, InnovateTech",
      content: "Exceptional developer who goes above and beyond. Zishu's code is clean, well-documented, and scalable. Highly recommended!",
      rating: 5,
      initials: "MK"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] transition-all duration-300 relative">
                <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
                
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-14 w-14 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
