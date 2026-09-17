import { motion } from "framer-motion";
import { Code2, ShieldCheck, Rocket } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building responsive interfaces, REST APIs, authentication systems, and complete web applications.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Exploring practical security through Python tools, network analysis, Linux, and secure application development.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description:
      "Constantly learning, experimenting with new technologies, and turning ideas into working products.",
  },
];

function About() {
  return (
    <section id="about" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="I build. I learn. I solve problems."
          description="I'm a developer focused on creating practical digital products while developing a strong foundation in cybersecurity."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-base leading-8 text-white/50"
          >
            <p>
              My journey into software development started in June 2025.
              Since then, I've been building real projects and learning how
              different parts of modern software systems work together.
            </p>

            <p>
              My primary focus is full-stack web development. I work with
              technologies such as React, JavaScript, Tailwind CSS, Python,
              Django, Django REST Framework, SQLite, REST APIs, and JWT
              authentication.
            </p>

            <p>
              Alongside development, I've been building my cybersecurity
              knowledge through practical projects and security-focused
              experimentation. This combination allows me to think about not
              only how applications work, but also how they can be made more
              secure.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <Icon size={20} className="text-white/70" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/40">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;