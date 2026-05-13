import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aura Luxury",
    category: "Ecommerce / Branding",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    desc: "A high-end ecommerce experience for a bespoke fashion brand."
  },
  {
    title: "FinTech Pro",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    desc: "A sleek, secure, and lightning-fast dashboard for financial analytics."
  },
  {
    title: "Nova Real Estate",
    category: "Corporate Website",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    desc: "An immersive property showcase platform with virtual tours."
  },
  {
    title: "Lumina Beauty",
    category: "Shopify / Marketing",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200",
    desc: "A complete brand overhaul and scalable Shopify implementation."
  },
  {
    title: "Echo Systems",
    category: "B2B SaaS / UI UX",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    desc: "Redesigning complex data systems into intuitive user interfaces."
  },
  {
    title: "Velocity Motors",
    category: "Landing Page / SEO",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200",
    desc: "A high-converting promotional funnel for a luxury automotive campaign."
  }
];

export default function Portfolio() {
  useSEO("Portfolio");

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Selected Works.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            A showcase of digital excellence. We don't build templates; we craft bespoke solutions that define industry standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (i % 2) * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white/5">
                {/* Fallback pattern if image fails */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250px_250px] animate-[shimmer_2s_infinite_linear]" />
                
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.desc}</p>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500 py-1 px-3 border border-white/10 rounded-full">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
