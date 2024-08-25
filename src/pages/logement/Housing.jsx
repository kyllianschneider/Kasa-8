import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Carrousel from '../../Components/Carrousel/Carrousel';
import Rate from '../../Components/Rating/Rate';
import Tags from '../../Components/Tags/Tags';
import ListeLogements from '../../assets/logements.json';
import '../logement/Housing.scss'
import Collapse from '../../components/Collapse/Collapse';


function Housing() {
 //definir les parametres pour récuperer les id logements
    const { id } = useParams();
    const navigate = useNavigate()
    const logement = ListeLogements.find(logement => logement.id === id);
   
// définir une erreur pour un logement manquant 
    useEffect(() => {
        if (!logement) {
            navigate('/erreur');
            //Si le logement n'est pas défini, renvoie vers erreur en utilisant navigate
        }
    }, [logement, navigate]);


    if (!logement) {
        //revérifie et renvoie null si !logement
        return null;
    }



    const equipements = logement.equipments.map((equipment, index) => {
        //retourne la liste des equipements en utilisant la fonction map, de façons à avoir chaque équipements dans une liste 
        return <li className="collapseLogement__list" key={`${logement.id}-${equipment}-${index}`}>{equipment}</li>
    })

    return (
        //crée la section logement en utilisant le component carrousel pour les images et affiche les parametres des logements 
        <section className='logement'>
            <Carrousel images={logement.pictures} />
            <div className='logement__fichelogement'>
                <div className='logement__information'>
                    <h2 className='logement__title' >{logement.title}</h2>
                    <p className='logement__location' >{logement.location}</p>
                    
                    <div className='logement__tags'>
                        
                        {logement.tags.map((tags, index) => (
                            <Tags tags={tags} key={`${tags}-${index}`} />
                        ))}
                    </div>


                </div>
                <div className='logement__hostInformation'>
                    <div className='logement__details'>
                        <p className='logement__host'>{logement.host.name}</p>
                        <img className='logement__img' src={logement.host.picture} alt="photo de l'host" />
                    </div>
                    <div className="logement__rating" >

                        <Rate rating={logement.rating} />


                    </div>
                </div>
            </div>
            <div className='logement__collapse'>
                <Collapse className1="collapseLogement" className2="collapseLogement__header" titre='Description' description={logement.description} />
                <Collapse className1="collapseLogement" className2="collapseLogement__header" titre='Equipements' description={<ul className='collapseLogement__ul'>{equipements}</ul>} />
            </div>
        </section>
    );
}

export default Housing;