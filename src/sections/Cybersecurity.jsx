import { motion } from "framer-motion";
import {
  Bug,
  FileSearch,
  LockKeyhole,
  Network,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const securityAreas = [
  {
    icon: ShieldCheck,
    title: "Defensive Security",
    description:
      "Learning practical techniques for identifying vulnerabilities, analyzing suspicious activity, and improving application security.",
  },
  {
    icon: Bug,
    title: "Threat Detection",
    description:
      "Building tools that help identify phishing indicators, suspicious behavior, and potential security threats.",
  },
  {
    icon: Network,
    title: "Network Security",
    description:
      "Exploring networking concepts, traffic analysis, scanning, and defensive security practices.",
  },
  {
    icon: LockKeyhole,
    title: "Password Security",
    description:
      "Working with password-strength analysis and learning how authentication systems can be designed more securely.",
  },
  {
    icon: Terminal,
    title: "Security Tooling",
    description:
      "Developing Python-based command-line utilities to automate security-related analysis and tasks.",
  },
  {
    icon: FileSearch,
    title: "Log Analysis",
    description:
      "Analyzing application and system logs to identify patterns that may indicate suspicious or malicious activity.",
  },
];

const projects = [
  {
    name: "P-SED",
    description: "Phishing & Social Engineering Detector",
  },
  {
    name: "PassSentinel",
    description: "Password Strength & Security Tool",
  },
  {
    name: "Log Analyzer",
    description: "Log Analysis & Intrusion Detection",
  },
];

function Cybersecurity() {
  return (
    <section id="cybersecurity" className="relative overflow-hidden px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute right-[-150px] top-1/3 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Cybersecurity"
          title="Building with security in mind."
          description="Alongside full-stack development, I develop practical cybersecurity skills through hands-on projects, security tooling, and continuous learning."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10">
                  <Icon
                    size={19}
                    className="text-white/50 transition-colors group-hover:text-white"
                  />
                </div>

                <h3 className="text-base font-semibold">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          <div className="border-b border-white/10 px-6 py-5 md:px-8">
            <div className="flex items-center gap-3">
              <Terminal size={18} className="text-white/40" />

              <div>
                <h3 className="font-semibold">
                  Security Projects
                </h3>

                <p className="mt-1 text-xs text-white/30">
                  Practical projects I've worked on
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="flex flex-col gap-2 px-6 py-5 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between md:px-8"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-white/20">
                    0{index + 1}
                  </span>

                  <div>
                    <h4 className="text-sm font-medium">
                      {project.name}
                    </h4>

                    <p className="mt-1 text-xs text-white/30">
                      {project.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs uppercase tracking-[0.15em] text-white/20">
                  Python / Security
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <p className="text-sm leading-7 text-white/40">
            My approach to cybersecurity is centered around responsible,
            defensive learning — understanding how attacks work so that
            applications, systems, and users can be better protected.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cybersecurity;