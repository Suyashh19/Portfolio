import React from "react";
import { Code2, Rocket, BrainCircuit } from "lucide-react";
import { theme } from "../styles/theme";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className={`w-5 h-5 ${theme.accent}`} />,
      value: "300+",
      label: "DSA Problems Solved",
    },
    {
      icon: <Rocket className={`w-5 h-5 ${theme.accent}`} />,
      value: "5+",
      label: "Projects Built",
    },
    {
      icon: <BrainCircuit className={`w-5 h-5 ${theme.accent}`} />,
      value: "AI / ML",
      label: "Academic Focus",
    },
  ];

  return (
    <section
      id="about"
      className={`relative py-28 ${theme.text}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">About</h2>
          <p className={`${theme.mutedText} text-lg`}>
            A quick snapshot of who I am and what I focus on.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left text */}
          <div className={`${theme.mutedText} leading-relaxed space-y-6`}>
            <p>
              I am an undergraduate student pursuing a Bachelor of Technology in
              <span className={`ml-1 ${theme.accent}`}>
                Artificial Intelligence and Machine Learning
              </span>{" "}
              at Walchand College of Engineering, Sangli.
            </p>

            <p>
              My focus is on building strong foundations in data structures,
              algorithms, and machine learning through consistent practice and
              real-world projects.
            </p>

            <p>
              I enjoy solving problems methodically and writing clean,
              efficient, and scalable solutions.
            </p>
          </div>

          {/* Right cards */}
          <div className="space-y-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-5 rounded-xl p-6 border ${theme.border} bg-black/40 backdrop-blur`}
              >
                <div className={`p-3 rounded-lg border ${theme.border}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className={theme.mutedText}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
