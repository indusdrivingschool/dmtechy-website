import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  useSEO("Contact Us");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again or email us directly.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error sending message",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Let's Talk.</h1>
              <p className="text-xl text-gray-400 max-w-md">
                Ready to transform your digital presence? Reach out to us today to discuss your next big project.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Phone / WhatsApp</h4>
                  <a href="https://wa.me/923180245187" className="text-gray-400 hover:text-white transition-colors text-lg">
                    +92 318 0245187
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                  <a href="mailto:info@dmtechy.com" className="text-gray-400 hover:text-white transition-colors text-lg">
                    info@dmtechy.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Global Reach</h4>
                  <p className="text-gray-400 text-lg">
                    Serving businesses worldwide with premier digital solutions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/dmtechy/" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                  <SiFacebook size={20} />
                </a>
                <a href="https://www.instagram.com/dmtechy_com/" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                  <SiInstagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/tara-e-7313a93a2/" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-black/50 border-white/10 focus-visible:ring-white/30 text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="bg-black/50 border-white/10 focus-visible:ring-white/30 text-white" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 234 567 8900" className="bg-black/50 border-white/10 focus-visible:ring-white/30 text-white" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Service Dropdown */}
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Service Interested In</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
                        >
                          <option value="" disabled className="bg-black">Select a service...</option>
                          <option value="Website Development" className="bg-black">Website Development</option>
                          <option value="Shopify / Ecommerce" className="bg-black">Shopify / Ecommerce</option>
                          <option value="Digital Marketing" className="bg-black">Digital Marketing</option>
                          <option value="SEO Optimization" className="bg-black">SEO Optimization</option>
                          <option value="Branding & Design" className="bg-black">Branding & Design</option>
                          <option value="AI-Powered Solutions" className="bg-black">AI-Powered Solutions</option>
                          <option value="Other" className="bg-black">Other</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Budget Dropdown */}
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Budget Range</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
                        >
                          <option value="" disabled className="bg-black">Select your budget...</option>
                          <option value="Under $500" className="bg-black">Under $500</option>
                          <option value="$500 - $1,000" className="bg-black">$500 - $1,000</option>
                          <option value="$1,000 - $3,000" className="bg-black">$1,000 - $3,000</option>
                          <option value="$3,000 - $5,000" className="bg-black">$3,000 - $5,000</option>
                          <option value="$5,000+" className="bg-black">$5,000+</option>
                          <option value="Not sure yet" className="bg-black">Not sure yet</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Project Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                          className="min-h-[150px] bg-black/50 border-white/10 focus-visible:ring-white/30 text-white resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button type="submit" className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors">
                  Submit Inquiry
                </button>

              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
