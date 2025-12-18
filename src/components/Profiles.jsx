import {
  FaGithub,
  FaLinkedin,
  FaKaggle,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
} from "react-icons/si";

import { profiles } from "../data/profiles";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  kaggle: FaKaggle,
  leetcode: SiLeetcode,
  codeforces: SiCodeforces,
  codechef: SiCodechef,
};

function Profiles() {
  return (
    <section
      id="profiles"
      className="scroll-mt-24 px-10 py-28 bg-gradient-to-b from-gray-950 to-black"
    >
      <div className="max-w-8xl mx-auto">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My Profiles
          </h2>
          <p className="text-gray-400 text-lg">
            Platforms where I actively practice, build, and showcase my coding
            and machine learning work.
          </p>
        </div>

        {/* PROFILES GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => {
            const Icon = iconMap[profile.type];

            return (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-800 rounded-2xl p-8 bg-black/40 hover:border-blue-400 transition flex items-center justify-between"
              >
                {/* LEFT TEXT */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-blue-400 transition">
                    View Profile →
                  </p>
                </div>

                {/* RIGHT ICON */}
                <Icon className="text-5xl text-gray-600 group-hover:text-blue-400 transition" />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Profiles;
