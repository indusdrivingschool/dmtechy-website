import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import { Code, ShoppingCart, TrendingUp, Search, PenTool, LayoutDashboard, Rocket } from "lucide-react";

const services = [
  { icon: Code, title: "Website Development", desc: "Custom, high-performance websites built with modern technologies." },
  { icon: LayoutDashboard, title: "Business Websites", desc: "Professional corporate identities that establish trust and authority." },
  { icon: ShoppingCart, title: "Ecommerce Store Development", desc: "Scalable online stores engineered for maximum conversion." },
  { icon: ShoppingCart, title: "Shopify Store Setup", desc: "Premium Shopify themes and custom integrations for modern retail." },
  { icon: TrendingUp, title: "Digital Marketing", desc: "Data-driven marketing strategies that deliver measurable ROI." },
  { icon: TrendingUp, title: "Facebook Advertising", desc: "Targeted ad campaigns that reach your ideal customers." },
  { icon: Search, title: "Social Media Marketing", desc: "Engaging content strategies that build brand loyalty." },
  { icon: Search, title: "SEO Optimization", desc: "Advanced search engine strategies to dominate search results." },
  { icon: PenTool, title: "Graphic Design", desc: "Stunning visual assets that communicate your brand's essence." },
  { icon: PenTool, title: "Branding", desc: "Cohesive brand identities that leave a lasting impression." },
  { icon: Rocket, title: "Virtual Assistance", desc: "Professional administrative support to scale your operations." },
  { icon: LayoutDashboard, title: "Landing Pages", desc: "High-converting funnels designed to capture leads." },
  { icon: Code, title: "Website Redesign", desc: "Modernize your outdated digital presence." },
  { icon: Rocket, title: "Website Speed Optimization", desc: "Performance tuning for lightning-fast user experiences." },
];

export default function Services() {
  useSEO("Our Services");

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            We don't just build websites; we engineer digital ecosystems that drive unprecedented growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
