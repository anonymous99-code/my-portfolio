import { Award, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

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
      {/* Certificate Preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-white/[0.03]">
        <SafeImage
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          fallback={
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                <Award size={25} className="text-white/40" />
              </div>

              <span className="mt-4 text-xs uppercase tracking-[0.18em] text-white/30">
                Certificate Preview Unavailable
              </span>
            </div>
          }
        />

        {/* Completion Status */}
        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-black/80 px-3 py-1.5 backdrop-blur-md">
          <ShieldCheck size={12} className="text-emerald-400" />

          <span className="text-[10px] uppercase tracking-[0.12em] text-emerald-300">
            {certificate.status}
          </span>
        </div>
      </div>

      {/* Certificate Details */}
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.15em] text-white/40">
          {certificate.issuer}
        </p>

        <h3 className="mt-2 text-xl font-semibold tracking-tight">
          {certificate.title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-white/50">
          {certificate.description}
        </p>

        {certificate.dateIssued && (
          <p className="mt-4 text-xs text-white/40">
            Issued: {certificate.dateIssued}
          </p>
        )}

        {certificate.certificateNumber && (
          <p className="mt-2 break-all text-xs text-white/30">
            Certificate No: {certificate.certificateNumber}
          </p>
        )}

        {/* View Original Certificate */}
        {certificate.pdf && (
          <a
            href={certificate.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
          >
            <FileText size={16} />
            View Certificate
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default CertificateCard;
