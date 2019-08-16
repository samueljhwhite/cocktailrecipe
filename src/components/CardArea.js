import React from 'react';
import CocktailCard from '../containers/CocktailCard';

function CardArea({ cocktails, setActiveCocktail }) {
    return (
        <div>
            {
                cocktails.map((drink) => {
                    return (
                        <CocktailCard name={drink.name} method={drink.method} key={drink.id} ingredients={drink.ingredients} image={drink.image} setActiveCocktail={setActiveCocktail}/>
                    );
                })
            }
        </div>
    )
}

export default CardArea;