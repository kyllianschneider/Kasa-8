import "../Banner/banner.scss";

function Banner({ texte }) {
    const route = "/";

    return (
        // a faire en dessous c'est un example
        <div className={`banner ${route == "/" ? "banner--home" : "banner--about"}`}>

            <div className="banner__overlay"></div>
            <span className="banner__title">{texte}</span>
        </div>
    );
}

export default Banner;
