import { Link } from "wouter";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top grid: social + columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://www.facebook.com/dmtechy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
              <SiFacebook size={18} />
            </a>
            <a href="https://www.instagram.com/dmtechy_com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
              <SiInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/tara-e-7313a93a2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-wide uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">About Us</span></Link></li>
              <li><Link href="/services"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Our Services</span></Link></li>
              <li><Link href="/portfolio"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Portfolio</span></Link></li>
              <li><Link href="/testimonials"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Testimonials</span></Link></li>
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="text-white font-bold tracking-wide uppercase mb-6">Key Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Website Development</span></Link></li>
              <li><Link href="/services"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Ecommerce Solutions</span></Link></li>
              <li><Link href="/services"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Digital Marketing</span></Link></li>
              <li><Link href="/services"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">SEO Optimization</span></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold tracking-wide uppercase mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-gray-400"><span className="text-white block mb-1">Email</span> info@dmtechy.com</li>
              <li className="text-gray-400"><span className="text-white block mb-1">Phone / WhatsApp</span> +92 318 0245187</li>
              <li className="text-gray-400"><span className="text-white block mb-1">Global Headquarters</span> Serving businesses worldwide</li>
            </ul>
          </div>

        </div>{/* end grid */}

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DMTECHY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy"><span className="text-gray-500 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</span></Link>
            <Link href="/terms"><span className="text-gray-500 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</span></Link>
          </div>
        </div>

      </div>{/* end max-w wrapper */}
    </footer>
  );
}
