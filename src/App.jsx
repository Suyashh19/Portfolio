import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profiles from "./components/Profiles";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";





import { theme } from "./styles/theme";

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
    </div>
  );
}




export default App;
