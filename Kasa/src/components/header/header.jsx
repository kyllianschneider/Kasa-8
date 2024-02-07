import logo from "../../assets/Logo.png";
import Nav from "../Nav/Nav";
import "./header.scss";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Le logo Kasa" className="header__logo" />
            <Nav className="nav-bar" />
        </header>
    );
}

export default Header;
