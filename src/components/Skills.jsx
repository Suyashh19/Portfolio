function Skills() {
  return (
    <section
      id="skills"
      className="px-10 py-24 bg-gradient-to-b from-gray-950 to-black"
    >
      <div className="max-w-8xl mx-auto">

        {/* TITLE + LEFT ALIGNMENT SAME AS ABOUT */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-14">
            Skills
          </h2>
        </div>

        {/* SKILLS GRID — STARTS FROM SAME LEFT EDGE */}
        <div className="max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="border border-gray-800 rounded-xl p-6 bg-black/40">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Programming
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>C++</li>
              <li>Python</li>
            </ul>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 bg-black/40">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              AI / Machine Learning
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Supervised Learning</li>
              <li>Model Evaluation</li>
              <li>Feature Engineering</li>
              <li>ML Pipelines</li>
            </ul>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 bg-black/40">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Web Development
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>HTML & CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 bg-black/40">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Tools & Platforms
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>NumPy</li>
              <li>Pandas</li>
              <li>scikit-learn</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
