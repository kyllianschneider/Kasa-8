import '../Carrousel/carrousel.scss';
import fleche from "../../assets/fleche.svg";
import { useState } from 'react';



function Carrousel({ images }) {

    const [currentImage, setCurrentImage] = useState(0);
    const nombreImg = images.length;

    const prevImage = () => {
        if (currentImage === 0) {
            setCurrentImage(nombreImg - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    };

    const nextImage = () => {
        if (currentImage === nombreImg - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    };


    return (
        <>
            <section className="carrousel">

                {images.length > 1 && (
                    <img className="carrousel__fleche carrousel__gfleche" src={fleche} alt="flèche pour aller vers la gauche" onClick={prevImage} />
                )}
                {
                    images.map((image, index) => {
                        return (
                            <img key={index} className={index === currentImage ? 'carrousel__img actif' : 'carrousel__img'} src={image} alt="logements" />
                        )
                    })
                }
                {images.length > 1 && (
                <p className='carrousel__counter'>{`${currentImage + 1} / ${nombreImg}`}</p>
                )}
                {images.length > 1 && (

                    <img className="carrousel__fleche carrousel__dfleche" src={fleche} alt="flèche pour aller vers la droite" onClick={nextImage} />

                )}
            </section>



        </>




    )

}

export default Carrousel;



