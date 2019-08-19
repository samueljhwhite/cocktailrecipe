import React from 'react';
import IngredientSpan from '../components/IngredientSpan';

function ExpandedCard({ image, name, ingredients, method, toggleCard }) {
    return (
        
        <div className='expandedCocktailCard'>
            <div className='cocktailCardContent'>
                <img className='cardImgLarge' src={image} alt={image} />
                <div className='cocktailCardText'>
                    <h3 onClick={toggleCard}>{name}</h3>
                    <button onClick={toggleCard}>Show Less!</button>
                    {
                        ingredients.map((individualIngredient) => {
                            return <IngredientSpan key={individualIngredient} ingredient={individualIngredient} />
                        })
                    }
                    <p>{method}</p>
                </div>    
            </div>
        </div>

    )
}

export default ExpandedCard;

