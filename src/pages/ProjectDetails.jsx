import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import SafeImage from "../components/SafeImage";
import projects from "../data/projects";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { isRealLink } from "../utils/links";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  useDocumentTitle(
    project ? `${project.title} | Portfolio` : "Project not found | Portfolio",
  );

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/30">
            404
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            Project not found
          </h1>

          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
    <main className="min-h-screen bg-[#050505] px-6 pb-24 pt-12 text-white sm:pt-16">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            {project.category}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/50 md:text-lg">
            {project.longDescription}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          <SafeImage
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover object-top"
            fallback={
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-white/[0.04] to-transparent">
                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                  Screenshot coming soon
                </span>
              </div>
            }
          />
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Main */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Overview
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              About the project
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/40">
              {project.description}
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="text-lg font-semibold">
                Technologies
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white/50"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-fit rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Project Links
            </p>

            <div className="mt-5 space-y-3">
              {isRealLink(project.github) && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:border-white/30 hover:bg-white hover:text-black"
                >
                  <span className="flex items-center gap-3">
                    <FolderGit2 size={17} />
                    GitHub Repository
                  </span>

                  <ArrowUpRight size={15} />
                </a>
              )}

              {isRealLink(project.demo) && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:border-white/30 hover:bg-white hover:text-black"
                >
                  <span>Live Demo</span>

                  <ArrowUpRight size={15} />
                </a>
              )}

              {!isRealLink(project.github) && !isRealLink(project.demo) && (
                <p className="text-sm leading-6 text-white/40">
                  Links for this project are coming soon.
                </p>
              )}
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default ProjectDetails;