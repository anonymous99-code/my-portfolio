import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            Portfolio
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl md:text-6xl">
            All Projects
          </h1>

          <p className="mt-5 text-base leading-7 text-white/50 md:text-lg">
            A collection of full-stack applications, creative interfaces,
            and cybersecurity projects I've built.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;