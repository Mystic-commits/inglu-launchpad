const partnerLogos = [
  { name: "Microsoft", initial: "M" },
  { name: "Google", initial: "G" },
  { name: "Amazon", initial: "A" },
  { name: "Flipkart", initial: "F" },
  { name: "Zomato", initial: "Z" },
  { name: "Swiggy", initial: "S" },
  { name: "Paytm", initial: "P" },
  { name: "BYJU'S", initial: "B" },
];

const TrustSection = () => {
  return (
    <section id="partners" className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Trusted by Leading Brands & Institutions
          </h2>
          <p className="text-muted-foreground">
            Join the ecosystem that's transforming campus-industry collaboration
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-16">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center w-24 h-16 md:w-32 md:h-20 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                <span className="font-display font-bold text-lg">{partner.initial}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
          
          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-10">
              Real Impact, Real Numbers
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Partner Colleges", sublabel: "Pan-India Network" },
                { value: "100+", label: "Brand Partners", sublabel: "Top Companies" },
                { value: "5M+", label: "Students Impacted", sublabel: "Growing Daily" },
                { value: "₹50Cr+", label: "Value Delivered", sublabel: "To Stakeholders" },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                    {metric.value}
                  </div>
                  <div className="text-primary-foreground/80 font-medium mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-primary-foreground/50">
                    {metric.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
