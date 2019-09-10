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
                            key={drink.id}
                            id={drink.id}
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