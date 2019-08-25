import React from 'react';

function IngredientButtons({ setActiveIngredient }) {
    return (
        <div className='ingredientButtons'>
            <button id ='absinthe' onClick={ setActiveIngredient } className='btn'>Absinthe</button>
            <button id ='beer' onClick={ setActiveIngredient } className='btn'>Beer</button>
            <button id ='bitters' onClick={ setActiveIngredient } className='btn'>Bitters</button>
            <button id ='brandy' onClick={ setActiveIngredient } className='btn'>Brandy</button>
            <button id ='cachaça' onClick={ setActiveIngredient } className='btn'>Cachaça</button>
            <button id ='champagne' onClick={ setActiveIngredient } className='btn'>Champagne</button>
            <button id ='gin' onClick={ setActiveIngredient } className='btn'>Gin</button>
            <button id ='ouzo' onClick={ setActiveIngredient } className='btn'>Ouzo</button>
            <button id ='pisco' onClick={ setActiveIngredient } className='btn'>Pisco</button>
            <button id ='red wine' onClick={ setActiveIngredient } className='btn'>Red Wine</button>
            <button id ='rum' onClick={ setActiveIngredient } className='btn'>Rum</button>
            <button id ='sake' onClick={ setActiveIngredient } className='btn'>Sake</button>
            <button id ='schnapps' onClick={ setActiveIngredient } className='btn'>Schnapps</button>
            <button id ='sparkling wine' onClick={ setActiveIngredient } className='btn'>Sparkling Wine</button>
            <button id ='tequila' onClick={ setActiveIngredient } className='btn'>Tequila</button>
            <button id ='vodka' onClick={ setActiveIngredient } className='btn'>Vodka</button>
            <button id ='whisky' onClick={ setActiveIngredient } className='btn'>Whisky</button>
            <button id ='white wine' onClick={ setActiveIngredient } className='btn'>White Wine</button>
        </div>
    );
}

export default IngredientButtons;