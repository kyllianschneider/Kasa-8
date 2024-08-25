import React from 'react';
import { Link } from 'react-router-dom';
import '../Cards/cards.scss';




function Card({ id, image, titre, link }) {



    return (
        <>



            <Link to={link} className="card" key={id}>
                <img className="card__img" src={image} alt="" />
                <div className="card__overlay">
                    <h2 className='card__text'>{titre}</h2>
                </div>
            </Link>



        </>





    )

}

export default Card;

