import React from 'react';

function IngredientOptions({setActiveIngredientNAV}) {
    return (
        <select placeholder='Test' onChange={setActiveIngredientNAV} className='ingredientOptions'>
            <option></option>
            <option>Absinthe</option>
            <option>Beer</option>
            <option>Bitters</option>
            <option>Brandy</option>
            <option>Cachaça</option>
            <option>Champagne</option>
            <option>Gin</option>
            <option>Ouzo</option>
            <option>Pisco</option>
            <option>Red Wine</option>
            <option>Rum</option>
            <option>Sake</option>
            <option>Schnapps</option>
            <option>Sparkling Wine</option>
            <option>Tequila</option>
            <option>Vodka</option>
            <option>Whisky</option>
            <option>White Wine</option>
        </select>
    );
}

export default IngredientOptions;