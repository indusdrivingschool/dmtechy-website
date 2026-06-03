import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import bannerImg from "@/assets/dmtechy-banner.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Globe, Layers, Zap, ShoppingCart, Search, Palette, MessageCircle, Star } from "lucide-react";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end]);
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-5xl font-black text-white mb-2">{count}{suffix}</span>
      <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}

const recentProjects = [
  { emoji: "🛒", title: "Shopify Fashion Store", cat: "Ecommerce", result: "+62% sales" },
  { emoji: "🏢", title: "Law Firm Website", cat: "Corporate Site", result: "3x leads" },
  { emoji: "📈", title: "SEO Campaign — UAE", cat: "SEO", result: "#1 Google" },
  { emoji: "🎨", title: "Beauty Brand Identity", cat: "Branding", result: "Full rebrand" },
  { emoji: "🌐", title: "SaaS Landing Page", cat: "Web Dev", result: "+40% signups" },
  { emoji: "📣", title: "Facebook Ads — UK", cat: "Paid Ads", result: "4x ROAS" },
];

const testimonials = [
  { name: "Sarah J.", country: "🇺🇸 USA", text: "Our Shopify store revenue jumped 62% in 60 days. Incredible team.", stars: 5 },
  { name: "Ahmed K.", country: "🇦🇪 UAE", text: "Ranked #1 on Google in 3 months. Best SEO investment ever.", stars: 5 },
  { name: "Priya M.", country: "🇬🇧 UK", text: "Facebook ads gave us 4x return. Professional and fast.", stars: 5 },
  { name: "James T.", country: "🇨🇦 Canada", text: "Website looks world-class. Clients trust us more now.", stars: 5 },
];

export default function Home() {
  useSEO(
    "DMTECHY — Tech, Coding & Digital Solutions",
    "DMTECHY is a global digital agency. Web development, ecommerce, digital marketing, SEO, branding and AI-powered solutions. Code. Create. Scale."
  );

  return (
    <div className="min-h-screen bg-black">

      {/* WhatsApp Floating Button */}
      
        href="https://wa.me/923180245187?text=Hi%20DMTECHY%2C%20I%20want%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-bold hidden md:block">Chat on WhatsApp</span>
      </a>

      {/* Hero */}
      <section className="relative w-full pt-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <img src={bannerImg} alt="DMTECHY — Code. Create. Scale." className="w-full h-auto block" />
          <div className="absolute top-6 left-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-xs font-medium text-white tracking-wide">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Accepting New Projects
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative bg-black z-20 -mt-1"
        >
          <div className="container mx-auto px-4 md:px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border border-white/10 rounded-2xl bg-white/[0.03] px-8 py-8">
              {[
                { end: 750, suffix: "+", label: "Projects Delivered" },
                { end: 420, suffix: "+", label: "Happy Clients" },
                { end: 15,  suffix: "+", label: "Countries Served" },
                { end: 99,  suffix: "%", label: "Satisfaction Rate" },
              ].map((s, i) => (
                <Counter key={i} end={s.end} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm font-medium uppercase tracking-widest">
            {["Shopify Partners", "React & Next.js", "Google SEO Certified", "Facebook Ads Pro", "Global Clients", "5★ Rated Agency"].map((t, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Poster Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Our Services.</h2>
            </div>
            <Link href="/services">
              <button className="text-white flex items-center gap-2 hover:gap-4 transition-all font-medium uppercase tracking-wide text-sm">
                See All & Pricing <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: "🌐", title: "Website Dev", color: "from-blue-500/20 to-blue-600/5 border-blue-500/20" },
              { emoji: "🛒", title: "Shopify Store", color: "from-orange-500/20 to-orange-600/5 border-orange-500/20" },
              { emoji: "📈", title: "Digital Marketing", color: "from-purple-500/20 to-purple-600/5 border-purple-500/20" },
              { emoji: "🔍", title: "SEO", color: "from-green-500/20 to-green-600/5 border-green-500/20" },
              { emoji: "🎨", title: "Branding", color: "from-pink-500/20 to-pink-600/5 border-pink-500/20" },
              { emoji: "📣", title: "Facebook Ads", color: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20" },
            ].map((s, i) => (
              <Link href="/services" key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className={`bg-gradient-to-br ${s.color} border rounded-2xl p-5 flex flex-col items-center text-center gap-3 cursor-pointer hover:border-white/30 transition-all`}
                >
                  <span className="text-4xl">{s.emoji}</span>
                  <span className="text-white font-bold text-sm leading-tight">{s.title}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-3">Proof of Work</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Recent Projects.</h2>
            </div>
            <Link href="/portfolio">
              <button className="text-white flex items-center gap-2 hover:gap-4 transition-all font-medium uppercase tracking-wide text-sm">
                View Portfolio <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentProjects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <span className="text-4xl shrink-0">{p.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-bold text-base truncate">{p.title}</h4>
                  <p className="text-gray-500 text-sm">{p.cat}</p>
                </div>
                <span className="text-green-400 font-black text-sm shrink-0">{p.result}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-3">Client Reviews</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">What Clients Say.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.country}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials">
              <button className="text-gray-400 hover:text-white text-sm flex items-center gap-2 mx-auto transition-colors">
                Read All Reviews <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Why Partner With DMTECHY?</h2>
              <p className="text-gray-400 text-lg mb-8">We don't just execute tasks — we partner with you to deliver solutions that drive real impact.</p>
              <div className="space-y-6">
                {[
                  "750+ projects delivered across 15+ countries",
                  "Data-driven approach to design and marketing",
                  "Uncompromising commitment to quality and performance",
                  "Transparent communication and dedicated support",
                  "Shopify, React, SEO & Ads experts under one roof",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85&auto=format&fit=crop"
                alt="DMTECHY team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80",
                    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&q=80",
                  ].map((src, i) => (
                    <img key={i} src={src} alt="client" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
                  ))}
                </div>
                <div>
                  <p className="text-white text-xs font-bold">420+ Happy Clients</p>
                  <p className="text-yellow-400 text-xs">★★★★★ 5.0 Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "How long does it take to build a website?", a: "A typical corporate website takes 4–6 weeks. Ecommerce or custom web apps may take 8–12 weeks depending on scope." },
              { q: "Do you work with international clients?", a: "Yes — we serve clients across 15+ countries. We work across all time zones with clear, fast communication." },
              { q: "What is your pricing structure?", a: "Project-based pricing depending on scope. We have packages starting from $199. Visit our Services page for full pricing." },
              { q: "Do you provide ongoing support after launch?", a: "Absolutely. We offer monthly support and maintenance packages to keep your site fast, secure, and updated." },
              { q: "Can you help with Shopify stores?", a: "Yes — Shopify setup, custom themes, product listings, payment gateways, and marketing are all services we offer." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10">
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-gray-300 py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Ready to grow your business?</h2>
          <p className="text-xl text-gray-600 mb-4">Join 420+ businesses worldwide that trust DMTECHY.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact">
              <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-900 transition-colors inline-flex items-center gap-2 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
              href="https://wa.me/923180245187?text=Hi%20DMTECHY%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-green-400 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
