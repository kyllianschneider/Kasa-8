import "../Banner/banner.scss";

function Banner({ texte }) {
    const Route = "/";

    return (
       
        <div className={`banner ${Route === "/" ? "banner--home" : "banner--about"}`}>

            <div className="banner__overlay"></div>
            <span className="banner__title">{texte}</span>
        </div>
    );
}

export default Banner;
