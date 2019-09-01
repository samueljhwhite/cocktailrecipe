import React from 'react';
import ListGenerator from './ListGenerator.js';


function ExpandedCard({displayRecipe}) {
    const { image, name, equipment, ingredients, recipe } = displayRecipe;
    const { largeImg } = displayRecipe;

    return (
        <div className='expandedCocktailCard'>
            <div className='expandedCardImg'>
                <img src={largeImg} alt={name} />
            </div>
            <div className='cocktailRecipe'>
                <h1>{name}</h1>
                
                <h4>Equipment</h4>
                <ListGenerator list={equipment} />
                
                <h4>Ingredients</h4>
                <ListGenerator list={ingredients} />
                
                <h4>Recipe</h4>
                <ListGenerator list={recipe} />
            </div>
        </div>
    );
}

export default ExpandedCard;

// <img className='cardImgLarge' src={image} alt={image} />




