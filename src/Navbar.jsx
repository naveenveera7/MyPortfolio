import { useState } from "react";
import logo from "./assests/Profile.jpg";
function Navbar() {
  const [visible,setVisible]= useState(true);
  const close=()=>{
    setVisible(false)
  }
  return (
    <div>
    {visible && (
    <nav id="nav">
      <div>
      <div className="nav-icon"  onClick={close}><i class="fa-solid fa-bars"></i></div>
        <div className="image">
          <img src={logo} alt="img" className="profile" title="Naveen Veera"/>
          <h2>Naveen Veera</h2>

          <div className="social">
            <a href="facebook.com">
            <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="Twitter.com">
            <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="Instagram.com">
            <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="whatsapp.com">
            <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="facebook.com">
            <i class="fa-regular fa-envelope"></i>
            </a>
          </div>
          
        </div>
      </div>
      <ul>
            <li><a href="#home" className="nav-link"><i class="fa-solid fa-house"></i> Home</a></li>
            <li><a href="#about" className="nav-link"><i class="fa-solid fa-user"></i> About</a></li>
            <li><a href="#skills" className="nav-link"><i class="fa-solid fa-code"></i> Skills</a></li>
            <li><a href="#projects" className="nav-link"><i class="fa-solid fa-laptop-code"></i> Projects</a></li>
            <li><a href="#certificates" className="nav-link"><i class="fa-solid fa-certificate"></i> Certificates</a></li>
            <li><a href="#contact" className="nav-link"><i class="fa-solid fa-address-book"></i> Contact</a></li>
        </ul>
  
    </nav>
    )}
    </div>
  );
}
export default Navbar;
