import "../Banner/banner.scss";
import {useLocation } from "react-router-dom";



function Banner({ texte }) {
    const {pathname} = useLocation();

    return (
       
        <div className={`banner ${pathname === "/" ? "banner--home" : "banner--about"}`}>

            <div className="banner__overlay"></div>
            <span className="banner__title">{texte}</span>
        </div>
    );
}

export default Banner;
