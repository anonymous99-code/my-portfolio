import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Cybersecurity from "../sections/Cybersecurity";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";

function Home() {
  useDocumentTitle("Full-Stack Developer & Cybersecurity | Portfolio");

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Cybersecurity />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
