function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 sm:mb-12 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 sm:mb-4 flex items-center gap-2.5 sm:gap-3 font-mono text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white/45">
          <span className="h-px w-6 sm:w-8 bg-gradient-to-r from-emerald-400/80 to-transparent" />
          {eyebrow}
        </p>
      )}

      <h2 className="bg-gradient-to-b pb-1 from-white to-white/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3.5 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7 text-white/50">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;