import logo from './assests/Profile.jpg'
function Navbar() {
    
    return(
        <nav id="nav">
        <div>
        <div className="image">
            <img src={logo} alt="img" className="profile" />
            <h2>Naveen Veera</h2>
            <div className="social">
                <a href=""><i className="fa-brands fa-square-facebook"></i></a>
                <a href=""><i className="fa-brands fa-square-facebook"></i></a>
                <a href=""><i className="fa-brands fa-square-facebook"></i></a>
                <a href=""><i className="fa-brands fa-square-facebook"></i></a>
                <a href=""><i className="fa-brands fa-square-facebook"></i></a>
            </div>

        </div>
        </div>
        <ul>
            <li><a href="#">🏠 Home</a></li>
            <li><a href="#about">🙋🏼‍♂️  About</a></li>
            <li><a href="#skills">🏢 Skills</a></li>
            <li><a href="#projects">💼 Projects</a></li>
            <li><a href="#certificates">📄 Certificates</a></li>
            <li><a href="#contact">☎️ Contact</a></li>
        </ul>
    </nav>
    
    )
}
export default Navbar;