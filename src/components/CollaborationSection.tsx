import { Building2, Users, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "colleges", label: "For Colleges", icon: GraduationCap },
  { id: "brands", label: "For Brands", icon: Building2 },
];

const collegeFeatures = [
  {
    title: "Industry Exposure",
    description: "Connect your students with top brands and industry leaders through workshops, guest lectures, and live projects.",
  },
  {
    title: "Enhanced Placements",
    description: "Improve placement statistics with direct brand partnerships and internship pipelines.",
  },
  {
    title: "Sponsored Events",
    description: "Host fully-funded campus events, hackathons, and cultural fests with brand support.",
  },
  {
    title: "Zero Cost Programs",
    description: "Access skill development programs and certifications at no cost to your institution.",
  },
];

const brandFeatures = [
  {
    title: "Campus Reach at Scale",
    description: "Access 500+ verified colleges and 5M+ students across India through a single platform.",
  },
  {
    title: "Talent Pipeline",
    description: "Build early relationships with future talent through internships, projects, and campus hiring.",
  },
  {
    title: "Brand Activations",
    description: "Execute impactful campus marketing campaigns with measurable ROI and engagement metrics.",
  },
  {
    title: "Data-Driven Insights",
    description: "Track engagement, conversions, and brand sentiment across your campus initiatives.",
  },
];

const CollaborationSection = () => {
  const [activeTab, setActiveTab] = useState("colleges");

  const features = activeTab === "colleges" ? collegeFeatures : brandFeatures;
  const accentColor = activeTab === "colleges" ? "education" : "enhancement";

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-foreground mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4"
          >
            Built for everyone
            <br />
            <span className="text-muted-foreground">in the ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Whether you're a college looking to enhance student outcomes or a brand seeking campus presence, INGLU has you covered.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 rounded-xl bg-secondary">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200",
                    activeTab === tab.id
                      ? "bg-background text-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className={cn(
                  "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5",
                  activeTab === "colleges" ? "bg-education/10" : "bg-enhancement/10"
                )}>
                  <CheckCircle2 className={cn(
                    "w-4 h-4",
                    activeTab === "colleges" ? "text-education" : "text-enhancement"
                  )} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual/Stats */}
          <motion.div 
            key={`visual-${activeTab}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "rounded-2xl p-8 lg:p-12",
              activeTab === "colleges" ? "bg-education/5 border border-education/10" : "bg-enhancement/5 border border-enhancement/10"
            )}
          >
            <div className="grid grid-cols-2 gap-8">
              {(activeTab === "colleges" 
                ? [
                    { value: "500+", label: "Partner Colleges" },
                    { value: "100%", label: "Free Programs" },
                    { value: "50+", label: "Industry Partners" },
                    { value: "5M+", label: "Students Reached" },
                  ]
                : [
                    { value: "5M+", label: "Student Reach" },
                    { value: "500+", label: "Campus Network" },
                    { value: "85%", label: "Engagement Rate" },
                    { value: "3x", label: "Better ROI" },
                  ]
              ).map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={cn(
                    "text-3xl lg:text-4xl font-extrabold mb-1",
                    activeTab === "colleges" ? "text-education" : "text-enhancement"
                  )}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Students callout */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex items-center justify-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                    >
                      <Users className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Join <strong className="text-foreground">500+ institutions</strong> already on INGLU
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
