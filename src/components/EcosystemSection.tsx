import { BookOpen, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ecosystemItems = [
  {
    id: "education",
    title: "Education",
    icon: BookOpen,
    description: "Industry-aligned learning through workshops, certifications, and guest lectures that prepare students for real careers.",
    features: ["Guest Lectures", "Skill Workshops", "Certification Programs", "Industry Mentorship"],
    color: "bg-education",
    lightBg: "bg-education-light",
    borderColor: "border-education/20",
    iconBg: "bg-education/10",
    textColor: "text-education",
  },
  {
    id: "enhancement",
    title: "Enhancement",
    icon: TrendingUp,
    description: "Career acceleration through internships, live projects, and mentorship that build professional experience.",
    features: ["Paid Internships", "Live Projects", "Career Mentorship", "Placement Support"],
    color: "bg-enhancement",
    lightBg: "bg-enhancement-light",
    borderColor: "border-enhancement/20",
    iconBg: "bg-enhancement/10",
    textColor: "text-enhancement",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    icon: Sparkles,
    description: "Engaging campus experiences through events, competitions, and brand activations that energize communities.",
    features: ["Campus Events", "Competitions", "Brand Activations", "Cultural Fests"],
    color: "bg-entertainment",
    lightBg: "bg-entertainment-light",
    borderColor: "border-entertainment/20",
    iconBg: "bg-entertainment/10",
    textColor: "text-entertainment",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-foreground mb-4"
          >
            The 3E Framework
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4"
          >
            One ecosystem. Three pillars.
            <br />
            <span className="text-muted-foreground">Endless possibilities.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            A unified approach that delivers value to colleges, brands, and students.
          </motion.p>
        </div>

        {/* Ecosystem Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {ecosystemItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`group relative rounded-2xl border ${item.borderColor} bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-${item.id}/40`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.iconBg} mb-6`}>
                  <Icon className={`w-6 h-6 ${item.textColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a 
                  href="#" 
                  className={`inline-flex items-center gap-1.5 text-sm font-medium ${item.textColor} hover:underline`}
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
