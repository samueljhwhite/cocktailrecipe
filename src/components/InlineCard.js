import React from 'react';
import IngredientSpan from '../components/IngredientSpan';

function InlineCard({ image, name, ingredients, toggleCard, setActiveRecipe, id }) {
    return (

        <div className='cocktailCard'>
            <div className='cocktailCardContent'>
                <img id={id} className='cardImg' src={image} alt={image} onClick={setActiveRecipe}/>
                <div className='cocktailCardText'>
                    <h3 onClick={toggleCard}>{name}</h3>
                    {
                        ingredients.map((individualIngredient) => {
                            return <IngredientSpan key={individualIngredient} ingredient={individualIngredient} />
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}

export default InlineCard;