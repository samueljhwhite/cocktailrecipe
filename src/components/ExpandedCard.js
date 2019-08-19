import React from 'react';
import IngredientSpan from '../components/IngredientSpan';
import '../containers/CocktailCard.css';

function ExpandedCard({ image, name, ingredients, method, toggleCard }) {
    return (
        <div className='cocktailCard'>
            <h3 onClick={toggleCard}>{name}</h3>
            <button onClick={toggleCard}>Show Less!</button>
            {
                ingredients.map((individualIngredient) => {
                    return <IngredientSpan key={individualIngredient} ingredient={individualIngredient} />
                })
            }
            <p>{method}</p>
        </div>
    )
}

export default ExpandedCard;