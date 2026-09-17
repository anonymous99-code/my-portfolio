import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've built."
          description="A selection of full-stack applications, creative interfaces, and cybersecurity projects built through hands-on learning."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
          >
            Explore all projects
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
