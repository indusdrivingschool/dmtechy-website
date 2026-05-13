import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import {
  Code2, ShoppingCart, TrendingUp, Search, PenTool, LayoutDashboard,
  Rocket, Megaphone, Palette, Headphones, FileText, Gauge, RefreshCw, Instagram
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Custom, high-performance websites built with React, Next.js, and modern technologies tailored to your brand.",
    price: "$299",
    tag: "Most Popular",
  },
  {
    icon: LayoutDashboard,
    title: "Business Websites",
    desc: "Professional corporate identities that establish trust, authority, and convert visitors into clients.",
    price: "$199",
    tag: null,
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Store Development",
    desc: "Scalable online stores engineered for maximum conversion with seamless checkout experiences.",
    price: "$499",
    tag: "Best Value",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Store Setup",
    desc: "Premium Shopify themes, product listings, payment gateways, and custom integrations for modern retail.",
    price: "$299",
    tag: null,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Data-driven strategies across multiple channels that deliver measurable ROI and sustainable growth.",
    price: "$199/mo",
    tag: null,
  },
  {
    icon: Megaphone,
    title: "Facebook Advertising",
    desc: "Laser-targeted ad campaigns that reach your ideal customers and maximize return on ad spend.",
    price: "$149/mo",
    tag: null,
  },
  {
    icon: Instagram,
    title: "Social Media Marketing",
    desc: "Engaging content strategies, community management, and posting schedules that build brand loyalty.",
    price: "$199/mo",
    tag: null,
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Advanced on-page & off-page SEO strategies to dominate search rankings and drive organic traffic.",
    price: "$249/mo",
    tag: "High ROI",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    desc: "Stunning visual assets — social posts, banners, flyers — that communicate your brand's essence.",
    price: "$49",
    tag: null,
  },
  {
    icon: Palette,
    title: "Branding",
    desc: "Cohesive brand identities: logo, color systems, typography, and brand guidelines that leave a lasting impression.",
    price: "$199",
    tag: null,
  },
  {
    icon: Headphones,
    title: "Virtual Assistance",
    desc: "Professional administrative support — inbox management, scheduling, data entry — to scale your operations.",
    price: "$99/mo",
    tag: null,
  },
  {
    icon: FileText,
    title: "Landing Pages",
    desc: "High-converting funnels designed to capture leads and drive sales with compelling copy and design.",
    price: "$149",
    tag: null,
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Modernize your outdated digital presence with a fresh, conversion-focused design that impresses visitors.",
    price: "$299",
    tag: null,
  },
  {
    icon: Gauge,
    title: "Website Speed Optimization",
    desc: "Performance audits and tuning for lightning-fast load times that boost SEO rankings and user satisfaction.",
    price: "$99",
    tag: null,
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
    desc: "Full-service solution for serious brands ready to dominate their market.",
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

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
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
              whileHover={{ y: -6 }}
              data-testid={`service-card-${index}`}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/25 transition-all cursor-pointer flex flex-col"
            >
              {/* Tag badge */}
              {service.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-white text-black px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform shrink-0">
                <service.icon size={24} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm flex-1">{service.desc}</p>

              {/* Footer row */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-0.5">Starting from</span>
                  <span className="text-2xl font-black text-white">{service.price}</span>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 group-hover:bg-white group-hover:text-black px-4 py-2 rounded-full transition-colors">
                  Get Quote
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
              data-testid={`package-card-${i}`}
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

              <a
                href={buildWALink(pkg.name + " Package")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`package-cta-${i}`}
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

        {/* Custom quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Need a custom solution? We'll build exactly what you need.</p>
          <a
            href="https://wa.me/923180245187?text=Hi%20DMTECHY%2C%20I%20need%20a%20custom%20quote%20for%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-custom-quote"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all"
          >
            Request Custom Quote
          </a>
        </motion.div>

      </div>
    </div>
  );
}
