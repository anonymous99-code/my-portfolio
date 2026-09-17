import { Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

function CertificateCard({ certificate, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-white/[0.03]">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <Award size={25} className="text-white/30" />
          </div>

          <span className="mt-4 text-xs uppercase tracking-[0.18em] text-white/20">
            Certificate Pending
          </span>
        </div>

        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
          <Clock size={12} className="text-white/30" />

          <span className="text-[10px] uppercase tracking-[0.12em] text-white/40">
            {certificate.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.15em] text-white/30">
          {certificate.issuer}
        </p>

        <h3 className="mt-2 text-xl font-semibold tracking-tight">
          {certificate.title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-white/40">
          {certificate.description}
        </p>
      </div>
    </motion.article>
  );
}

export default CertificateCard;