import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import Nav from "../Nav/Nav";
import "./header.scss";

function Header() {
    return (
        <header className="header">
            <Link to={"/"}>
                <img src={logo} alt="Le logo Kasa" className="header__logo" />
            </Link>
            <Nav className="nav-bar" />
        </header>
    );
}

export default Header;
