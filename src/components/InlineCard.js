import React from 'react';
import IngredientSpan from '../components/IngredientSpan';

function InlineCard({ image, name, primaryIngredient, toggleCard, setActiveRecipe, id }) {
    return (

        <div className='cocktailCard'>
            <div className='cocktailCardContent'>
                <img id={id} className='cardImg' src={image} alt={image} onClick={setActiveRecipe}/>
                <div className='cocktailCardText'>
                    <h3 onClick={toggleCard}>{name}</h3>
                    <h2>{primaryIngredient}</h2>
                    <IngredientSpan primaryIngredient={primaryIngredient} />

                </div>
            </div>
        </div>
        
    )
}

export default InlineCard;