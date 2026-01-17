import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import LogoTicker from "./LogoTicker";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-hero-gradient overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Announcement Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border mb-8"
          >
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-foreground">
              Now connecting 500+ colleges across India
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6"
          >
            Where campuses meet
            <br />
            <span className="text-gradient">brands & opportunity</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            INGLU's 3E Ecosystem—<strong className="text-foreground">Education, Enhancement, Entertainment</strong>—connects colleges with industry partners to create real opportunities for millions of students.
          </motion.p>

          {/* Email Capture / CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
          >
            <div className="relative w-full sm:w-auto">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="w-full sm:w-80 h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <Button size="lg" className="w-full sm:w-auto h-12 px-6 bg-foreground text-background hover:bg-foreground/90 font-semibold">
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                <Play className="w-3 h-3 fill-current" />
              </div>
              Watch Demo
            </button>
            <span className="text-border">|</span>
            <span className="text-sm text-muted-foreground">No credit card required</span>
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Trusted by industry leaders
          </p>
          <LogoTicker />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
