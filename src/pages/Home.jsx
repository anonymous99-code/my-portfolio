import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Cybersecurity from "../sections/Cybersecurity";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

function Home() {
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
