import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";

export default function Privacy() {
  useSEO("Privacy Policy");

  return (
    <div className="min-h-screen pt-32 pb-24 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 prose prose-invert max-w-none"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>At DMTECHY, we take your privacy seriously. We collect information you provide directly to us when you fill out a form, request a quote, or communicate with us via email or WhatsApp.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-4">
              Email: info@dmtechy.com<br />
              WhatsApp: +92 318 0245187
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
