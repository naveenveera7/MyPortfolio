import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./contact";
import Bottom from "./Bottom";
import { useEffect,useState } from "react";
function Main() {

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const homeBounds = homeSection.getBoundingClientRect();

      if (homeBounds.top < window.innerHeight && homeBounds.bottom > 0) {
        setIsButtonVisible(false);
        
      } else {
        setIsButtonVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
 
  return (
    <main class="main">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Bottom />
      {isButtonVisible && (
        <div className="foot-button">
          <a href="#home"><i class="fa-solid fa-arrow-up"></i></a>
          </div>
      )}
    </main>
  );
}
export default Main;
