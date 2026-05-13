import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Shield } from "lucide-react";

export default function About() {
  useSEO("About Us");

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
          >
            We architect the digital future.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 leading-relaxed"
          >
            DMTECHY is a premium global digital agency. We combine strategic thinking, technical excellence, and striking design to build powerful digital experiences that elevate brands and drive measurable growth.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {[
            { icon: Target, title: "Precision", desc: "Every pixel, every line of code, every marketing campaign is executed with absolute intentionality. We don't believe in 'good enough'." },
            { icon: Rocket, title: "Innovation", desc: "We stay ahead of the curve, leveraging the latest technologies and methodologies to give our clients an unfair advantage." },
            { icon: Users, title: "Partnership", desc: "We are an extension of your team. Your goals become our goals. We communicate transparently and celebrate wins together." },
            { icon: Shield, title: "Integrity", desc: "We build digital assets that stand the test of time. Secure, scalable, and built on rock-solid architectural foundations." }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl"
            >
              <value.icon className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto text-center border-t border-white/10 pt-24">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Our Mission</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            To empower forward-thinking businesses with world-class digital solutions. In a crowded digital landscape, we ensure our clients don't just compete—they dominate. From stunning web platforms to high-ROI marketing campaigns, DMTECHY is the catalyst for your digital transformation.
          </p>
        </div>
      </div>
    </div>
  );
}
