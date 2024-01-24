import logo from "../../assets/Logo.png";
import Nav from "../Nav/Nav";


function Header() {
    return (
        <header className="header">
            <figure className='header__figure'>
            <img src={logo} alt="Le logo Kasa" className="header__logo"/>
            </figure>
            <Nav className="nav-bar" />
        </header>
        
    )
}

export default Header;