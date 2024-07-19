import Contact from "./Contact/Contact";
import Develop from "./Develop/Develop";
import Footer from "./Footer/Footer";
import Gumroad from "./Gumroad/Gumroad";
import HeroSection from "./HeroSection/HeroSection";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

export default function AllComp() {
  return (
    <main>
      <HeroSection />
      <Services />
      <Projects />
      <Develop />
      <Testimonials />
      <Gumroad />
      <Contact />
      <Footer />
    </main>
  );
}
