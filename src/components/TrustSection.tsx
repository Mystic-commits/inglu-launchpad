import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const metrics = [
  { value: "500+", label: "Partner Colleges", description: "Pan-India network" },
  { value: "100+", label: "Brand Partners", description: "Top companies" },
  { value: "5M+", label: "Students Impacted", description: "And growing daily" },
  { value: "₹50Cr+", label: "Value Delivered", description: "To stakeholders" },
];

const testimonials = [
  {
    quote: "INGLU has transformed how we engage with students. The ROI on our campus initiatives has been exceptional.",
    author: "Marketing Head",
    company: "Leading FMCG Brand",
  },
  {
    quote: "Our placement statistics improved significantly after partnering with INGLU. Students get real industry exposure.",
    author: "Placement Director",
    company: "Top Engineering College",
  },
];

const TrustSection = () => {
  return (
    <section id="partners" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-foreground p-8 md:p-12 mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((metric, index) => (
              <motion.div 
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-background mb-2">
                  {metric.value}
                </div>
                <div className="text-background/80 font-medium mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-background/50">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-foreground mb-4"
          >
            What People Say
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Trusted by leaders across India
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative rounded-2xl border border-border bg-card p-8"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-semibold text-foreground">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
