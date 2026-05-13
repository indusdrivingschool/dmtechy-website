import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, Globe, Layers, Zap } from "lucide-react";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
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

export default function Home() {
  useSEO("Home");

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
          <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vh] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vh] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-8 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Accepting New Projects
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.1] tracking-tight">
              We Build Powerful <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Digital Experiences.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Professional Web Development & Digital Marketing Solutions for Businesses Worldwide. We transform complex challenges into elegant, high-converting digital realities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-full text-base font-bold hover:bg-white/5 transition-colors flex items-center justify-center">
                  View Our Work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <Counter end={500} suffix="+" label="Projects" />
            <Counter end={300} suffix="+" label="Clients" />
            <Counter end={5} suffix="+" label="Years Experience" />
            <Counter end={99} suffix="%" label="Satisfaction" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Capabilities.</h2>
              <p className="text-gray-400 text-lg">Comprehensive digital solutions designed to scale your business and dominate your market.</p>
            </div>
            <Link href="/services">
              <button className="text-white flex items-center gap-2 hover:gap-4 transition-all font-medium uppercase tracking-wide text-sm">
                View All Services <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Web Development", desc: "Custom, high-performance websites built with modern technologies." },
              { icon: Layers, title: "Digital Marketing", desc: "Data-driven marketing strategies that deliver measurable ROI." },
              { icon: Zap, title: "Ecommerce Solutions", desc: "Scalable online stores engineered for maximum conversion." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <service.icon className="w-12 h-12 text-white mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Why Partner With DMTECHY?</h2>
              <p className="text-gray-400 text-lg mb-8">We don't just execute tasks; we partner with you to understand your business goals and deliver solutions that drive real impact.</p>
              
              <div className="space-y-6">
                {[
                  "Global expertise with localized understanding",
                  "Data-driven approach to design and marketing",
                  "Uncompromising commitment to quality and performance",
                  "Transparent communication and dedicated project management"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                <span className="font-serif text-6xl md:text-8xl font-bold italic opacity-20">DMTECHY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "How long does it take to build a website?", a: "A typical corporate website takes 4-6 weeks from discovery to launch. Complex ecommerce solutions or custom web applications may take 8-12 weeks depending on the scope and requirements." },
              { q: "Do you work with international clients?", a: "Yes, we partner with businesses worldwide. Our team is accustomed to working across different time zones and delivering seamless communication regardless of location." },
              { q: "What is your pricing structure?", a: "Our pricing is project-based and depends entirely on the scope, complexity, and specific requirements of your needs. We provide detailed, transparent proposals after our initial discovery call." },
              { q: "Do you provide ongoing support after launch?", a: "Absolutely. We offer various maintenance and support packages to ensure your digital assets remain secure, up-to-date, and optimized for performance long after the initial launch." }
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

      {/* Newsletter / CTA */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Ready to elevate your digital presence?</h2>
          <p className="text-xl text-gray-600 mb-10">Let's discuss how DMTECHY can transform your business with world-class digital solutions.</p>
          <Link href="/contact">
            <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-900 transition-colors inline-flex items-center gap-2 group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
