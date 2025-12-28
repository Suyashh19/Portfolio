import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `transition duration-200 hover:text-blue-400 ${
      activeSection === id
        ? "text-blue-400 border-b-2 border-blue-400 pb-1"
        : "text-gray-300"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/60 border-b border-gray-800 px-8 py-4 flex justify-between items-center">
      
      {/* BRAND */}
      <h1 className="text-lg font-semibold tracking-wide">
        Suyash<span className="text-blue-400">.</span>
      </h1>

      {/* NAV LINKS */}
      <ul className="flex items-center gap-8 text-sm">
        <li>
          <a href="#about" className={linkClass("about")}>
            About
          </a>
        </li>

        <li>
          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>
        </li>

        <li>
          <a href="#skills" className={linkClass("skills")}>
            Skills
          </a>
        </li>

        <li>
          <a href="#profiles" className={linkClass("profiles")}>
            Profiles
          </a>
        </li>

        {/* CTA */}
        <li>
          <a
            href="#contact"
            className="px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-black transition"
          >
            Get in Touch
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
