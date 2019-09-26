import React from 'react';
import InlineCard from './InlineCard.js';
import NoRecipes from './NoRecipes.js';

function InlineCardGenerator({ cardsToDisplay, setActiveRecipe }) {
    if (cardsToDisplay.length === 0) {
        return (
            <NoRecipes />
        );
    } else {
        return (
            <div className='cardArea'>
                {
                    cardsToDisplay.map((drink) => {
                        return (
                            <InlineCard
                                name={drink.name}
                                key={drink.id}
                                id={drink.id}
                                image={drink.image}
                                setActiveRecipe={setActiveRecipe}
                            />
                        );
                    })
                }
            </div>
        );
    };

}

export default InlineCardGenerator;