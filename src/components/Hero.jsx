import { useEffect, useState } from "react";
import resume from "../assets/resume/Suyash_Resume.pdf";

function Hero() {
  const roles = [
    "AI/ML Undergraduate",
    "C++ & DSA Enthusiast",
    "Problem Solver",
    "Future AI Engineer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    /* Changed items-center to items-end and added pb-16 for bottom spacing */
    <section className="min-h-screen flex items-end justify-center px-10 pb-16 bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-16 items-end">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins text-white">
            Suyash Sandip Patil
          </h2>

          <p className="mt-3 text-xl text-blue-400 transition-all duration-300">
            {roles[roleIndex]}
          </p>

          <p className="mt-5 text-lg text-gray-400 max-w-xl">
            Focused on building practical machine learning systems with strong
            foundations in C++ and data structures.
          </p>

          <div className="mt-8 flex gap-8 text-sm text-gray-400">
            <div>
              <span className="text-white font-semibold">300+</span>
              <p>DSA Problems</p>
            </div>
            <div>
              <span className="text-white font-semibold">5+</span>
              <p>Projects</p>
            </div>
            <div>
              <span className="text-white font-semibold">AI/ML</span>
              <p>Focused</p>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition hover:scale-105"
            >
              See My Work →
            </a>

            <a
              href={resume}
              download
              className="px-6 py-3 border border-gray-700 text-white rounded hover:border-white transition hover:scale-105"
            >
              View Resume
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Current focus: Advanced DSA • Machine Learning Fundamentals • Project-Based Learning
          </p>
        </div>

        {/* RIGHT FOCUS PANEL */}
        <div className="hidden md:flex flex-col justify-center">
          <div className="border border-gray-800 rounded-xl p-8 bg-black/40 backdrop-blur">
            <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-6">
              Core Focus
            </h3>

            <ul className="space-y-4 text-lg text-white">
              <li className="border-l-4 border-blue-400 pl-4">
                C++ & Data Structures
              </li>
              <li className="border-l-4 border-blue-400 pl-4">
                Python & Machine Learning
              </li>
              <li className="border-l-4 border-blue-400 pl-4">
                Competitive Programming
              </li>
              <li className="border-l-4 border-blue-400 pl-4">
                Problem Solving
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
// Hero.jsx updated successfully 