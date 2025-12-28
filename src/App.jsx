import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profiles from "./components/Profiles";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";
import { theme } from "./styles/theme";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className={`${theme.background} ${theme.text}`}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Profiles />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}




export default App;
