import React from 'react';
import IngredientSpan from '../components/IngredientSpan';


function ExpandedCard({ displayRecipe, resetState }) {
    const { image, name, primaryIngredient, method } = displayRecipe;

    return (
        <div className='expandedCocktailCard'>
            <div className='cocktailCardContent'>
                <img className='cardImgLarge' src={image} alt={image} />
                <div className='cocktailCardText'>
                    <h3>{name}</h3>
                    <button onClick={resetState}>Show Less!</button>
                    <IngredientSpan primaryIngredient={primaryIngredient} />

                    <p>{method}</p>
                </div>
            </div>
        </div>
    );
}

export default ExpandedCard;




