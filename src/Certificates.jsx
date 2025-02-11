import java from "./assests/java.jpeg";
import python from "./assests/python.jpeg";
import sql from "./assests/sql.png";
import webdev from "./assests/webdev.png";
import Cyber from "./assests/cyberSecurity.png";
import quiz from "./assests/Screenshot 2024-03-25 121021.png";
function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <div>
        <h1>Certificates</h1>
      </div>
<p>These are Certifications of my knowledge on different technologies from different sites...</p>
      <div className="cert-container">
        <div className="cert-img">
          <div className="cert-img-cont">
            <img src={java} alt="Java" loading="lazy" title="Java" />
            <div className="overlay">
              <p className="description">This is the image description.</p>
               <a href={java } className="view-more">View More</a>
            </div>
          </div>

          <div className="cert-img-cont">
            <img src={python} alt="Python" loading="lazy" title="Python" />
            <div className="overlay">
              <p className="description">This is the image description.</p>
               <a href={python} className="view-more">View More</a>
            </div>
          </div>
          <div className="cert-img-cont">
            <img src={sql} alt="SQL" loading="lazy" title="SQL" />
            <div className="overlay">
              <p className="description">This is the image description.</p>
               <a href={sql } className="view-more">View More</a>
            </div>
          </div>
          <div className="cert-img-cont">
            <img src={webdev} alt="HTML,CSS,JS" loading="lazy" title="WebDEvelopment" />
            <div className="overlay">
              <p className="description">This is the image description.</p>
               <a href={webdev} className="view-more">View More</a>
            </div>
          </div>
          <div className="cert-img-cont">
            <img src={Cyber} alt="CyberSecurity" loading="lazy" title="CyberSecurity" />
            <div className="overlay">
              <p className="description">This is the image description.</p>
              <a href={Cyber} className="view-more">View More</a>
            </div>
          </div>
          <div className="cert-img-cont">
            <img src={quiz} alt="" loading="lazy" title="" />
            <div className="overlay">
              <p className="description">This is the image description.</p>
               <a href={quiz} className="view-more">View More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Certificates;
