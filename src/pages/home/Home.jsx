import { useState, useEffect } from "react";
import "./Home.scss";
import logements from "../../assets/logements.json";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Cards";

const Home = () => {
    //récupère les logements et les utilises dans un tableau pour les affichers sous forme de carte 
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(logements);
    }, [data]);

    return (
        <section className="home">
            <Banner
                texte={
                    <p className="home__bannertxt">
                        Chez vous, <br className="mobile-break" />
                        partout et ailleurs
                    </p>
                }
            />
            <div className="cards-container">
                {data.length > 0 ? (
                    <>
                        {data.map((logement) => (
                            <Card
                            //appelle le component card et lui ajoute tout les composants nécessaires
                                link={"ficheLogement/" + logement.id}
                                key={logement.id}
                                id={logement.id}
                                image={logement.cover}
                                titre={logement.title}
                            />
                        ))}
                    </>
                ) : (
                    <p>Une erreur est survenue lors de l'affichage des logements !</p>
                )}
            </div>
        </section>
    );
};

export default Home;
