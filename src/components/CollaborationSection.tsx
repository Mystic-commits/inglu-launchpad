import { Building2, Users, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";

const CollaborationSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-enhancement/10 text-enhancement text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Collaboration Engine
          </h2>
          <p className="text-lg text-muted-foreground">
            INGLU sits at the center, orchestrating seamless connections between all stakeholders.
          </p>
        </div>

        {/* Collaboration Flow */}
        <div className="max-w-5xl mx-auto">
          {/* Visual Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-16">
            {/* Brands */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-enhancement flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Brands</h3>
              <p className="text-sm text-muted-foreground">Reach campuses at scale</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-muted-foreground/50" />
            </div>

            {/* INGLU Hub */}
            <div className="bg-gradient-hero rounded-2xl p-8 text-center shadow-elevated relative">
              <div className="absolute inset-0 bg-gradient-mesh opacity-20 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-entertainment flex items-center justify-center mb-4 shadow-glow">
                  <span className="text-primary-foreground font-display font-bold text-2xl">I</span>
                </div>
                <h3 className="font-display font-bold text-xl text-primary-foreground mb-2">INGLU</h3>
                <p className="text-sm text-primary-foreground/70">3E Ecosystem Hub</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-muted-foreground/50" />
            </div>

            {/* Colleges */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-education flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Colleges</h3>
              <p className="text-sm text-muted-foreground">Enhance student value</p>
            </div>
          </div>

          {/* Students Result */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">
                5M+ Students benefit from real opportunities
              </span>
            </div>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Brands */}
            <div className="bg-card rounded-2xl p-8 border border-enhancement/30 hover:shadow-elevated transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-enhancement flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl">For Brands</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Access 500+ verified college networks",
                  "Execute pan-India campus activations",
                  "Build talent pipelines through real engagement",
                  "Track ROI with data-driven insights",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-enhancement flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Colleges */}
            <div className="bg-card rounded-2xl p-8 border border-education/30 hover:shadow-elevated transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-education flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl">For Colleges</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Bring industry exposure to your campus",
                  "Enhance placement & internship outcomes",
                  "Host sponsored events & workshops",
                  "Strengthen student engagement & outcomes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-education flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
