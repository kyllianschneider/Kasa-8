import React from 'react';
import "../Tags/tags.scss";




function Tags({ tags }) {


    return (
        <div className='tags'>
            <div className='tags__tag'>{tags}</div>
        </div>
    );
    

}



export default Tags;
