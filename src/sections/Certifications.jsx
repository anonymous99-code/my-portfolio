import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
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
          description="Professional certifications I'm working toward as I continue developing my skills in full-stack development and cybersecurity."
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
              <Award size={18} className="text-white/40" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Certificates coming soon
              </h3>

              <p className="mt-1 max-w-xl text-sm leading-6 text-white/30">
                These credentials will be added here once they are officially
                issued.
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/20">
            In progress
            <ArrowUpRight size={14} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;