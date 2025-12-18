import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="px-10 py-28 bg-gradient-to-b from-black to-gray-950"
    >
      <div className="max-w-8xl mx-auto">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">
            A selection of projects demonstrating my work in machine learning,
            problem solving, and applied AI systems.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
