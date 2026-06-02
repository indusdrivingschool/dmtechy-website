import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import {
  Code2, ShoppingCart, TrendingUp, Search, PenTool, LayoutDashboard,
  Rocket, Megaphone, Palette, Headphones, FileText, Gauge, RefreshCw, Instagram
} from "lucide-react";

const services = [
  {
    icon: Code2,
    emoji: "🌐",
    title: "Website Development",
    tagline: "Fast. Modern. Custom.",
    desc: "React & Next.js websites built for performance and conversions.",
    price: "$299",
    tag: "Most Popular",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
  },
  {
    icon: LayoutDashboard,
    emoji: "🏢",
    title: "Business Website",
    tagline: "Professional & Trustworthy.",
    desc: "Corporate sites that establish authority and convert visitors.",
    price: "$199",
    tag: null,
    color: "from-slate-500/20 to-slate-600/5",
    border: "border-slate-500/20",
  },
  {
    icon: ShoppingCart,
    emoji: "🛒",
    title: "Ecommerce Store",
    tagline: "Sell More. Every Day.",
    desc: "Scalable online stores engineered for maximum conversions.",
    price: "$499",
    tag: "Best Value",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
  },
  {
    icon: ShoppingCart,
    emoji: "🟢",
    title: "Shopify Store Setup",
    tagline: "Launch in Days.",
    desc: "Premium themes, products, payments & custom integrations.",
    price: "$299",
    tag: null,
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/20",
  },
  {
    icon: TrendingUp,
    emoji: "📈",
    title: "Digital Marketing",
    tagline: "Grow. Scale. Dominate.",
    desc: "Multi-channel strategies that deliver real, measurable ROI.",
    price: "$199/mo",
    tag: null,
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
  },
  {
    icon: Megaphone,
    emoji: "📣",
    title: "Facebook Advertising",
    tagline: "Target. Convert. Profit.",
    desc: "Laser-targeted ads that reach your ideal customers.",
    price: "$149/mo",
    tag: null,
    color: "from-blue-600/20 to-blue-700/5",
    border: "border-blue-600/20",
  },
  {
    icon: Instagram,
    emoji: "📸",
    title: "Social Media Marketing",
    tagline: "Build. Engage. Grow.",
    desc: "Content strategies and community management that build loyalty.",
    price: "$199/mo",
    tag: null,
    color: "from-pink-500/20 to-pink-600/5",
    border: "border-pink-500/20",
  },
  {
    icon: Search,
    emoji: "🔍",
    title: "SEO Optimization",
    tagline: "Rank #1 on Google.",
    desc: "Advanced on-page & off-page SEO to dominate search rankings.",
    price: "$249/mo",
    tag: "High ROI",
    color: "from-yellow-500/20 to-yellow-600/5",
    border: "border-yellow-500/20",
  },
  {
    icon: PenTool,
    emoji: "🎨",
    title: "Graphic Design",
    tagline: "Look Premium Always.",
    desc: "Stunning social posts, banners and flyers for your brand.",
    price: "$79",
    tag: null,
    color: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/20",
  },
  {
    icon: Palette,
    emoji: "✨",
    title: "Branding",
    tagline: "Stand Out Forever.",
    desc: "Logo, colors, typography & brand guidelines that impress.",
    price: "$199",
    tag: null,
    color: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/20",
  },
  {
    icon: Headphones,
    emoji: "🎧",
    title: "Virtual Assistance",
    tagline: "Focus on What Matters.",
    desc: "Professional admin support to scale your operations.",
    price: "$99/mo",
    tag: null,
    color: "from-teal-500/20 to-teal-600/5",
    border: "border-teal-500/20",
  },
  {
    icon: FileText,
    emoji: "🚀",
    title: "Landing Pages",
    tagline: "Click. Convert. Win.",
    desc: "High-converting funnels designed to capture leads and sales.",
    price: "$149",
    tag: null,
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
  },
  {
    icon: RefreshCw,
    emoji: "🔄",
    title: "Website Redesign",
    tagline: "Fresh Look. More Sales.",
    desc: "Modernize your outdated site with a conversion-focused design.",
    price: "$299",
    tag: null,
    color: "from-indigo-500/20 to-indigo-600/5",
    border: "border-indigo-500/20",
  },
  {
    icon: Gauge,
    emoji: "⚡",
    title: "Speed Optimization",
    tagline: "Lightning Fast Results.",
    desc: "Performance tuning for fast load times that boost SEO.",
    price: "$149",
    tag: null,
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/20",
  },
];

