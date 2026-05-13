import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Testimonials", path: "/testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-black tracking-tighter text-white cursor-pointer hover:text-gray-300 transition-colors">
              DMTECHY.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`text-sm font-medium tracking-wide uppercase cursor-pointer transition-colors hover:text-white ${
                    location === link.path ? "text-white" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-gray-200 transition-transform active:scale-95">
                Start a Project
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center justify-center gap-8 z-40"
          >
            {links.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold tracking-wider uppercase cursor-pointer transition-colors ${
                    location === link.path ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-white text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors"
              >
                Start a Project
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
