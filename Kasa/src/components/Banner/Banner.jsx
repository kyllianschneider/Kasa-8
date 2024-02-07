import '../Banner/banner.scss';

function Banner({image, texte}) {
    return(
        <div className='banner'>
            <img className="banner__img" src={image} alt="Bannière"/>
            <div className="banner__overlay"></div>
            <span className="banner__title">{texte}</span>
        </div>
    );
}

export default Banner;

