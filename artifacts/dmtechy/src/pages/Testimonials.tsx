import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, Aura Luxury",
    content: "DMTECHY transformed our brand's digital presence. Their attention to detail and understanding of luxury aesthetics resulted in an ecommerce platform that immediately increased our conversion rate by 40%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, FinTech Pro",
    content: "We needed a team that could handle complex data architecture while delivering a flawless user experience. DMTECHY delivered beyond our expectations. They are true technical partners.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director, Nova Group",
    content: "Their digital marketing strategies are unparalleled. Within three months of taking over our SEO and paid campaigns, our qualified lead volume doubled. Highly recommended.",
    rating: 5
  },
  {
    name: "David Smith",
    role: "Operations Manager, Echo Systems",
    content: "Professional, responsive, and incredibly talented. The redesign they executed for our SaaS platform was met with unanimous praise from our enterprise clients.",
    rating: 5
  },
  {
    name: "Jessica Taylor",
    role: "Owner, Lumina Beauty",
    content: "From the initial branding concepts to the final Shopify launch, the process was seamless. They truly understood our vision and brought it to life beautifully.",
    rating: 5
  },
  {
    name: "Robert Fox",
    role: "Director, Velocity Motors",
    content: "The landing pages they built for our Q4 campaign were the highest converting assets we've ever had. Fast, communicative, and exceptionally skilled.",
    rating: 5
  }
];

export default function Testimonials() {
  useSEO("Testimonials");

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Client Success.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Don't just take our word for it. Hear what industry leaders have to say about partnering with DMTECHY.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-bold text-white text-lg">{t.name}</h4>
                <p className="text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
