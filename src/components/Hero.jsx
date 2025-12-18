import resume from "../assets/resume/Suyash_Resume.pdf";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-10 bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins">
        Suyash Sandip Patil
        </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            AI/ML Undergraduate focused on building practical machine learning
            systems with strong foundations in C++ and data structures.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
            >
              View Projects
            </a>

           <a
  href={resume}
  download
  className="px-6 py-3 border border-gray-700 rounded hover:border-white transition"
>
  Download Resume
</a>
          </div>
        </div>

        {/* RIGHT FOCUS PANEL */}
        <div className="hidden md:flex flex-col justify-center">
          <div className="border border-gray-800 rounded-xl p-8 bg-black/40 backdrop-blur">
            <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-6">
              Core Focus
            </h3>

            <ul className="space-y-4 text-lg">
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
