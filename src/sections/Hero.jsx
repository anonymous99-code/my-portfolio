import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0"
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Full-Stack
            <br />
            <span className="text-white/30">Developer</span>
            <br />
            <span className="bg-gradient-to-r from-white via-white to-emerald-200/80 bg-clip-text text-transparent">
              & Cybersecurity
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg"
          >
            I build modern, scalable web applications and practical
            cybersecurity solutions. Turning ideas into functional digital
            products through code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href="#projects">
              View My Work
              <ArrowUpRight size={17} className="ml-2" />
            </Button>

            <Button href="#contact" variant="secondary">
              Let's Talk
            </Button>
          </motion.div>
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-0 hidden w-full items-end justify-end md:flex"
        >
          <a
            href="#about"
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/30 transition hover:text-white"
          >
            Scroll to explore
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:border-white/30">
              <ArrowDown size={15} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
