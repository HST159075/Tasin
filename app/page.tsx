import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Orbs */}
      <div className="orb" style={{width: '500px', height: '500px', background: 'rgba(255,90,0,0.08)', top: '-150px', left: '-150px'}}></div>
      <div className="orb" style={{width: '400px', height: '400px', background: 'rgba(255,40,100,0.06)', bottom: '200px', right: '-100px'}}></div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
