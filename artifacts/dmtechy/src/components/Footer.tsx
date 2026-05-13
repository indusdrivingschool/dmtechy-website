import { Link } from "wouter";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="text-3xl font-black tracking-tighter text-white cursor-pointer mb-6 block">
                DMTECHY.
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premium global digital agency building powerful, high-converting digital experiences for businesses worldwide. Elevating brands to the next level.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                <SiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                <SiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-wide uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">About Us</span></Link></li>
              <li><Link href="/services"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Our Services</span></Link></li>
              <li><Link href="/portfolio"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Portfolio</span></Link></li>
              <li><Link href="/testimonials"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Testimonials</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-wide uppercase mb-6">Key Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Website Development</span></Link></li>
              <li><Link href="/services"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Ecommerce Solutions</span></Link></li>
              <li><Link href="/services"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Digital Marketing</span></Link></li>
              <li><Link href="/services"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">SEO Optimization</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-wide uppercase mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-gray-400"><span className="text-white block mb-1">Email</span> info@dmtechy.com</li>
              <li className="text-gray-400"><span className="text-white block mb-1">Phone / WhatsApp</span> +92 318 0245187</li>
              <li className="text-gray-400"><span className="text-white block mb-1">Global Headquarters</span> Serving businesses worldwide</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DMTECHY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy"><span className="text-gray-500 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</span></Link>
            <Link href="/terms"><span className="text-gray-500 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
