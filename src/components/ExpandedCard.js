import React from 'react';
import ListGenerator from './ListGenerator.js';


function ExpandedCard({displayRecipe}) {
    const { image, name, equipment, ingredients,howToMix } = displayRecipe;

    return (
        <div className='expandedCocktailCard'>
            <div className='expandedCardImg'>
                <img className='cardImgLarge' src={image} alt={image} />
            </div>
            <div className='cocktailRecipe'>
                <h3>{name}</h3>
                
                <h3>Equiment</h3>
                <ListGenerator list={equipment} />
                
                <h3>Ingredients</h3>
                <ListGenerator list={ingredients} />
                
                <h3>How to Mix</h3>
                <ListGenerator list={howToMix} />
            </div>
        </div>
    );
}

export default ExpandedCard;




