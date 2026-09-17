import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  FolderGit2,
  Globe,
  Loader2,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "jamesarthur1x@gmail.com",
    href: "mailto:jamesarthur1x@gmail.com",
  },
  {
    icon: FolderGit2,
    label: "GitHub",
    value: "github.com/anonymous99-code",
    href: "https://github.com/anonymous99-code",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="Have a project, opportunity, or idea you'd like to discuss? I'm always open to connecting and exploring what we can build together."
        />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm md:p-9"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
              <MessageCircle size={21} className="text-white/70" />
            </div>

            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">
              Have an idea?
            </h3>

            <p className="mt-2 max-w-lg text-sm leading-6 text-white/50">
              Send me a message below or reach out directly through social links.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center"
              >
                <CheckCircle2 size={40} className="text-emerald-400" />
                <h4 className="mt-4 text-lg font-medium text-white">
                  Message Sent!
                </h4>
                <p className="mt-1 text-sm text-white/50">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs text-white/50 underline underline-offset-4 transition-colors hover:text-white"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-semibold uppercase tracking-wider text-white/50"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-white/40 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-white/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-semibold uppercase tracking-wider text-white/50"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-white/40 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-white/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-semibold uppercase tracking-wider text-white/50"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-white/40 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-white/40"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Social Links Container */}
          <div className="grid gap-4">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
                      <Icon
                        size={18}
                        className="text-white/50 transition-colors group-hover:text-white"
                      />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
                        {link.label}
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                        {link.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;