import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-entertainment flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">I</span>
              </div>
              <span className="font-display font-bold text-xl">INGLU</span>
            </div>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Bridging campuses and industry through the 3E Ecosystem.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label={`Follow on ${Icon.name}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-display font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {["Education", "Enhancement", "Entertainment", "For Colleges", "For Brands"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Contact", "Press Kit"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} INGLU Global. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Made with ❤️ for students everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
