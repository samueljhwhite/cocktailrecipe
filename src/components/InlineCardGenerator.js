import React from 'react';
import InlineCard from './InlineCard';

function InlineCardGenerator({ cardsToDisplay, setActiveRecipe }) {
    return (
        <div className='cardArea'>
            {
                cardsToDisplay.map((drink) => {
                    return (
                        <InlineCard
                            name={drink.name}
                            method={drink.method}
                            key={drink.id}
                            id={drink.id}
                            primaryIngredient={drink.primaryIngredient}
                            image={drink.image}
                            setActiveRecipe={setActiveRecipe}
                        />
                    );
                })
            }
        </div>

    )
}

export default InlineCardGenerator;