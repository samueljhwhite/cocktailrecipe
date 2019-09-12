import React from 'react';

function InlineCard({ image, name, setActiveRecipe, id }) {
    return (

        <div className='cocktailCard'>
            <div className='cocktailCardContent' id={id} onClick={setActiveRecipe}>
            <img className='cardImg' src={image} alt={image} id={id}/>
                <div className='cocktailCardText' id={id}>
                    <h3 id={id} >{name}</h3>
                </div>
            </div>
        </div>
        
    )
}

export default InlineCard;