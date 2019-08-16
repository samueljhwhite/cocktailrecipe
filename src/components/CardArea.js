import React from 'react';
import CocktailCard from '../containers/CocktailCard';

function CardArea({ cocktails }) {
    return (
        <div>
            {
                cocktails.map((drink) => {
                    return (
                        <CocktailCard name={drink.name} method={drink.method} key={drink.id} ingredients={drink.ingredients}/>
                    );
                })
            }
        </div>
    )
}

export default CardArea;