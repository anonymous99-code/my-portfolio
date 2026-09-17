import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
    >
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-white/[0.03]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-white/20">
              Project Preview
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/5" />

        <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 backdrop-blur-md">
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/60">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Information */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
          </div>

          <a
            href={`/projects/${project.id}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            aria-label={`View ${project.title} details`}
          >
            <ArrowUpRight size={17} />
          </a>
        </div>

        <p className="mt-4 text-sm leading-6 text-white/40">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/40 transition-colors group-hover:text-white/60"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs text-white/40 transition-colors hover:text-white"
          >
            <FolderGit2 size={15} />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs text-white/40 transition-colors hover:text-white"
          >
            Live Demo
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;