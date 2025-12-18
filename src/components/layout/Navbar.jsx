function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800 px-8 py-4 flex justify-between items-center">
      
      {/* BRAND */}
      <h1 className="text-lg font-semibold">
        Suyash Patil
      </h1>

      {/* NAV LINKS */}
      <ul className="flex gap-6 text-sm">
        <li>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#profiles" className="hover:text-blue-400 transition">
            My Profiles
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
