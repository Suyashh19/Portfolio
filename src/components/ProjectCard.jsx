function ProjectCard({ project }) {
  return (
    <div className="group border border-gray-800 rounded-2xl p-8 bg-black/40 hover:border-blue-400 transition">

      {/* TITLE */}
      <h3 className="text-2xl font-semibold mb-3">
        {project.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-3 mb-6">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 border border-gray-700 rounded-full text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* LINKS */}
      <div className="flex gap-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 font-medium group-hover:underline"
        >
          GitHub →
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-400 font-medium group-hover:underline"
          >
            Live →
          </a>
        )}
      </div>

    </div>
  );
}

export default ProjectCard;
