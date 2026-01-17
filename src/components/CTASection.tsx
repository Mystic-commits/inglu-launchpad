import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, GraduationCap, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Transform Campus Collaboration?
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose your path and start building meaningful connections today.
          </p>
        </div>

        {/* Dual CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
          {/* College CTA */}
          <div className="group bg-card rounded-3xl p-8 border-2 border-education/30 hover:border-education hover:shadow-elevated transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-education flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              I'm a College
            </h3>
            <p className="text-muted-foreground mb-6">
              Bring industry exposure, events, and opportunities to your campus. Enhance student outcomes with real-world connections.
            </p>
            <Button variant="college" size="lg" className="w-full">
              Partner as a College
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>

          {/* Brand CTA */}
          <div className="group bg-card rounded-3xl p-8 border-2 border-enhancement/30 hover:border-enhancement hover:shadow-elevated transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-enhancement flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              I'm a Brand
            </h3>
            <p className="text-muted-foreground mb-6">
              Reach millions of students across 500+ campuses. Build brand awareness, hire talent, and drive activations.
            </p>
            <Button variant="brand" size="lg" className="w-full">
              Partner as a Brand
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Have questions? We'd love to hear from you.
          </p>
          <a 
            href="mailto:hello@ingluglobal.in" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <Mail className="w-5 h-5" />
            hello@ingluglobal.in
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
