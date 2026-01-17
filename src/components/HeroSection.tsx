import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, GraduationCap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-education/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-enhancement/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-enhancement animate-pulse-soft" />
            <span className="text-sm font-medium text-primary-foreground/80">
              Connecting 500+ Colleges & 100+ Brands
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Where Colleges & Brands{" "}
            <span className="text-gradient-primary">Collaborate</span>
            {" "}for Student Success
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            INGLU's <strong className="text-primary-foreground">3E Ecosystem</strong>—Education, Enhancement, Entertainment—bridges 
            campuses with industry, creating real opportunities for millions of students.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <GraduationCap className="w-5 h-5 mr-2" />
              I'm a College
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <Building2 className="w-5 h-5 mr-2" />
              I'm a Brand
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Colleges" },
              { value: "100+", label: "Brand Partners" },
              { value: "5M+", label: "Students Reached" },
              { value: "1000+", label: "Events Delivered" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
