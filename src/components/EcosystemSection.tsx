import { BookOpen, Sparkles, Gamepad2, ArrowUpRight } from "lucide-react";

const ecosystemItems = [
  {
    id: "education",
    title: "Education",
    icon: BookOpen,
    description: "Industry-aligned learning programs, workshops, and certifications that prepare students for real careers.",
    features: ["Guest Lectures", "Skill Workshops", "Certification Programs"],
    gradient: "bg-gradient-education",
    lightBg: "bg-education-light",
    iconColor: "text-education",
    borderColor: "border-education/30",
  },
  {
    id: "enhancement",
    title: "Enhancement",
    icon: Sparkles,
    description: "Career development through internships, projects, and mentorship that build professional experience.",
    features: ["Internships", "Live Projects", "Mentorship"],
    gradient: "bg-gradient-enhancement",
    lightBg: "bg-enhancement-light",
    iconColor: "text-enhancement",
    borderColor: "border-enhancement/30",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    icon: Gamepad2,
    description: "Engaging campus experiences through events, competitions, and activations that energize communities.",
    features: ["Campus Events", "Competitions", "Brand Activations"],
    gradient: "bg-gradient-entertainment",
    lightBg: "bg-entertainment-light",
    iconColor: "text-entertainment",
    borderColor: "border-entertainment/30",
  },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            The 3E Framework
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            One Ecosystem, Three Pillars
          </h2>
          <p className="text-lg text-muted-foreground">
            INGLU connects every stakeholder through a unified approach that delivers value at every touchpoint.
          </p>
        </div>

        {/* Ecosystem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ecosystemItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl border ${item.borderColor} ${item.lightBg} p-8 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className={`absolute top-8 right-8 ${item.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Connector */}
        <div className="hidden md:block mt-16">
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-20 bg-gradient-education rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="h-1 w-20 bg-gradient-enhancement rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="h-1 w-20 bg-gradient-entertainment rounded-full" />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Seamlessly integrated for maximum impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
