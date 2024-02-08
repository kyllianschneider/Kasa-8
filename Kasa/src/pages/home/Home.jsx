import { useState, useEffect } from "react";
import "./Home.scss";
import logements from "../../assets/logements.json";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/home-banner.png";
import Card from "../../components/Cards/Cards";

const Home = () => {
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
