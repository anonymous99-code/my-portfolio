import { ArrowUpRight, FolderGit2, ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";
import { isRealLink } from "../utils/links";

function ProjectCard({ project, index }) {
  const hasGithub = isRealLink(project.github);
  const hasDemo = isRealLink(project.demo);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.1,
      }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-black/40"
    >
      {/* Project Image */}
      <Link
        to={`/projects/${project.id}`}
        className="relative block aspect-[16/10] overflow-hidden border-b border-white/10 bg-white/[0.03]"
        aria-label={`View ${project.title} details`}
      >
        <SafeImage
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          fallback={
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-white/[0.04] to-transparent">
              <ImageOff size={22} className="text-white/20" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                Preview coming soon
              </span>
            </div>
          }
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-60" />

        <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 backdrop-blur-md">
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/70">
            {project.category}
          </span>
        </div>
      </Link>

      {/* Project Information */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            <Link
              to={`/projects/${project.id}`}
              className="transition-colors hover:text-white/80"
            >
              {project.title}
            </Link>
          </h3>

          <Link
            to={`/projects/${project.id}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            aria-label={`View ${project.title} details`}
          >
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <p className="mt-4 text-sm leading-6 text-white/50">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6 mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/45 transition-colors group-hover:text-white/65"
            >
              {technology}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md px-1.5 py-1 text-xs text-white/30">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-5 border-t border-white/10 pt-5">
          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white"
            >
              <FolderGit2 size={15} />
              GitHub
            </a>
          )}

          {hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white"
            >
              Live Demo
              <ArrowUpRight size={14} />
            </a>
          )}

          {!hasGithub && !hasDemo && (
            <span className="text-xs text-white/30">
              Repository & demo coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
