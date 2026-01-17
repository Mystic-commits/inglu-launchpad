const logos = [
  { name: "Microsoft", width: "w-24" },
  { name: "Google", width: "w-20" },
  { name: "Amazon", width: "w-20" },
  { name: "Flipkart", width: "w-20" },
  { name: "Zomato", width: "w-20" },
  { name: "Swiggy", width: "w-16" },
  { name: "Paytm", width: "w-16" },
  { name: "BYJU'S", width: "w-16" },
  { name: "Reliance", width: "w-20" },
  { name: "TCS", width: "w-12" },
];

const LogoTicker = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      {/* Ticker */}
      <div className="flex animate-ticker">
        {/* First set */}
        <div className="flex items-center gap-12 px-6 shrink-0">
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className={`${logo.width} h-8 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
            >
              <span className="font-semibold text-foreground text-sm whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-12 px-6 shrink-0">
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className={`${logo.width} h-8 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
            >
              <span className="font-semibold text-foreground text-sm whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
