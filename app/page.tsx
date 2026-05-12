import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function Home() {
  return (
    <>
      <BackgroundAnimation />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <TechStack />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
