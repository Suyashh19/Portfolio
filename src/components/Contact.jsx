import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="px-10 py-28 bg-gradient-to-b from-black to-gray-950"
    >
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Contact
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-xl">
            Open to internships, collaborations, and technical discussions.
            Feel free to reach out if you’d like to connect or discuss ideas.
          </p>

          <div className="space-y-6">
            {/* EMAIL */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-blue-400" />
              <a
                href="mailto:suyashpatil7574@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                suyashpatil7574@gmail.com
              </a>
            </div>

            {/* LINKEDIN */}
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-xl text-blue-400" />
              <a
                href="https://www.linkedin.com/in/suyash-sandip-patil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT CTA CARD */}
        <div className="flex items-center">
          <div className="w-full border border-gray-800 rounded-2xl p-10 bg-black/40">
            <h3 className="text-2xl font-semibold mb-4">
              Let’s work together
            </h3>

            <p className="text-gray-400 mb-8">
              I’m always interested in learning opportunities, real-world
              projects, and meaningful collaborations.
            </p>

            <a
              href="mailto:suyashpatil7574@gmail.com"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
            >
              Send an Email →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
