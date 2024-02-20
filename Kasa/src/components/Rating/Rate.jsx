import React from 'react';
import starActive from '../../assets/starActive.png';
import starInactive from '../../assets/starInactive.png';
import "../Rating/rate.scss";



function Rate({ rating }) {
    const rate = [1, 2, 3, 4, 5];
    return (

        <>
            {rate.map((rank) =>
                rank <= rating ? (
                    <img key={rank.toString()} src={starActive} className="full-star" alt="starActive" />
                ) : (
                    <img key={rank.toString()} src={starInactive} className="empty-star" alt="starInactive" />
                )


            )}
        </>

    )


}

export default Rate;