const packages = [
  {
    name: "Starter",
    price: "$199",
    period: "one-time",
    desc: "Perfect for individuals and small businesses getting started online.",
    features: [
      "Business Website (up to 5 pages)",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Free Support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$499",
    period: "one-time",
    desc: "For growing businesses that need a powerful online presence.",
    features: [
      "Custom Website (up to 10 pages)",
      "Ecommerce / Shopify Setup",
      "Advanced SEO Optimization",
      "Social Media Integration",
      "Speed Optimization",
      "3 Months Free Support",
      "Google Analytics Setup",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Premium",
    price: "$999",
    period: "one-time",
    desc: "Full-service solution for serious brands ready to dominate.",
    features: [
      "Full Custom Website / Web App",
      "Branding & Identity Package",
      "Digital Marketing Strategy",
      "Facebook & Instagram Ads Setup",
      "Full SEO Campaign",
      "6 Months Priority Support",
      "Monthly Performance Reports",
      "Dedicated Account Manager",
    ],
    cta: "Go Premium",
    highlight: false,
  },
];

function buildWALink(service: string) {
  const msg = encodeURIComponent(`Hi DMTECHY, I'm interested in your ${service} service. Please share more details.`);
  return `https://wa.me/923180245187?text=${msg}`;
}

export default function Services() {
  useSEO("Our Services");

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Digital Capabilities.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            We don't just build websites — we engineer digital ecosystems that drive real, measurable growth.
          </motion.p>
        </div>

        {/* Service Cards — Poster Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-32">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={buildWALink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative bg-gradient-to-br ${service.color} border ${service.border} p-6 rounded-2xl hover:border-white/30 transition-all cursor-pointer flex flex-col items-start gap-3`}
            >
              {/* Tag */}
              {service.tag && (
                <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-widest bg-white text-black px-2 py-0.5 rounded-full">
                  {service.tag}
                </span>
              )}

              {/* Big Emoji Icon */}
              <div className="text-4xl mb-1">{service.emoji}</div>

              {/* Title */}
              <h3 className="text-white font-bold text-base leading-tight">{service.title}</h3>

              {/* Tagline — bold one liner */}
              <p className="text-white/70 text-xs font-semibold uppercase tracking-wide">{service.tagline}</p>

              {/* Price */}
              <div className="mt-auto pt-4 w-full border-t border-white/10 flex items-center justify-between">
                <span className="text-white font-black text-xl">{service.price}</span>
                <span className="text-[11px] text-white/50 group-hover:text-white transition-colors font-semibold">
                  Tap to order →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Pricing Packages */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-4"
          >
            Transparent Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Choose Your Package.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            No hidden fees. No surprises. Just premium quality at honest prices.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                pkg.highlight
                  ? "bg-white text-black"
                  : "bg-white/5 border border-white/10 text-white"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-white/20">
                  Most Popular
                </span>
              )}

              <h3 className={`text-lg font-bold uppercase tracking-widest mb-1 ${pkg.highlight ? "text-black" : "text-white"}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-6 ${pkg.highlight ? "text-gray-600" : "text-gray-400"}`}>
                {pkg.desc}
              </p>

              <div className="mb-8">
                <span className={`text-5xl font-black ${pkg.highlight ? "text-black" : "text-white"}`}>
                  {pkg.price}
                </span>
                <span className={`text-sm ml-2 ${pkg.highlight ? "text-gray-500" : "text-gray-500"}`}>
                  {pkg.period}
                </span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${pkg.highlight ? "bg-black text-white" : "bg-white text-black"}`}>
                      ✓
                    </span>
                    <span className={pkg.highlight ? "text-gray-700" : "text-gray-300"}>{f}</span>
                  </li>
                ))}
              </ul>

              
                href={buildWALink(pkg.name + " Package")}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-4 rounded-xl font-bold text-sm tracking-wide transition-all ${
                  pkg.highlight
                    ? "bg-black text-white hover:bg-gray-900"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Need a custom solution? We'll build exactly what you need.</p>
          
            href="https://wa.me/923180245187?text=Hi%20DMTECHY%2C%20I%20need%20a%20custom%20quote%20for%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all"
          >
            Request Custom Quote
          </a>
        </motion.div>

      </div>
    </div>
  );
}
