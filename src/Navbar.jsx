import logo from "./assests/Profile.jpg";
function Navbar() {
  return (
    <nav id="nav">
      <div>
        <div className="image">
          <img src={logo} alt="img" className="profile" />
          <h2>Naveen Veera</h2>
          <div className="social">
            <a href="">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <ul>
            <li><a href="#home" class="nav-link">🏠 Home</a></li>
            <li><a href="#about" class="nav-link">🙋🏼‍♂️ About</a></li>
            <li><a href="#skills" class="nav-link">🏢 Skills</a></li>
            <li><a href="#projects" class="nav-link">💼 Projects</a></li>
            <li><a href="#certificates" class="nav-link">📄 Certificates</a></li>
            <li><a href="#contact" class="nav-link">☎️ Contact</a></li>
        </ul>
    </nav>
  );
}
export default Navbar;
