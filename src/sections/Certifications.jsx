import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CertificateCard from "../components/CertificateCard";
import certificates from "../data/certificates";

function Certifications() {
  return (
    <section id="certifications" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Learning backed by credentials."
          description="Professional diplomas in full-stack web development and cybersecurity, reflecting my commitment to continuous learning and technical growth."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10">
              <Award size={18} className="text-white/60" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Continuous Learning
              </h3>

              <p className="mt-1 max-w-xl text-sm leading-6 text-white/40">
                I continue to strengthen my skills through hands-on projects,
                technical practice, and ongoing learning in web development
                and cybersecurity.
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/40">
            <ShieldCheck size={14} />
            Keep Growing
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
